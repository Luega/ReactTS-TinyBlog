import { useContext, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiStop } from "react-icons/hi2";
import BlogContext from "../context/blog-context";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

const Carousel = () => {
  const { posts } = useContext(BlogContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const popularPosts = posts.sort((postA, postB) => {
    return postB.reactions - postA.reactions;
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    if (newIndex >= 5) {
      newIndex = 4;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel flex flex-col justify-center overflow-hidden">
      <div className="carousel__buttons my-4 flex justify-evenly text-2xl">
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <HiChevronLeft />
        </button>
        <div className="indicators flex justify-around items-center">
          {popularPosts.map((post, index) => {
            return (
              index < 5 && (
                <button
                  className="text-xl"
                  key={uuidv4()}
                  onClick={() => updateIndex(index)}
                >
                  <HiStop />
                </button>
              )
            );
          })}
        </div>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <HiChevronRight />
        </button>
      </div>
      <div
        className="carousel__inner whitespace-nowrap transition duration-[2000ms] ease-in-out"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {popularPosts.map((post, index) => {
          return (
            index < 5 && (
              <div
                key={uuidv4()}
                className="carousel__post w-full
                inline-flex
                justify-center
                items-center"
              >
                <div className="w-3/4 lg:w-1/2 whitespace-normal">
                  <Post post={post} />
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
