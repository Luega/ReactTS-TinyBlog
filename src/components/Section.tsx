import { useContext, useEffect, useState } from "react";
import BlogContext from "../context/blog-context";
import Post from "./Post";

type Props = {
  title: string;
};

const Section = ({ title }: Props) => {
  const { posts } = useContext(BlogContext);
  const [visible, setVisible] = useState(false);

  const sectionPosts = posts.filter((post) => post.tags.includes(`${title}`));

  const visibilityHandler = () => {
    setVisible(!visible);
  };

  return (
    <section className="blog__section">
      <header className="section__header">
        <h2 className="text-4xl font-bold">{title}</h2>
        <button onClick={visibilityHandler}>Read</button>
      </header>
      <div
        className={`section__articlesContainer ${visible ? "block" : "hidden"}`}
      >
        {sectionPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Section;
