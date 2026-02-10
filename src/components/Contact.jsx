import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { personalDetails } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-10 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                    <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 leading-relaxed">
                        I'm currently looking for internships in Data Science and Business Analytics.
                        Have a project in mind or just want to say hi? My inbox is always open!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a
                            href={`https://wa.me/${personalDetails.phone}?text=Hi%20Imashi,%0A%0AI%20would%20like%20to%20connect%20with%20you.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30"
                        >
                            <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                            <span>Chat on WhatsApp</span>
                        </a>

                        <a
                            href={`mailto:${personalDetails.email}`}
                            className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg"
                        >
                            <Mail size={20} className="group-hover:-translate-y-1 transition-transform" />
                            <span>Send Email</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
