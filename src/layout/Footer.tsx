import { useContext } from "react";
import BlogContext from "../context/blog-context";
import { v4 as uuidv4 } from "uuid";
import { HiChevronDoubleUp } from "react-icons/hi2";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  const { sectionTitles } = useContext(BlogContext);

  return (
    <footer className="blog__footer w-full py-10 flex items-center justify-center relative border-t shadow-2xl">
      <div className="footer__social w-full md:w-1/3 lg:w-2/6 flex flex-col text-2xl md:text-3xl lg:text-4xl">
        <h4 className="mb-4 text-center">Daily News</h4>
        <ul className="flex justify-center">
          <li>
            <a
              className="p-2"
              href="https://github.com/Luega"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="text- inline me-2" />
            </a>
          </li>
          <li>
            <a
              className="p-2"
              href="https://linkedin.com/in/martinelliluca"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="inline me-2" />
            </a>
          </li>
          <li>
            <a
              className="p-2"
              href="mailto:lucamartinelli.developer@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="inline me-2" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__nav w-2/3 lg:w-2/6 hidden lg:block">
        <h4 className="text-center font-semibold capitalize lg:text-xl">
          sections:
        </h4>
        <nav className="flex justify-around items-center lg:justify-center">
          {sectionTitles.map((title) => {
            return (
              <a
                key={uuidv4()}
                className="nav__link p-4 capitalize font-semibold"
                href={`#${title}`}
              >
                {title}
              </a>
            );
          })}
        </nav>
      </div>
      <button>
        <a
          href="#root"
          className="absolute top-5 right-10 lg:right-20 text-3xl"
        >
          <HiChevronDoubleUp />
        </a>
      </button>
    </footer>
  );
};

export default Footer;
