import React, { PropsWithChildren, useEffect, useState } from "react";
import { PostT, UserT } from "../types";
import { db } from "../DB/db";

type BlogContext = {
  posts: PostT[];
  sectionTitles: string[];
};

const BlogContext = React.createContext<BlogContext>({
  posts: [],
  sectionTitles: [],
});

export const BlogContextProvider = (props: PropsWithChildren) => {
  // const [state, setState] = useState<BlogContext>({ posts: [] });
  const posts: PostT[] = db.posts;

  // TAGS
  const tagsArrays: string[][] = posts.map((post) => {
    return post.tags;
  });

  let sectionTitles: string[] = [];
  tagsArrays.forEach((array) => {
    array.forEach((tag) => {
      !sectionTitles.includes(tag) && sectionTitles.push(tag);
    });
  });

  let randomTitles: string[] = [];
  while (randomTitles.length !== 5) {
    const title =
      sectionTitles[Math.floor(Math.random() * sectionTitles.length)];

    !randomTitles.includes(title) && randomTitles.push(title);
  }

  // USER
  let userIdArray: number[] = [];
  posts.map((post) => {
    !userIdArray.includes(post.userId) && userIdArray.push(post.userId);
  });

  const getUsers = async () => {
    const data = await fetch(
      `https://randomuser.me/api/?results=${userIdArray.length}`
    )
      .then((response) => response.json())
      .then((data) => data.results)
      .then((results) => results)
      .catch((err) => console.log(err));

    const users: UserT = data.map((user: any, index: number) => {
      return {
        userId: userIdArray[index],
        image: user.picture.thumbnail,
        username: user.login.username,
      };
    });

    console.log(users);
    return users;
  };

  getUsers();

  // IMAGE
  const getImages = async () => {
    let images: string[] = [];

    for (let i = 0; i < userIdArray.length; i++) {
      await fetch("https://picsum.photos/600/200?grayscale")
        .then((response) => images.push(response.url))
        .catch((err) => console.log(err));
    }

    console.log(images);
    return images;
  };

  getImages();

  // const users: UserT =

  // useEffect(() => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((data) => data.json())
  //     .then((results) => setState(results))
  //     .catch((error) => console.log(error));

  //   return () => {};
  // }, []);

  return (
    <BlogContext.Provider
      value={{
        posts: posts,
        sectionTitles: randomTitles,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
