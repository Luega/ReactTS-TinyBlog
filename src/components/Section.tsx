import Post from "./Post";

const Section = () => {
  return (
    <section className="blog__section">
      <header className="section__header">
        <h2>SECTION</h2>
        <button>dropdown</button>
      </header>
      <div className="section__postsContainer">
        <Post />
      </div>
    </section>
  );
};

export default Section;
