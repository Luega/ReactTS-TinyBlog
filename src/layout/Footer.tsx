import { useContext } from "react";
import BlogContext from "../context/blog-context";
import { v4 as uuidv4 } from "uuid";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  const { sectionTitles } = useContext(BlogContext);

  return (
    <footer className="blog__footer w-full mt-5 py-10 flex items-center justify-center border-t shadow-2xl">
      <div className="footer__social w-full md:w-1/3 lg:w-2/6 flex flex-col text-2xl md:text-3xl lg:text-4xl">
        <h4 className="mb-4 text-center">Daily News</h4>
        <ul className="flex justify-center">
          <li>
            <a className="p-2" href="https://github.com/Luega" target="_blank">
              <AiOutlineGithub className="text- inline me-2" />
            </a>
          </li>
          <li>
            <a
              className="p-2"
              href="https://linkedin.com/in/martinelliluca"
              target="_blank"
            >
              <AiOutlineLinkedin className="inline me-2" />
            </a>
          </li>
          <li>
            <a
              className="p-2"
              href="mailto:lucamartinelli.developer@gmail.com"
              target="_blank"
            >
              <AiOutlineMail className="inline me-2" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__nav w-2/3 lg:w-2/6 hidden lg:flex lg:flex-col">
        <h4 className="text-center font-semibold uppercase lg:text-xl">
          Sections:
        </h4>
        <nav className="flex justify-around items-center lg:justify-center">
          {sectionTitles.map((title) => {
            return (
              <a
                key={uuidv4()}
                className="p-4 capitalize font-semibold hover:border-b hover:border-black"
                href={`#${title}`}
              >
                {title}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
