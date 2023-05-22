import { BlogContextProvider } from "../context/blog-context";
import Section from "./Section";

const Blog = () => {
  return (
    <BlogContextProvider>
      <main className="blog text-center">
        <header className="blog__header">
          <h1 className="p-8 text-8xl">All Posts</h1>
        </header>
        <div className="blog__sectionsContainer w-4/5 m-auto">
          <Section title="mystery" />
          <Section title="history" />
          <Section title="fiction" />
          <Section title="crime" />
          <Section title="love" />
        </div>
      </main>
    </BlogContextProvider>
  );
};

export default Blog;
