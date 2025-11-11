import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Education from './components/Education';
import Footer from './components/Footer';
import { Element } from 'react-scroll';


const App = () => {
const [darkMode, setDarkMode] = useState(false);


useEffect(() => {
    if (darkMode) 
        document.documentElement.classList.add('dark');
    else 
        document.documentElement.classList.remove('dark');
    }, [darkMode]);


return (
    <div className="bg-gray-100 overflow-x-hidden dark:bg-gray-700 scroll-smooth">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="education"><Education /></Element>
        <Element name="contact"><Contact /></Element>
        <Element name="footer"><Footer /></Element>
    </div>
);
};


export default App;