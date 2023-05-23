import { useState } from "react";
import { PostT } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

type Props = {
  post: PostT;
};

const Post = ({ post }: Props) => {
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
        <div className="user__image w-10 me-2 rounded-full overflow-hidden">
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            alt={`${post.userId} - Luca Martinelli`}
          />
        </div>
        <h4 className="user__name text-sm italic">
          {post.userId} - Luca Martinelli
        </h4>
      </div>
      <div className="article__image w-2/3 mx-auto my-3 rounded overflow-hidden">
        <img src="https://picsum.photos/600/400" alt={post.title} />
      </div>
      <h3 className="article__title mb-2 text-xl font-bold">{post.title}</h3>
      <p className="article__body mb-4">{post.body}</p>
      <div className="article__reactions absolute bottom-2 left-4">
        <span>{reaction}</span>
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
