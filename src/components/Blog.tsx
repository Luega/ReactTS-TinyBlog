import { useContext } from "react";
import BlogContext from "../context/blog-context";
import Carousel from "./Carousel";
import Section from "./Section";
import { v4 as uuidv4 } from "uuid";

const Blog = () => {
  const { sectionTitles, users, posts } = useContext(BlogContext);

  if (sectionTitles.length !== 0 && users.length !== 0 && posts.length !== 0) {
    return (
      <>
        <main className="blog py-4 text-center">
          <Carousel />

          <ul className="blog__sectionsContainer w-4/5 m-auto">
            {sectionTitles.map((title) => {
              return (
                <li key={uuidv4()}>
                  <Section title={title} />
                </li>
              );
            })}
          </ul>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="w-full min-h-screen">
        <div className="w-3/4 h-screen m-auto p-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-1 md:grid-row-2 lg:grid-row-3">
          <div className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></div>
          <div className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></div>
          <div className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></div>
          <div className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></div>
          <div className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></div>
          <div className="my__isLoading__card w-full h-full m-auto border rounded-lg shadow-lg"></div>
        </div>
      </main>
    </>
  );
};

export default Blog;
