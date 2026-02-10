import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Tools and technologies I use to bring data to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                {skill.icon}
                            </div>

                            <div className="mb-6 inline-block p-4 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-600 dark:text-cyan-400">
                                {skill.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">{skill.category}</h3>

                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-600 dark:text-slate-300 shadow-sm">
                                        {item}
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

export default Skills;
