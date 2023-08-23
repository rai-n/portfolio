/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import './glow.css'
import { checkPhone } from '../helpers/isPhone';
import { workExperiences } from '../components/WorkExperiencedata';

interface WorkExperienceProps {
    companyLogo: string;
    jobTitle: string;
    location: string;
    startDate: string;
    endDate: string;
    details: string[];
    technologies: Technology[];
}

interface Technology {
    icon: string;
    width: number;
    alt: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ companyLogo, jobTitle, location, startDate, endDate, details, technologies }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-l-2 border-black-500 pl-4 mb-8 transition-colors duration-300 ease-in-out hover:bg-gradient-to-l hover:from-transparent hover:via-transparent hover:to-sky-600 ml-50">
            <div className="cursor-pointer flex items-center" onClick={toggleAccordion}>
                <img src={companyLogo} width={100} height={100} alt={`${jobTitle} logo`} />
                <div className="ml-2">
                    <h2 className="text-2xl font-semibold mb-1 glow">{jobTitle}</h2>
                    <p className="text-white-600">{`${location}`}</p>
                    <p className="text-white-600">{`${startDate} - ${endDate}`}</p>
                </div>
            </div>
            {isOpen && (
                <div>
                    <ul className="list-disc pl-6">
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                    <div className="bg-cyan-700 w-[50vw]">
                        <ol className="flex flex-row items-center mt-4 space-x-3">
                            {technologies.map((technology, index) => (
                                <li key={index}>
                                    <img src={technology.icon} width={technology.width} height={1} alt={technology.alt} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
};

const WorkPage: React.FC = () => {

    const [isPhone, setIsPhone] = useState(false)

    useEffect(() => {
        const applyResize = () => {
            setIsPhone(checkPhone)
        }

        window.addEventListener('resize', applyResize)
        applyResize()

        return () => {
            window.removeEventListener('scroll', applyResize);
        };
    }, [])
    return (
        <div className='flex'>
            <div id="work" className={`bg-cyan-900 min-h-screen p-8 pt-20 lg:w-5/6 xl:w-6/6`}>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Hire Me</h2>
                    <p className={`text-white-700 ${!isPhone ? 'max-w-[40vw]' : ''}`}>
                        Experienced Full Stack Developer skilled in crafting user-centric web applications. With three years in accessibility and usability consulting across sectors, I&apos;m passionate about innovation, tackling challenges, and delivering exceptional user experiences. My journey into development arises from a desire to understand diverse tech stacks for expert consulting.
                    </p>
                </div>
                <h1 className="text-4xl font-bold mb-8 pt-20">Work Experience

                    <span className="text-white text-base mt-2"> (Click to open)</span></h1>

                {workExperiences.map((experience, index) => (
                    <WorkExperience key={index} {...experience} />
                ))}
            </div>
            <div className="hidden lg:block bg-gray-900 w-1/6 h-screen"></div> {/* Sidebar space */}
        </div>
    );
};

export default WorkPage;
