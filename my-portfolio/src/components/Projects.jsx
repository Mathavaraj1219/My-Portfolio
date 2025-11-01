import { motion } from 'framer-motion';
import { FaUserCog, FaCodeBranch } from "react-icons/fa";


const Projects = () => {


return (
    <section className="py-32 bg-gray-100 dark:bg-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-20">Projects</h2>
        <div className="grid grid-rows-4 gap-6 max-w-5xl mx-auto px-4">
                <motion.div className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">User Management System</h3>
                    <p className="text-gray-600 mx-32 mb-10 dark:text-gray-300">A full-stack web application that allows creating, reading, updating and deleting user details using RESTful APIs. Built with React, Node, Express, and MongoDB.</p>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Add, view, update, and delete user details.</li>
                            <li>Dynamic table display with React state updates.</li>
                            <li>RESTful API integration (GET, POST, PUT, DELETE).</li>
                            <li>Integrated Redux for state management.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB</li>
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">Implementing CRUD operations helped me understand RESTful API design, frontend-backend communication, and state management.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://your-live-demo-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Live Demo
                        </a>
                        <a
                        href="https://github.com/yourusername/user-management"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-xl transition-all"
                        >
                        View Code
                        </a>
                    </div>
                </motion.div>

                <motion.div className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, x:500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Job Application Form</h3>
                    <p className="text-gray-600 mx-32 mb-10 dark:text-gray-300">A job application form that collects user details such as name, email, experience, resume and data submission to a backend API. Built with React and Node.js.</p>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Collect applicant details with clean UI.</li>
                            <li>Submit data to backend API (POST request).</li>
                            <li>Optional file upload (resume as PDF).</li>
                            <li>Show the applicant data with table view and see the applicant resume.</li>
                            <li>Integrated Redux for state management.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB</li>
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">Building this project taught me controlled components, multidata selection and backend integration for handling file uploads and file downloads.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://your-live-demo-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Live Demo
                        </a>
                        <a
                        href="https://github.com/yourusername/user-management"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-xl transition-all"
                        >
                        View Code
                        </a>
                    </div>

                </motion.div>

                <motion.div className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Weather And Real Time App</h3>
                    <p className="text-gray-600 mx-32 mb-10 dark:text-gray-300">A real-time weather and time tracking application that displays current temperature, humidity, wind speed for any country's cities and local time for any country. Built using React, Redux, react countries-and-timezones and Open-meteo API.</p>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Get real-time weather for any country's city.</li>
                            <li>Show current location weather using browser geolocation.</li>
                            <li>Displays current local time and date for any country.</li>
                            <li>Shows day/night mode based on time zone.</li>
                            <li>Updates data automatically every few seconds.</li>
                            <li>Integrated Redux for state management.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS</li>
                        <li>API: Open-Meteo API</li>
                        <li>Data Visualization: react-clock, react-calendar</li>
                        <li>Animations: Framer Motion</li>
                        <li>Real-time updates using useEffect + setInterval</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">This project strengthened my understanding of REST APIs, asynchronous data fetching, animation of framer motion and dynamic UI updates with React hooks.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://your-live-demo-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Live Demo
                        </a>
                        <a
                        href="https://github.com/yourusername/user-management"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-xl transition-all"
                        >
                        View Code
                        </a>
                    </div>
                </motion.div>

                <motion.div className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, x:500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Personal Portfolio Website</h3>
                    <p className="text-gray-600 mx-32 mb-10 dark:text-gray-300">A responsive, interactive portfolio built with React, TailwindCSS, and Framer Motion. Includes sections for projects, contact, resume, and smooth scroll animations.</p>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Clean and responsive UI with dark/light mode.</li>
                            <li>Smooth scroll and section-based navigation.</li>
                            <li>Each section animated by framer motion.</li>
                            <li>Contact form using EmailJS.</li>
                            <li>Resume PDF download & open-in-new-tab option.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, TailwindCSS, Framer Motion</li>
                        <li>Routing: React Router DOM + react-scroll</li>
                        <li>Contact: EmailJS integration</li>
                        <li>Deployment: Vercel / Netlify</li>
                        <li>Domain: Custom (e.g., <span className="text-blue-400">mathavaraj.dev</span>)</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">Building my own portfolio taught me reusable component structure, animations, and hosting setup for production-ready React apps.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://your-live-demo-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Live Demo
                        </a>
                        <a
                        href="https://github.com/yourusername/user-management"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-xl transition-all"
                        >
                        View Code
                        </a>
                    </div>
                </motion.div>
        </div>
    </section>
    );
};


export default Projects;