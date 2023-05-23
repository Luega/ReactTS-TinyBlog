import { useContext, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import BlogContext from "../context/blog-context";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const { sectionTitles } = useContext(BlogContext);
  const [dropdown, setDropdown] = useState(false);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className="blog__header mb-4 pb-4 text-center border shadow-sm">
      <h1 className="p-8 text-5xl md:text-6xl lg:text-7xl">Daily News</h1>

      <button
        className="header__dropdown text-3xl md:hidden"
        onClick={dropdownHandler}
      >
        <HiOutlineBars3 />
      </button>

      <nav
        className={`header__nav mb-4 flex flex-col ${
          dropdown ? "block" : "hidden"
        } md:block`}
      >
        {sectionTitles.map((title) => {
          return (
            <a
              key={uuidv4()}
              className="nav__link p-4 uppercase font-semibold hover:md:border-b hover:md:border-black"
              onClick={dropdownHandler}
              href={`#${title}`}
            >
              {title}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
