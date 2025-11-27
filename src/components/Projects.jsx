import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive dashboard for managing online stores, inventory, and analytics.',
            problem: 'Small business owners lacked a unified platform to track sales and inventory in real-time.',
            solution: 'Built a responsive dashboard using React and Firebase with real-time data synchronization.',
            impact: 'Reduced inventory management time by 40% for pilot users.',
            tech: ['React', 'Firebase', 'Tailwind CSS', 'Recharts'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            image: 'https://via.placeholder.com/600x400?text=E-Commerce+Dashboard'
        },
        {
            title: 'AI Task Manager',
            description: 'Smart task management app that prioritizes tasks based on deadlines and complexity.',
            problem: 'Users struggle to prioritize tasks effectively, leading to missed deadlines.',
            solution: 'Integrated OpenAI API to analyze task descriptions and suggest priority levels.',
            impact: 'Improved user task completion rate by 25%.',
            tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            image: 'https://via.placeholder.com/600x400?text=AI+Task+Manager'
        },
        {
            title: 'Health Tracker App',
            description: 'Mobile-first web app for tracking daily workouts and nutrition.',
            problem: 'Existing apps were too complex and cluttered for casual users.',
            solution: 'Designed a minimalist UI with focus on quick data entry and clear visualizations.',
            impact: 'Achieved 10k+ monthly active users within 3 months of launch.',
            tech: ['Vue.js', 'Vuex', 'Chart.js', 'Node.js'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            image: 'https://via.placeholder.com/600x400?text=Health+Tracker'
        }
    ];

    return (
        <section id="projects" className="py-12">
            <div className="">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my ability to solve real-world problems with code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

                                <div className="mb-4 space-y-2 flex-1">
                                    <div>
                                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Problem:</span>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs">{project.problem}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Solution:</span>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs">{project.solution}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-blue-600 text-sm">Impact:</span>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs">{project.impact}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-xs rounded-full font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                                    >
                                        <FaGithub className="mr-2" /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
