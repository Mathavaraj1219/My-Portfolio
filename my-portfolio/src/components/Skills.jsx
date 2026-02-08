import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaNetworkWired
} from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiSpringboot, SiRedis, SiApachekafka, SiDocker } from "react-icons/si";
import MotionWrapper from "./motionWrapper";
import RestApiIcon from "./RestApiIcon";


const Skills = () => {

return (
    <section className="py-20 bg-gray-300 dark:bg-gray-800 px-4">
        <h2 className="text-2xl text-center sm:text-3xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
                <MotionWrapper 
                initial={{ opacity: 0, x:500, y: -200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white text-center dark:bg-gray-700 p-5 rounded-xl glow-effect-card shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4 dark:text-black">Frontend</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaReact className="text-xl text-blue-600"/>React</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiTailwindcss className="text-xl text-blue-500"/>Tailwind CSS</li>
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
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl glow-effect-card shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4 dark:text-black">Backend</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaNodeJs className="text-xl text-green-600"/>Node.js</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiExpress className="text-xl text-yellow-400"/>Express.js</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-2 dark:text-gray-300"><FaJava className="text-2xl text-blue-700"/>Java</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-2 dark:text-gray-300"><SiSpringboot className="text-xl text-green-600"/>Spring Boot</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-2 dark:text-gray-300"><SiApachekafka className="text-2xl text-black"/>Kafka</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
                <MotionWrapper 
                initial={{ opacity: 0, x:500, y: -200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white dark:bg-gray-700 p-5 rounded-xl glow-effect-card shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4 dark:text-black">Database</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-2 dark:text-gray-300"><SiMongodb className="text-2xl text-green-700"/>MongoDB</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiMysql className="text-2xl text-blue-600"/>MySQL</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiPostgresql className="text-xl text-blue-700"/>PostgreSQL</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiRedis className="text-xl text-red-600"/>Redis</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
                <MotionWrapper 
                initial={{ opacity: 0, x:-500, y: 200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl glow-effect-card shadow-md h-full">
                    <h3 className="text-xl text-center font-semibold text-blue-600 mb-4 dark:text-black">Others</h3>
                    <ul>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-2 dark:text-gray-300"><FaGitAlt className="text-2xl text-orange-600"/>Git</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><FaNetworkWired className="text-xl text-sky-600"/>Computer Networks</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><TbBinaryTree className="text-3xl text-indigo-700"/>Data Structures and Algorithms</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiPostman className="text-xl text-orange-600"/>Postman</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><RestApiIcon/>Rest API</li>
                        </div>
                        <div className="grid grid-cols-1 ps-5">
                            <li className="text-gray-600 mb-1 flex items-center gap-3 dark:text-gray-300"><SiDocker  className="text-2xl text-blue-600"/>Docker</li>
                        </div>
                    </ul>
                    </div>
                </MotionWrapper>
        </div>
    </section>
    );
};


export default Skills;