import { useContext, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiStop } from "react-icons/hi2";
import BlogContext from "../context/blog-context";
import CarouselPost from "./CarouselPost";

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
    if (newIndex >= popularPosts.length) {
      newIndex = popularPosts.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel flex flex-col justify-center overflow-hidden">
      <div
        className="carousel__inner whitespace-nowrap transition duration-[2000ms] ease-in-out"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {popularPosts.map((post) => {
          return <CarouselPost key={post.id} post={post} />;
        })}
      </div>
      <div className="carousel__buttons my-4 flex justify-evenly">
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <HiChevronLeft />
        </button>
        <div className="indicators flex justify-around items-center">
          {popularPosts.map((post, index) => {
            return (
              <button key={post.id} onClick={() => updateIndex(index)}>
                <HiStop />
              </button>
            );
          })}
        </div>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
