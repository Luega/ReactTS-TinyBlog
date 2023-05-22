import classes from "./Post.module.css";
import { PostT } from "../types";

type Props = {
  post: PostT;
};

const Post = ({ post }: Props) => {
  return (
    <article
      className={`${classes.section__article} p-6 text-start border rounded-lg shadow-lg relative`}
    >
      <h3 className="article__title mb-2 text-xl font-bold">{post.title}</h3>
      <p className="article__body mb-4">{post.body}</p>
      <div className="article__tags absolute bottom-2 right-2">
        {post.tags.map((tag) => (
          <span className="me-2" key={`${tag}-${post.id}`}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Post;
