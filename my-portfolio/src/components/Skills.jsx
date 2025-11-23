import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaCode
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiVite, SiPostman } from "react-icons/si";
import MotionWrapper from "./motionWrapper";


const Skills = () => {

return (
    <section className="py-20 bg-gray-300 dark:bg-gray-800 px-4">
        <h2 className="text-2xl text-center sm:text-3xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
                <MotionWrapper 
                initial={{ opacity: 0, x:500, y: -200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white text-center dark:bg-gray-700 p-5 rounded-xl glow-effect shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4">Frontend</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaReact className="text-xl text-blue-600"/>React</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiTailwindcss className="text-xl text-blue-500"/>Tailwindcss</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaHtml5 className="text-xl text-orange-600"/>HTML</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaCss3Alt className="text-xl text-indigo-600"/>CSS</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaJsSquare className="text-xl text-yellow-400"/>JavaScript</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiRedux className="text-xl text-purple-600"/>Redux</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
                <MotionWrapper 
                initial={{ opacity: 0, x:-500, y: 200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl glow-effect shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4">Backend</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaNodeJs className="text-xl text-green-600"/>Node.js</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiExpress className="text-xl text-yellow-400"/>Express.js</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaJava className="text-2xl text-blue-700"/>Java</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
                <MotionWrapper 
                initial={{ opacity: 0, x:500, y: -200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white dark:bg-gray-700 p-5 rounded-xl glow-effect shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4">Database</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiMongodb className="text-xl text-green-700"/>MongoDB</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiMysql className="text-2xl text-blue-600"/>MySQL</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiPostgresql className="text-xl text-blue-700"/>PostgreSQL</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
                <MotionWrapper 
                initial={{ opacity: 0, x:-500, y: 200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl glow-effect shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4">Tools</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaGitAlt className="text-xl text-orange-600"/>Git</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaCode className="text-xl text-indigo-700"/>VS code</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiPostman className="text-xl text-orange-600"/>Postman</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiVite className="text-xl text-sky-600"/>Vite</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
        </div>
    </section>
    );
};


export default Skills;