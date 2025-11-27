import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Blog = () => {
    const { theme } = useTheme();

    const posts = [
        {
            title: 'Understanding React Server Components',
            excerpt: 'A deep dive into how RSCs work and why they are the future of React development.',
            date: 'Oct 24, 2025',
            readTime: '5 min read',
            category: 'React'
        },
        {
            title: 'Mastering Tailwind CSS Grid',
            excerpt: 'Learn how to build complex layouts with ease using Tailwind CSS Grid utilities.',
            date: 'Nov 10, 2025',
            readTime: '8 min read',
            category: 'CSS'
        },
        {
            title: 'The State of JavaScript in 2025',
            excerpt: 'An overview of the latest features and trends in the JavaScript ecosystem.',
            date: 'Nov 15, 2025',
            readTime: '6 min read',
            category: 'JavaScript'
        }
    ];

    return (
        <div className="py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Blog & Resources
                </h1>
                <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Thoughts, tutorials, and insights on software development and design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`rounded-xl overflow-hidden border transition-all hover:shadow-lg ${theme === 'dark'
                                ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                                : 'bg-white border-gray-200 hover:border-blue-500'
                            }`}
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                                    {post.category}
                                </span>
                                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {post.readTime}
                                </span>
                            </div>
                            <h2 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {post.title}
                            </h2>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                                <span className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                    {post.date}
                                </span>
                                <button className="text-blue-600 font-medium hover:underline">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default Blog;
