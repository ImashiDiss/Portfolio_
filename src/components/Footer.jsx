import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center relative z-10">
            <div className="glass inline-block px-6 py-2 rounded-full">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                    Designed & Built by Imashi Dissanayake © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
