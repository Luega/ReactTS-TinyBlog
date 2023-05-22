import { BlogContextProvider } from "../context/blog-context";
import Carousel from "./Carousel";
import Section from "./Section";

const Blog = () => {
  return (
    <BlogContextProvider>
      <header className="blog__header text-center">
        <h1 className="p-8 text-8xl">All Posts</h1>
      </header>
      <main className="blog text-center">
        <Carousel />

        <ul className="blog__sectionsContainer w-4/5 m-auto">
          <li>
            <Section title="mystery" />
          </li>
          <li>
            <Section title="history" />
          </li>
          <li>
            <Section title="fiction" />
          </li>
          <li>
            <Section title="crime" />
          </li>
          <li>
            <Section title="love" />
          </li>
        </ul>
      </main>
    </BlogContextProvider>
  );
};

export default Blog;
