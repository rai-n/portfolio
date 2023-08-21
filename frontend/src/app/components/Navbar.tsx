'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar: React.FC = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={`bg-[#4B6173] text-white py-2 fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300 shadow-md z-50 ${scrolled ? 'small-navbar' : ''}`}
            initial={{ opacity: 0, y: -20 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation on mount
            exit={{ opacity: 0, y: -20 }} // Animation on unmount
        >
            <div className="flex items-center ml-3">
                <Image
                    src="/images/Profile.png"
                    alt="Picture of Neeraj"
                    className={`rounded-full ${scrolled ? 'w-16 h-16' : 'w-26 h-24'}`}
                    width={100}
                    height={10}
                />
                <div className={`ml-3 ${scrolled ? 'hidden' : 'block'}`}>
                    <p className="text-xl font-bold ">Neeraj Rai</p>
                    <p className="text-sm">Full Stack Developer</p>
                    <div className="flex items-center space-x-3">
                        <a href="https://www.linkedin.com/in/neeraj-rai-94137a214/">
                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                        </a>
                        <a href="https://github.com/rai-n">
                            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png" alt="GitHub" className="w-6 h-6 cursor-pointer" />
                        </a>
                        <a href="mailto:neeraj.rai@city.ac.uk">
                            <img src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png" alt="Email" className="w-6 h-6 cursor-pointer" />
                        </a>
                    </div>
                </div>
                {scrolled && (
                    <>
                        <div className='pl-4'>
                            <p className="text-xl font-bold ">Neeraj Rai</p>
                            <p className="text-sm">Full Stack Developer</p>
                        </div>

                        <div className="flex items-center space-x-3 pl-4">
                            <a href="https://www.linkedin.com/in/neeraj-rai-94137a214/">
                                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                            </a>
                            <a href="https://github.com/rai-n">
                                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png" alt="GitHub" className="w-6 h-6 cursor-pointer" />
                            </a>
                            <a href="mailto:neeraj.rai@city.ac.uk">
                                <img src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png" alt="Email" className="w-6 h-6 cursor-pointer" />
                            </a>
                        </div>
                    </>

                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
