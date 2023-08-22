'use client'
import React, { useEffect, useState } from 'react';

const SideNav: React.FC = () => {


    const [currentPage, setCurrentPage] = useState('Home')

    useEffect(() => {
        const handleScroll = () => {
            let y = window.scrollY
            if (y < 100 && y < 600) {
                setCurrentPage('Home')
            }
            if (y > 600 && y < 1500) {
                // work page
                setCurrentPage('Work')
            }
            if (y > 1500 && y < 2000) {
                // work page
                setCurrentPage('Project')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav className="bg-transparent text-white h-screen w-64 fixed top-0 right-0 flex flex-col justify-center overflow-y-auto">
            <div className="p-4">
                <ul className="space-y-2">
                    <li>
                        <a href="#about" onClick={() => setCurrentPage('Home')} className={`block py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 ${(currentPage === 'Home') ? 'bg-gradient-to-r from-sky-600 to-transparent glow' : ''}`}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#work" onClick={() => setCurrentPage('Work')} className={`block py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 ${(currentPage === 'Work') ? 'bg-gradient-to-r from-sky-600 to-transparent glow' : ''}`}>
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => setCurrentPage('Projects')} className={`block py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 ${(currentPage === 'Project') ? 'bg-gradient-to-r from-sky-600 to-transparent glow' : ''}`}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#blog" onClick={() => setCurrentPage('Blog')} className={`block py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 ${(currentPage === 'Blog') ? 'bg-gradient-to-r from-sky-600 to-transparent glow' : ''}`}>
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SideNav;
