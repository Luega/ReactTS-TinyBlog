import React from "react";
import { PostT } from "../types";
import Post from "./Post";

type Props = {
  post: PostT;
};

const CarouselPost = ({ post }: Props) => {
  return (
    <div
      className="carousel__post w-full inline-flex justify-center items-center"
      // style={{ transform: `translate(-${activeIndex * 100}%)` }}
    >
      <div className="w-1/2 whitespace-normal">
        <Post post={post} />
      </div>
    </div>
  );
};

export default CarouselPost;
