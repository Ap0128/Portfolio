import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const achievements = [
        { number: '3+', label: 'Years Experience' },
        { number: '20+', label: 'Projects Completed' },
        { number: '5', label: 'Hackathon Wins' },
        { number: '100%', label: 'Client Satisfaction' },
    ];

    return (
        <section id="achievements" className="py-16 bg-blue-600 dark:bg-blue-700 text-white rounded-3xl my-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold mb-2">{item.number}</h3>
                            <p className="text-blue-100 font-medium text-lg">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
