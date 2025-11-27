import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCheckCircle } from 'react-icons/fa';

const RecruiterView = () => {
    const skills = {
        Frontend: ['React', 'Vue.js', 'Tailwind CSS', 'Next.js', 'TypeScript'],
        Backend: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Firebase'],
        Tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest']
    };

    return (
        <section id="recruiter-view" className="py-12">
            <div className="">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Recruiter View</h2>
                            <p className="text-gray-600 dark:text-gray-400">A quick summary of why I'm the right fit for your team.</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 md:mt-0 flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                            <FaDownload className="mr-2" /> Download Resume
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Why Hire Me */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Hire Me?</h3>
                            <ul className="space-y-4">
                                {[
                                    'Proven track record of delivering high-quality code on time.',
                                    'Strong problem-solving skills and ability to learn new techs fast.',
                                    'Excellent communication and teamwork abilities.',
                                    'Passion for user experience and performance optimization.'
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
                            <div className="space-y-6">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category}>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((skill) => (
                                                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-600">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecruiterView;
