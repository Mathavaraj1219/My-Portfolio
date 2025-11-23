import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaUserCircle, FaGraduationCap, FaPhoneAlt } from 'react-icons/fa';
import { GiSkills } from "react-icons/gi";
import { BsKanban } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);


  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

return (
    <nav className="fixed flex justify-between items-center px-6 sm:px-6 py-4 bg-white/80 dark:bg-gray-800 backdrop-blur shadow-md w-full top-0 z-50">
        <div className="flex items-center justify-between gap-3">
        <div className="relative w-10 h-10 rounded-full multi-border pulse-hover glow-effect">
          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full rounded-full object-cover"
            onClick={() => setPopupOpen(!popupOpen)}
          />
        </div>

        <AnimatePresence>
          {popupOpen && (
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-2 top-20 z-[999] h-auto w-96 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 border border-gray-200 dark:border-gray-700"
            >

              <div className="relative w-40 h-40 mx-auto rounded-full antimulti-border glow-effect-img">
                <img
                  src="/profile.png"
                  alt="profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <h3 className="bg-gradient-to-r from-indigo-600 via-green-600 via-blue-600 via-green-600 to-indio-600 bg-clip-text text-transparent text-center mt-3 text-xl font-bold">
                MATHAVARAJ J
              </h3>

              <p className="bg-gradient-to-r from-red-400 via-green-600 via-blue-600 via-yellow-600 to-purple-600 bg-clip-text text-transparent text-center text-sm font-semibold mt-1">
                Full Stack Developer | React & Node.js Enthusiast
              </p>

              <p className="flex items-center justify-center gap-2 text-center text-sm mt-5">
                    <FaEnvelope className="text-md" />mathavarajya1219@gmail.com
              </p>

              <p className="flex items-center justify-center gap-2 text-center text-sm mt-3">
                    <FaPhoneAlt className="text-md" />+91 8248756892
              </p>
              <a
                href="https://www.linkedin.com/in/mathavaraj-j-7ba1a91ab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center hover:text-blue-500 text-sm mt-3 underline underline-offset-2"
            >
                <FaLinkedin className="text-md" />LinkedIn
            </a>
              <a
                href="https://github.com/Mathavaraj1219"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center hover:text-blue-500 text-sm mt-3 underline underline-offset-2"
            >
                <FaGithub className="text-md" />GitHub
            </a>
        
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className="text-2xl md:text-2xl font-bold text-blue-600">MyPortfolio</h1>
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
            <Link to="about" smooth duration={500} className="flex items-center justify-center gap-1 text-bold cursor-pointer hover:text-blue-600"><FaUserCircle className="text-xl"/>About</Link>
            <Link to="skills" smooth duration={500} className="flex items-center justify-center gap-1 text-bold cursor-pointer hover:text-blue-600"><GiSkills className="text-xl"/>Skills</Link>
            <Link to="projects" smooth duration={500} className="flex items-center justify-center gap-1 text-bold cursor-pointer hover:text-blue-600"><BsKanban className="text-xl"/>Projects</Link>
            <Link to="education" smooth duration={500} className="flex items-center justify-center gap-1 text-bold cursor-pointer hover:text-blue-600"><FaGraduationCap className="text-xl"/>Qualification</Link>
            <Link to="contact" smooth duration={500} className="flex items-center justify-center gap-1 text-bold cursor-pointer hover:text-blue-600"><MdContactMail className="text-xl"/>Contact</Link>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 ml-2 dark:bg-gray-700">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
        <button className="md:hidden ml-3" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      {menuOpen && (<div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 flex flex-col items-center gap-6 py-8 shadow-md md:hidden">
            <Link to="about" smooth duration={500} className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600"><FaUserCircle className="text-md"/>About</Link>
            <Link to="skills" smooth duration={500} className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600"><GiSkills className="text-md"/>Skills</Link>
            <Link to="projects" smooth duration={500} className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600"><BsKanban className="text-md"/>Projects</Link>
            <Link to="education" smooth duration={500} className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600"><FaGraduationCap className="text-md"/>Qualification</Link>
            <Link to="contact" smooth duration={500} className="flex items-center justify-center gap-3 cursor-pointer hover:text-blue-600"><MdContactMail className="text-md"/>Contact</Link>
        </div>)}

    </nav>
);
};


export default Navbar;