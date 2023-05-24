import React, { PropsWithChildren, useEffect, useState } from "react";
import { PostT, UserT } from "../types";
import { db } from "../DB/db";

type BlogContext = {
  posts: PostT[];
  sectionTitles: string[];
  users: UserT[];
};

const BlogContext = React.createContext<BlogContext>({
  posts: [],
  sectionTitles: [],
  users: [],
});

export const BlogContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<BlogContext>({
    posts: [],
    sectionTitles: [],
    users: [],
  });

  useEffect(() => {
    const getData = async () => {
      // AWAIT FETCH POST
      const posts: PostT[] = db.posts;
      // const posts: PostT[] = await fetch("https://dummyjson.com/posts")
      //   .then((data) => data.json())
      //   .then((results) => results.posts)
      //   .catch((error) => console.log(error));

      // TAGS
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

      // USERID ARRAY
      let userIdArray: number[] = [];
      posts.map((post) => {
        !userIdArray.includes(post.userId) && userIdArray.push(post.userId);
      });

      // AWAIT FETCH USER
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

      // AWAIT FETCH IMAGE
      await fetch(`https://picsum.photos/v2/list?page=3&limit=${posts.length}`)
        .then((response) => response.json())
        .then((data) =>
          data.map(
            (image: any, index: number) =>
              (posts[index] = { ...posts[index], image: image.download_url })
          )
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
