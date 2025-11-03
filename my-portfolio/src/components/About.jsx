import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';


const About = () => {
return (
    <section className="flex flex-col items-center justify-center text-center mt-20 py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-100 dark:bg-gray-700">
    <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
    >
        Hi, I'm <span className="text-blue-600">MATHAVARAJ J</span>
    </motion.h1>


    <motion.p
        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0, x:500 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ duration: 1.5 }}
    >
        Full Stack Developer | React & Node.js Enthusiast
    </motion.p>

    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">Passionate and self-motivated Full Stack Developer with a strong foundation in React, Node.js and MongoDB. 
    Skilled in designing and building efficient, scalable, and user-centric web applications using the MERN stack. 
    Dedicated to continuous learning, improving code quality, and adopting modern development practices to solve real-world problems effectively.</p>


    <div className="flex flex-col sm:flex-row gap-4">
        <motion.a href="/mathavaraj.j-resume.pdf" download className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        >
            <FaDownload /> Download Resume
        </motion.a>

        <motion.a href="/mathavaraj.j-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        >
            <FaDownload /> View Resume
        </motion.a>
    </div>
</section>
);
};


export default About;