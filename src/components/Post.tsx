import { PostT } from "../types";
import { v4 as uuidv4 } from "uuid";

type Props = {
  post: PostT;
};

const Post = ({ post }: Props) => {
  return (
    <article className="section__article h-full p-6 text-start border rounded-lg shadow-lg relative">
      <h3 className="article__title mb-2 text-xl font-bold">{post.title}</h3>
      <p className="article__body mb-4">{post.body}</p>
      <div className="article__tags absolute bottom-2 right-2">
        {post.tags.map((tag) => (
          <span className="me-2" key={uuidv4()}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Post;
