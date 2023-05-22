import Section from "./Section";

const Blog = () => {
  return (
    <main className="blog">
      <header className="blog__header">
        <h1>All Posts</h1>
      </header>
      <div className="blog__sectionsContainer">
        <Section />
      </div>
    </main>
  );
};

export default Blog;
