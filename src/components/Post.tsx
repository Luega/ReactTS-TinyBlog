import { PostT } from "../types";

type Props = {
  post: PostT;
};

const Post = ({ post }: Props) => {
  return (
    <article className="section__article">
      <h3 className="article__title text-xl font-bold">{post.title}</h3>
      <p className="article__body">{post.body}</p>
      <div className="article__tags">
        {post.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default Post;
