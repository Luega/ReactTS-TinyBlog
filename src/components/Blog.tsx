import { BlogContextProvider } from "../context/blog-context";
import Section from "./Section";

const Blog = () => {
  return (
    <BlogContextProvider>
      <main className="blog">
        <header className="blog__header">
          <h1>All Posts</h1>
        </header>
        <div className="blog__sectionsContainer">
          <Section title="history" />
          <Section title="crime" />
          <Section title="fiction" />
          <Section title="mystery" />
          <Section title="love" />
        </div>
      </main>
    </BlogContextProvider>
  );
};

export default Blog;
