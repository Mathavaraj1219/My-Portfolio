import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';


const About = () => {
return (
    <section className="flex flex-col items-center justify-center text-center mt-10 py-40 bg-gray-100 dark:bg-gray-700">
    <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
    >
        Hi, I'm <span className="text-blue-600">MATHAVARAJ J</span>
    </motion.h1>


    <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        initial={{ opacity: 0, x:500 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ duration: 1.5 }}
    >
        Full Stack Developer | React & Node.js Enthusiast
    </motion.p>

    <p className="text-lg text-gray-600 text-center dark:text-gray-300 mb-10 px-60">Passionate and self-motivated Full Stack Developer with a strong foundation in React, Node.js and MongoDB. 
    Skilled in designing and building efficient, scalable, and user-centric web applications using the MERN stack. 
    Dedicated to continuous learning, improving code quality, and adopting modern development practices to solve real-world problems effectively.</p>


    <div className="flex gap-4">
        <motion.a href="/Mathavaraj-j-resume.pdf" download className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        >
            <FaDownload /> Download Resume
        </motion.a>

        <motion.a href="/Mathavaraj-j-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        >
            <FaDownload /> View Resume
        </motion.a>
    </div>
</section>
);
};


export default About;