import React, { PropsWithChildren, useEffect, useState } from "react";
import { PostT } from "../types";
import { db } from "../DB/db";

type BlogContext = {
  posts: PostT[];
};

const BlogContext = React.createContext<BlogContext>({
  posts: [],
});

export const BlogContextProvider = (props: PropsWithChildren) => {
  // const [state, setState] = useState<BlogContext>({ posts: [] });
  const posts: PostT[] = db.posts;

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
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
