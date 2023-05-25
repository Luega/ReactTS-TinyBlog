import { useState } from "react";
import { PostT, UserT } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

type Props = {
  post: PostT;
  user?: UserT;
};

const Post = ({ post, user }: Props) => {
  const [reaction, setReaction] = useState<number>(post.reactions);

  const favouriteHandler = () => {
    setReaction((prevState) => {
      if (prevState === post.reactions) {
        return prevState + 1;
      }

      return prevState - 1;
    });
  };

  return (
    <article className="section__article h-full p-6 text-start border rounded-lg shadow-lg relative">
      <div className="article__user flex items-center">
        <div className="user__image w-15 me-4 border rounded-full overflow-hidden">
          <img src={user?.image} alt={`${user?.username}`} />
        </div>
        <h4 className="user__name italic">{user?.username}</h4>
      </div>
      <div className="article__image mx-auto my-6 rounded overflow-hidden">
        <img
          src={post.image ? post.image : `https://picsum.photos/600/400`}
          alt={post.title}
          className="m-auto h-[300px] object-cover rounded"
        />
      </div>
      <h3 className="article__title mb-2 text-2xl font-bold">{post.title}</h3>
      <p className="article__body mb-4">{post.body}</p>
      <div className="article__reactions absolute bottom-2 left-4">
        <span className="italic">{reaction}</span>
        <AiOutlineHeart
          className={`ms-2 cursor-pointer ${
            reaction === post.reactions ? "inline" : "hidden"
          }`}
          onClick={favouriteHandler}
        />
        <AiFillHeart
          className={`ms-2 cursor-pointer ${
            reaction === post.reactions ? "hidden" : "inline"
          }`}
          onClick={favouriteHandler}
        />
      </div>
      <div className="article__tags absolute bottom-2 right-4">
        {post.tags.map((tag) => (
          <span className="me-2 italic" key={uuidv4()}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Post;
