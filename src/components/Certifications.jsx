import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { certifications } from '../data';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Awards & <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 10 }}
                            className="glass p-6 rounded-xl flex items-center gap-6 group"
                        >
                            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 rounded-full group-hover:scale-110 transition-transform">
                                <Award size={24} />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400">
                                    {cert.issuer}
                                </p>
                            </div>

                            <div className="hidden md:block">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 rounded-full">
                                    {cert.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
