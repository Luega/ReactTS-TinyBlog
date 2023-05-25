import React, { PropsWithChildren, useEffect, useState } from "react";
import { PostT, UserT } from "../types";
import { imagesArray } from "./images-array";

type BlogContextT = {
  posts: PostT[];
  sectionTitles: string[];
  users: UserT[];
};

const BlogContext = React.createContext<BlogContextT>({
  posts: [],
  sectionTitles: [],
  users: [],
});

export const BlogContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<BlogContextT>({
    posts: [],
    sectionTitles: [],
    users: [],
  });

  useEffect(() => {
    const getData = async () => {
      const posts: PostT[] = await fetch("https://dummyjson.com/posts")
        .then((data) => data.json())
        .then((results) => results.posts)
        .catch((error) => console.log(error));

      posts.forEach((post, index) => (post.image = imagesArray[index]));

      const tagArrays: string[][] = posts.map((post) => {
        return post.tags;
      });

      let sectionTitles: string[] = [];
      tagArrays.forEach((array) => {
        array.forEach((tag) => {
          !sectionTitles.includes(tag) && sectionTitles.push(tag);
        });
      });

      let displayedTitles: string[] = [];
      while (displayedTitles.length !== 5) {
        const title =
          sectionTitles[Math.floor(Math.random() * sectionTitles.length)];

        !displayedTitles.includes(title) && displayedTitles.push(title);
      }

      let userIdArray: number[] = [];
      posts.forEach((post) => {
        !userIdArray.includes(post.userId) && userIdArray.push(post.userId);
      });

      const users: UserT[] = await fetch(
        `https://randomuser.me/api/?results=${userIdArray.length}`
      )
        .then((response) => response.json())
        .then((data) => data.results)
        .then((results) =>
          results.map((user: any, index: number) => {
            return {
              userId: userIdArray[index],
              image: user.picture.thumbnail,
              username: user.login.username,
            };
          })
        )
        .catch((err) => console.log(err));

      setState((prevState) => {
        return {
          ...prevState,
          posts: posts,
          sectionTitles: displayedTitles,
          users: users,
        };
      });
    };

    getData();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        posts: state.posts,
        sectionTitles: state.sectionTitles,
        users: state.users,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
