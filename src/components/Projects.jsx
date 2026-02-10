import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                        A showcase of my latest work in data science and web development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-6 rounded-2xl border-t-4 border-t-blue-500 dark:border-t-cyan-400 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 relative z-10 min-h-[80px]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-mono px-2 py-1 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 rounded">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
