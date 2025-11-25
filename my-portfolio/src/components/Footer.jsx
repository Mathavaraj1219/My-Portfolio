import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-gray-800 py-8 mt-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl ">MATHAVARAJ J</h2>
          <p className="text-sm">Full Stack Developer</p>
        </div>

        <div className="flex justify-center space-x-6 mb-4 md:mb-0">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 cursor-pointer"
          >
            Qualification
          </Link>
        </div>

        <div className="flex justify-center space-x-2">
          <a
            href="https://github.com/Mathavaraj1219"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:text-blue-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mathavaraj-j-7ba1a91ab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:mathavarajya1219@gmail.com"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:text-blue-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 dark:border-gray-100 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Mathavaraj J. All rights reserved.
      </div>
    </footer>
  );
}
