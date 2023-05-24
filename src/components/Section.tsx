import { useContext, useState } from "react";
import { HiChevronDown, HiChevronUp, HiChevronDoubleUp } from "react-icons/hi2";
import BlogContext from "../context/blog-context";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

type Props = {
  title: string;
};

const Section = ({ title }: Props) => {
  const { posts, users } = useContext(BlogContext);
  const [visible, setVisible] = useState(true);

  const sectionPosts = posts.filter((post) => post.tags.includes(`${title}`));

  const visibilityHandler = () => {
    setVisible(!visible);
  };

  return (
    <section id={title} className="blog__section pt-6 relative">
      <header
        className={`section__header pb-2 flex items-center ${
          !visible && "border-b"
        }`}
      >
        <h2 className="section__title capitalize text-3xl font-bold me-3">
          {title}
        </h2>
        <button onClick={visibilityHandler} className="text-2xl">
          <HiChevronDown className={visible ? "hidden" : "block"} />
          <HiChevronUp className={visible ? "block" : "hidden"} />
        </button>
      </header>
      <ul
        className={`section__articlesContainer grid gap-4 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
          visible ? "block" : "hidden"
        }`}
      >
        {sectionPosts.map((post, index) => (
          <li key={uuidv4()}>
            <Post
              post={post}
              user={users.find((user) => user.userId === post.userId)}
            />
          </li>
        ))}
      </ul>
      <button>
        <a href="#root" className="absolute top-5 right-0 text-2xl">
          <HiChevronDoubleUp />
        </a>
      </button>
    </section>
  );
};

export default Section;
