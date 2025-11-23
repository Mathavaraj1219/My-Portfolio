import { motion } from 'framer-motion';

const Education = () => {


return (
    <section className="py-20 bg-gray-300 dark:bg-gray-800 text-center px-4 sm:px-8 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-20">Qualification</h2>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <motion.div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl glow-effect-card shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <h4 className="text-xl sm:text-2xl font-semibold mb-2">Bachelor of Engineering (B.E) - Electrical and Electronics Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-2">Knowledge Institute of Technology, Salem</p>
                    <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">2019-2022</p>
            </motion.div> 
            <motion.div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl glow-effect-card shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <h4 className="text-xl sm:text-2xl font-semibold mb-2">Diploma - Electrical and Electronics Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-2">Muthayammal Polytechnic college, Rasipuram</p>
                    <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">2017-2019</p>
            </motion.div> 
            <motion.div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl glow-effect-card shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <h4 className="text-xl sm:text-2xl font-semibold mb-2">Higher Secondary (12th Grade)</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-2">Bharathi Vidhyalaya Hr Sec School, Salem</p>
                    <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">2016-2017</p>
            </motion.div>   
            <motion.div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl glow-effect-card shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <h4 className="text-xl sm:text-2xl font-semibold mb-2">SSLC (10th Grade)</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-2">Bharathi Vidhyalaya Hr Sec School, Salem</p>
                    <p className="text-gray-600 text-sm sm:text-base dark:text-gray-300">2014-2015</p>
            </motion.div>        
        </div>
    </section> 
)
}

export default Education;