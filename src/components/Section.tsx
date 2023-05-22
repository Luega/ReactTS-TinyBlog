import { useContext, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
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
    <section className="blog__section my-8">
      <header className="section__header mb-6 flex items-center">
        <h2 className="capitalize text-3xl font-bold me-3">{title}</h2>
        <button onClick={visibilityHandler}>
          <HiChevronDown className={`${visible ? "hidden" : "block"}`} />
          <HiChevronUp className={`${visible ? "block" : "hidden"}`} />
        </button>
      </header>
      <div
        className={`section__articlesContainer grid gap-4 grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 ${
          visible ? "block" : "hidden"
        }`}
      >
        {sectionPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Section;
