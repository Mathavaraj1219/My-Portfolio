import { motion } from 'framer-motion';
import { FaUserCog, FaCodeBranch } from "react-icons/fa";


const Projects = () => {


return (
    <section className="py-32 bg-gray-100 dark:bg-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-20">Projects</h2>
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
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
                        href="https://drive.google.com/file/d/1KzcfqidfHr6wMFxdru_EHKpy06IZhlt6/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Demo Video
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/User-management"
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
                        href="https://drive.google.com/file/d/1LH56vbCjRZf3e0l8sCmd5zERK6PHo_TF/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Demo Video
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/JobApplication"
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
                        href="https://drive.google.com/file/d/10XGZvBioqWTrPrf9SqVbLvlq-JU5JKGR/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Demo Video
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/WeatherAndTime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-xl transition-all"
                        >
                        View Code
                        </a>
                    </div>
                </motion.div>

                <motion.div className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: 500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Login with JWT (JSON Web Token)</h3>
                    <p className="text-gray-600 mx-32 mb-10 dark:text-gray-300">Built a secure user authentication system using JWT (JSON Web Token) and Node.js. Implemented user registration, login, and protected routes with token-based authentication.</p>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>User registration and login with password hashing using bcrypt.</li>
                            <li>Token-based authentication with JWT (stored in localStorage).</li>
                            <li>Built RESTful API endpoints for login, register, and authorization.</li>
                            <li>Token expiration handling and error messages</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, Axios, TailwindCSS</li>
                        <li>Backend: Node.js, Express.js, CORS</li>
                        <li>Database: MongoDB</li>
                        <li>Authentication: JWT, bcrypt.js</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">This project demonstrates how I implemented a secure authentication system using JWT (JSON Web Token) in a MERN stack application. Users can register, log in, and access protected routes only when a valid token is present.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1JumjHai6G6wRIkvvU7DSEnpj6tnjVhXk/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Demo Video
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/LoginwithJWT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-xl transition-all"
                        >
                        View Code
                        </a>
                    </div>
                </motion.div>

                <motion.div className="bg-gray-300 dark:bg-gray-600 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, x:-500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Expense Tracker Web App</h3>
                    <p className="text-gray-600 mx-32 mb-10 dark:text-gray-300">Developed a full-stack Expense Tracker web application to manage daily income and expenses. Implemented CRUD operations for transactions,summary charts, and persistent data storage using MongoDB. Integrated RESTful APIs for seamless data management.</p>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Implemented CRUD operations with RESTful APIs.</li>
                            <li>Visualize income vs expenses with pie charts using Recharts.</li>
                            <li>Secure Login and Logout using JWT (JSON Web Token). Password encryption using bcrypt. Token-based authorization for protected routes.</li>
                            <li>Show the income and expense data with table view.</li>
                            <li>Integrated Redux for state management.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 mx-32 mb-8">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS, Recharts</li>
                        <li>Backend: Node.js, Express.js, CORS</li>
                        <li>Database: MongoDB</li>
                        <li>Authentication: JWT, bcrypt.js</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">I learned how to design and develop a complete MERN stack application with secure authentication, interactive charts. I gained practical experience in backend API development and handling real-world errors</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1bx0fhlJmk01QVbtnuXuKWgbpzVMWctDb/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Demo Video
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/Expense-Tracker"
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
                        <li>Frontend: React.js, TailwindCSS</li>
                        <li>Animations: Framer Motion</li>
                        <li>Routing: React Router DOM + react-scroll</li>
                        <li>Contact: EmailJS integration</li>
                        <li>Deployment: Netlify</li>
                        </ul>
                    </div>
                    <p className="mx-32 mb-3">Building my own portfolio taught me reusable component structure, animations, emailjs integration and Deployment.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <a
                        href="https://mathavaraj-portfolio.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-xl transition-all"
                        >
                        Live Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/My-Portfolio"
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