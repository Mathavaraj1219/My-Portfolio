import { FaUserCog, FaCodeBranch } from "react-icons/fa";
import { MdOndemandVideo  } from "react-icons/md";
import MotionWrapper from "./motionWrapper";
import { FiExternalLink } from "react-icons/fi"; 


const Projects = () => {


return (
    <section className="py-20 bg-gray-100 dark:bg-gray-700 text-center px-4 sm:px-8 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
                <MotionWrapper
                    initial={{ opacity: 0, x:-500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">Expense Tracker Web App</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">Developed a full-stack Expense Tracker web application to manage daily income and expenses. Implemented CRUD operations for transactions,summary charts, and persistent data storage using MongoDB. Integrated RESTful APIs for seamless data management.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS, Recharts</li>
                        <li>Backend: Node.js, Express.js, CORS</li>
                        <li>Database: MongoDB</li>
                        <li>Authentication: JWT, bcrypt.js</li>
                        </ul>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">I learned how to design and develop a complete MERN stack application with secure authentication, interactive charts. I gained practical experience in backend API development and handling real-world errors</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1bx0fhlJmk01QVbtnuXuKWgbpzVMWctDb/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl glow-effect-button hover:bg-blue-700 transition-all text-sm sm:text-base"
                        >
                        <MdOndemandVideo className="text-xl"/>
                        Quick Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/Expense-Tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper 
                    initial={{ opacity: 0, x:500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">Leads Management with Zoho CRM Integration</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">A full-stack Leads Management System integrated with Zoho CRM, allowing users to analytics, CRUD operations, and export options. All lead data is fully synced with Zoho CRM, making this a complete and professional lead-tracking solution.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Capture leads through a React form.</li>
                            <li>View leads in card and table formats with inline action buttons (Edit/Delete).</li>
                            <li>Leads filter by tags and Sort by priority.</li>
                            <li>Real-time search with debounce by Name, Email and Company.</li>
                            <li>Lead analytics dashboard Shows number of leads under each tag and Categorizes leads into High / Medium / Low priority.</li>
                            <li>Update and Delete both local UI and Zoho CRM backend leads.</li>
                            <li>Creates a clean PDF report, downloadable CSV file and Professionally formatted Excel file of all or specific leads.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, Axios, TailwindCSS, Chart.js</li>
                        <li>Backend: Node.js, Express.js, Axios</li>
                        <li>Export: FileSaver.js, XLSX library, jsPDF</li>
                        <li>External Service: Zoho CRM API, Zoho OAuth</li>
                        </ul>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">I learned how to integrate third-party services like Zoho CRM using secure APIs and OAuth token handling. I improved my ability to build full CRUD workflows with real-time synchronization between frontend, backend, and CRM. I gained experience in creating advanced UI features such as filtering, sorting, search, analytics charts, and data export. This project strengthened my full-stack skills and taught me how to design scalable, user-friendly lead management systems.</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1HFKKYpEx1coZIgqyOFhusQGBQzaVGULi/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl glow-effect-button hover:bg-blue-700 transition-all text-sm sm:text-base"
                        >
                        <MdOndemandVideo className="text-xl"/>
                        Quick Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/leads_management_with_zoho_CRM_integration"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper 
                    initial={{ opacity: 0, x:-500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">Job Application Form</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">A job application form that collects user details such as name, email, experience, resume and data submission to a backend API. Built with React and Node.js.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB</li>
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS</li>
                        </ul>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">Building this project taught me controlled components, multidata selection and backend integration for handling file uploads and file downloads.</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1LH56vbCjRZf3e0l8sCmd5zERK6PHo_TF/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl glow-effect-button hover:bg-blue-700 transition-all text-sm sm:text-base"
                        >
                        <MdOndemandVideo className="text-xl"/>
                        Quick Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/JobApplication"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper 
                    initial={{ opacity: 0, x: 500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">Weather And Real Time App</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">A real-time weather and time tracking application that displays current temperature, humidity, wind speed for any country's cities and local time for any country. Built using React, Redux, react countries-and-timezones and Open-meteo API.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
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
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">This project strengthened my understanding of REST APIs, asynchronous data fetching, animation of framer motion and dynamic UI updates with React hooks.</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                        href="https://drive.google.com/file/d/10XGZvBioqWTrPrf9SqVbLvlq-JU5JKGR/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl glow-effect-button hover:bg-blue-700 transition-all text-sm sm:text-base"
                        >
                        <MdOndemandVideo className="text-xl"/>
                        Quick Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/WeatherAndTime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper 
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">Login with JWT (JSON Web Token)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">Built a secure user authentication system using JWT (JSON Web Token) and Node.js. Implemented user registration, login, and protected routes with token-based authentication.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>User registration and login with password hashing using bcrypt.</li>
                            <li>Token-based authentication with JWT (stored in localStorage).</li>
                            <li>Built RESTful API endpoints for login, register, and authorization.</li>
                            <li>Token expiration handling and error messages</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Frontend: React.js, Axios, TailwindCSS</li>
                        <li>Backend: Node.js, Express.js, CORS</li>
                        <li>Database: MongoDB</li>
                        <li>Authentication: JWT, bcrypt.js</li>
                        </ul>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">This project demonstrates how I implemented a secure authentication system using JWT (JSON Web Token) in a MERN stack application. Users can register, log in, and access protected routes only when a valid token is present.</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1JumjHai6G6wRIkvvU7DSEnpj6tnjVhXk/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl glow-effect-button hover:bg-blue-700 transition-all text-sm sm:text-base"
                        >
                        <MdOndemandVideo className="text-xl"/>
                        Quick Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/LoginwithJWT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper 
                    initial={{ opacity: 0, x: 500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">User Management System</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">A full-stack web application that allows creating, reading, updating and deleting user details using RESTful APIs. Built with React, Node, Express, and MongoDB.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaUserCog /> Features
                        </h3>
                        <ul className="list-disc text-start">
                            <li>Add, view, update, and delete user details.</li>
                            <li>Dynamic table display with React state updates.</li>
                            <li>RESTful API integration (GET, POST, PUT, DELETE).</li>
                            <li>Integrated Redux for state management.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
                        <FaCodeBranch /> Tech Stack
                        </h3>
                        <ul className="list-disc text-start">
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB</li>
                        <li>Frontend: React.js, Redux Toolkit, Axios, TailwindCSS</li>
                        </ul>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">Implementing CRUD operations helped me understand RESTful API design, frontend-backend communication, and state management.</p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                        href="https://drive.google.com/file/d/1KzcfqidfHr6wMFxdru_EHKpy06IZhlt6/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl glow-effect-button hover:bg-blue-700 transition-all text-sm sm:text-base"
                        >
                        <MdOndemandVideo className="text-xl"/>
                        Quick Demo
                        </a>
                        <a
                        href="https://github.com/Mathavaraj1219/User-management"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.5 }}>
                    <div className="bg-gray-300 dark:bg-gray-600 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-black/70">Personal Portfolio Website</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">A responsive, interactive portfolio built with React, TailwindCSS, and Framer Motion. Includes sections for projects, contact, resume, and smooth scroll animations.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <h3 className="flex items-center px-20 gap-2 text-xl font-semibold">
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
                    <p className="text-gray-700 dark:text-gray-300 mb-6 px-10 text-sm sm:text-base md:text-lg">Building my own portfolio taught me reusable component structure, animations, emailjs integration and Deployment.</p>
                    <div className="flex justify-center mt-6">
                        <a
                        href="https://github.com/Mathavaraj1219/My-Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-400 text-white rounded-xl glow-effect-button hover:bg-gray-500 transition-all text-sm sm:text-base"
                        >
                        <FiExternalLink className="text-xl"/>
                        View Code
                        </a>
                    </div>
                    </div>
                </MotionWrapper>                
        </div>
    </section>
    );
};


export default Projects;