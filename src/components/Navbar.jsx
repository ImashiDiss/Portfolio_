import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Home, User, Code, Briefcase, Mail, Award } from 'lucide-react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-6 justify-between md:justify-center">
                <div className="flex items-center gap-1 md:gap-4">
                    <NavLink href="#" icon={<Home size={18} />} label="Home" active={activeSection === 'home'} onClick={() => setActiveSection('home')} />
                    <NavLink href="#about" icon={<User size={18} />} label="About" active={activeSection === 'about'} onClick={() => setActiveSection('about')} />
                    <NavLink href="#skills" icon={<Code size={18} />} label="Skills" active={activeSection === 'skills'} onClick={() => setActiveSection('skills')} />
                    <NavLink href="#projects" icon={<Briefcase size={18} />} label="Projects" active={activeSection === 'projects'} onClick={() => setActiveSection('projects')} />
                    <NavLink href="#certifications" icon={<Award size={18} />} label="Awards" active={activeSection === 'certifications'} onClick={() => setActiveSection('certifications')} />
                    <NavLink href="#contact" icon={<Mail size={18} />} label="Contact" active={activeSection === 'contact'} onClick={() => setActiveSection('contact')} />
                </div>

                <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-2"></div>

                <ThemeToggle />
            </div>
        </nav>
    );
};

const NavLink = ({ href, icon, label, active, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className={`p-2 rounded-full transition-all duration-300 group relative flex flex-col items-center
      ${active ? 'text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-400/10' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400'}
    `}
    >
        {icon}
        <span className="absolute -top-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
        </span>
    </a>
);

export default Navbar;
