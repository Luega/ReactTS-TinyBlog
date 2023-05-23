import React, { PropsWithChildren, useEffect, useState } from "react";
import { PostT } from "../types";
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
