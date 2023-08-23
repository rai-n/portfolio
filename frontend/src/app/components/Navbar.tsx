/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
import { incrementDownloadTotal, getDownloadTotal } from '../actions/DownloadIncrement'
import { checkPhone } from '../helpers/isPhone';

const Navbar: React.FC = () => {

    const [scrolled, setScrolled] = useState(false);
    const [downloadCount, setDownloadCount] = useState(0);
    const [isPhone, setIsPhone] = useState(false)


    useEffect(() => {

        document.title = "Neeraj Rai | Portfolio"

        const handleScroll = () => {

            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const applyResize = () => {
            setIsPhone(checkPhone)
        }

        applyResize()


        window.addEventListener('resize', applyResize)
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', applyResize);
        };



    }, []);

    useEffect(() => {

        if (localStorage.getItem('resume_count_fetched') === null) {
            console.debug('resume count fetched')

            const getDownloadCount = async () => {
                try {
                    let x = await getDownloadTotal();
                    console.log('download count', x);

                    if (x.statusCode == 200) {
                        const now = new Date();

                        // invalidates local cache in 24 hours
                        const item = {
                            value: x,
                            expiry: now.setHours(now.getHours() + 24)
                        }
                        localStorage.setItem('resume_count_fetched', JSON.stringify(item));
                        setDownloadCount(Number(x.body))
                    } else {
                        console.log('Error 404, unable to get value')
                    }


                } catch (err: any) {
                    console.log(err.message)
                    console.log('Error while fetching download count')
                }
            }

            getDownloadCount()
        }
    }, [])

    const handleClick = async () => {

        if (localStorage.getItem('downloaded_resume') === null) {
            console.log('click fired')
            try {

                const res = await incrementDownloadTotal();
                console.log('statuscode:', res.statusCode)

                if (res.statusCode == 200) {
                    localStorage.setItem('downloaded_resume', 'true')
                    console.log('downloaded clicked, incremented')
                }

            } catch (err: any) {
                console.log('error')
                console.log(err.message)
            }

        }
    }

    return (
        <motion.nav
            className={`bg-[#4B6173] text-white py-2 fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300 shadow-md z-50 ${scrolled ? 'small-navbar' : ''}`}
            initial={{ opacity: 0, y: -20 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation on mount
            exit={{ opacity: 0, y: -20 }} // Animation on unmount
        >
            <div className="flex items-center ml-3">
                <img
                    src="/images/Profile.png"
                    alt="Picture of Neeraj"
                    className={`rounded-full ${isPhone || (scrolled && !isPhone) ? 'w-26 h-24' : 'w-16 h-16'}`}
                    width={100}
                    height={10}
                />
                <div className={`ml-3 ${isPhone || (scrolled && !isPhone) ? 'block' : 'hidden'}`}>
                    <p className="text-xl font-bold ">Neeraj Rai</p>
                    <p className="text-sm">Full Stack Developer</p>
                    <div className="flex items-center space-x-3">
                        <a href="https://www.linkedin.com/in/neeraj-rai-94137a214/">
                            <img height={10} width={10} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                        </a>
                        <a href="https://github.com/rai-n">
                            <img height={10} width={10} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png" alt="GitHub" className="w-6 h-6 cursor-pointer" />
                        </a>
                        <a href="mailto:neeraj.rai@city.ac.uk">
                            <img height={10} width={10} src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png" alt="Email" className="w-6 h-6 cursor-pointer" />
                        </a>
                    </div>
                </div>

                {!scrolled && !isPhone && (
                    <>
                        <div className='pl-4'>
                            <p className="text-xl font-bold ">Neeraj Rai</p>
                            <p className="text-sm">Full Stack Developer</p>
                        </div>

                        <div className="flex items-center space-x-3 pl-4">
                            <a href="https://www.linkedin.com/in/neeraj-rai-94137a214/">
                                <img height={10} width={10} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                            </a>
                            <a href="https://github.com/rai-n">
                                <img height={10} width={10} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png" alt="GitHub" className="w-6 h-6 cursor-pointer" />
                            </a>
                            <a href="mailto:neeraj.rai@city.ac.uk">
                                <img height={10} width={10} src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png" alt="Email" className="w-6 h-6 cursor-pointer" />
                            </a>

                        </div>
                    </>

                )}
            </div>
            <div className="flex flex-col mr-10">
                <div>
                    <a href="/resume/Resume.pdf" download>
                        <button onClick={handleClick} className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600 focus:outline-none text-sm sm:px-4 sm:py-2 sm:text-base">
                            Download Resume
                            <svg className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 17H12H8" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#FFFFFF" stroke-width="1.5" />

                            </svg>
                        </button>
                    </a>

                </div>
                <div>
                    <p className="text-white text-sm mt-2 text-center ml-10"></p>
                </div>


            </div>


        </motion.nav>
    );
};

export default Navbar;
