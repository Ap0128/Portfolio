import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-[80vh] flex items-center justify-center pt-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
                >
                    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Engineer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                        Building scalable, high-performance web applications with modern technologies. Passionate about clean code and user-centric design.
                    </p>

                    <div className="flex items-center justify-center md:justify-start space-x-4 mb-8">
                        <a href="/projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                            View Projects
                        </a>
                        <a href="/contact" className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start space-x-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 text-2xl transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 text-2xl transition-colors">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                            {/* Placeholder for user image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-400">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute top-10 -left-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center space-x-2 border border-gray-100 dark:border-gray-700"
                        >
                            <span className="text-2xl">🚀</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Fast</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                            className="absolute bottom-10 -right-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg flex items-center space-x-2 border border-gray-100 dark:border-gray-700"
                        >
                            <span className="text-2xl">💻</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Clean Code</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
