import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav className="fixed flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md w-full top-0 z-50">
        <h1 className="text-2xl md:text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
            <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600">About</Link>
            <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-600">Skills</Link>
            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">Projects</Link>
            <Link to="education" smooth duration={500} className="cursor-pointer hover:text-blue-600">Education</Link>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600">Contact</Link>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 ml-2 dark:bg-gray-700">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
        <button className="md:hidden ml-3" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      {menuOpen && (<div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
            <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600">About</Link>
            <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-600">Skills</Link>
            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">Projects</Link>
            <Link to="education" smooth duration={500} className="cursor-pointer hover:text-blue-600">Education</Link>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600">Contact</Link>
        </div>)}

    </nav>
);
};


export default Navbar;