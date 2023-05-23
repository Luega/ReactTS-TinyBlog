import { useContext } from "react";
import BlogContext from "../context/blog-context";
import Carousel from "./Carousel";
import Section from "./Section";
import { v4 as uuidv4 } from "uuid";

const Blog = () => {
  const { sectionTitles } = useContext(BlogContext);

  return (
    <>
      <main className="blog text-center">
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
};

export default Blog;
