import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-12">
            <div className="">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl transform -rotate-3"></div>
                            <img
                                src="https://via.placeholder.com/500x600?text=About+Me"
                                alt="About Me"
                                className="relative rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I am a passionate Software Engineer with a strong foundation in computer science and modern web development. My journey began with a curiosity for how things work, which evolved into a career building robust and scalable applications.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a keen eye for UI/UX design. I believe in writing clean, maintainable code and constantly learning new technologies to stay ahead in this fast-paced industry.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            When I'm not coding, you can find me contributing to open-source projects, writing tech blogs, or exploring the latest trends in AI and machine learning.
                        </p>

                        <a href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center transition-colors">
                            Let's work together <span className="ml-2">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
