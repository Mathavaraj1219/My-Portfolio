import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];
return (
    <section className="py-40 text-center bg-gray-300 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-20">Skills</h2>
        <div className="grid grid-cols-4 gap-16 max-w-5xl mx-auto p-10">
                <motion.div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, x:500, y: -200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Frontend</h3>
                    <ul>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">React</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Tailwindcss</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">HTML, CSS</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">JavaScript</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Redux</li>
                    </ul>
                </motion.div>
                <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x:-500, y: 200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Backend</h3>
                    <ul>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Node.js</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Express.js</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Java</li>
                    </ul>
                </motion.div>
                <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x:500, y: -200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Database</h3>
                    <ul>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">MongoDB</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">MySQL</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">PostgreSQL</li>
                    </ul>
                </motion.div>
                <motion.div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x:-500, y: 200 }}
                whileInView={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 1 }}>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Tools</h3>
                    <ul>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Git</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">VS code</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Postman</li>
                        <li className="text-gray-600 mb-1 dark:text-gray-300">Vite</li>
                    </ul>
                </motion.div>
        </div>
    </section>
    );
};


export default Skills;