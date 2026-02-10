import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalDetails } from '../data';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="text-center max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 p-1 rounded-full relative z-10">
                        <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full bg-slate-200 dark:bg-slate-800" />
                    </div>
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 rounded-full -z-10 animate-pulse"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-blue-600 dark:text-cyan-400 font-mono mb-4 text-lg md:text-xl">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white dark:text-slate-100">
                        <span className="text-gradient">{personalDetails.name}</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {personalDetails.title}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center gap-6"
                >
                    <SocialLink href={personalDetails.github} icon={<Github size={24} />} />
                    <SocialLink href={personalDetails.linkedin} icon={<Linkedin size={24} />} />
                    <SocialLink href={`mailto:${personalDetails.email}`} icon={<Mail size={24} />} />
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-24 md:bottom-10 text-slate-400 dark:text-slate-600"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300 shadow-lg"
    >
        {icon}
    </a>
);

export default Hero;
