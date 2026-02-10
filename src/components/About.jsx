import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, Globe, Zap } from 'lucide-react';
import { personalDetails } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            <span className="text-gradient">About Me</span>
                        </h2>

                        <div className="glass p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                                {personalDetails.about}
                            </p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                                My projects include retail sales forecasting, fashion trend prediction, and supermarket navigation analytics, demonstrating my ability to analyze complex datasets, generate insights, and support data-driven decision-making. Recently, I was ranked 14th at the SLIIT Xtreme 4.0 Hackathon.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium shadow-lg hover:shadow-blue-500/25">
                                    <FileText size={18} /> Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <StatsCard icon={<Cpu className="text-blue-500" />} title="Education" value="BSc (Hons) IT" sub="SLIIT (Data Science)" />
                        <StatsCard icon={<Globe className="text-cyan-500" />} title="Location" value="Sri Lanka" sub="Open to Remote" />
                        <StatsCard icon={<Zap className="text-yellow-500" />} title="Experience" value="Fresher" sub="Ready to Work" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const StatsCard = ({ icon, title, value, sub }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass p-6 rounded-xl flex items-center gap-4 border-l-4 border-blue-500 dark:border-cyan-400"
    >
        <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg">
            {icon}
        </div>
        <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
            <p className="text-xl font-bold text-slate-900 dark:text-white">{value}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{sub}</p>
        </div>
    </motion.div>
);

export default About;
