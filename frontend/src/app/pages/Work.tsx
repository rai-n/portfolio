'use client'
import React, { useState } from 'react';
// import Image from 'next/image';
import './glow.css'

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
    const workExperiences = [
        {
            companyLogo: '/icons/cognizant.jfif',
            jobTitle: 'Full Stack Developer',
            location: 'Cognizant - London, United Kingdom',
            startDate: 'October 2022',
            endDate: 'Present',
            details: [
                'Led design and implementation of policy system with React, Redux, Java Spring Boot.',
                'Created RESTful APIs for seamless frontend-backend data communication.',
                'Containerized microservices with Docker, deployed on AWS.',
            ],
            technologies: [
                { icon: '/icons/spring boot.png', width: 80, alt: 'Spring Boot' },
                { icon: '/icons/react.png', width: 80, alt: 'React' },
                { icon: '/icons/tailwind.png', width: 80, alt: 'React' },
                { icon: '/icons/aws.png', width: 80, alt: 'AWS' },
                { icon: '/icons/redis.png', width: 100, alt: 'Redis' },
                { icon: '/icons/kafka.png', width: 50, alt: 'Kafka' },
                { icon: '/icons/Kubernetes.png', width: 50, alt: 'Kubernetes' },
                { icon: '/icons/github.png', width: 80, alt: 'GitHub' },
            ],
        },
        {
            companyLogo: '/icons/innova.jfif',
            jobTitle: 'Software Engineer',
            location: 'Innova Museums - Canada (Remote)',
            startDate: 'April 2022',
            endDate: 'August 2022',
            details: [
                'Created revenue-focused infrastructure, including ticket marketplace and iOS/Android scanner app.',
                'Utilized React, Redux, Node.js, and MongoDB for user-friendly web apps.',
                'Enhanced user checkout with secure Stripe payment integration.',
                'Contributed insights, optimized performance, and supported startup team decisions.',
            ],
            technologies: [
                { icon: '/icons/react.png', width: 80, alt: 'React' },
                { icon: '/icons/nodejs.png', width: 80, alt: 'Node.js' },
                { icon: '/icons/github.png', width: 80, alt: 'GitHub' },
                { icon: '/icons/mongodb.png', width: 80, alt: 'Mongodb' },
                { icon: '/icons/stripe.png', width: 80, alt: 'Stripe' },
                { icon: '/icons/maps.png', width: 100, alt: 'Google Maps' },
                { icon: '/icons/render.png', width: 50, alt: 'Render' },
                { icon: '/icons/pwa.png', width: 50, alt: 'Progressive web app' },
            ],
        },
        {
            companyLogo: '/icons/abilitynet.jpg',
            jobTitle: 'Accessibility & Usability Consultant',
            location: 'AbilityNet - London, United Kingdom',
            startDate: 'July 2019',
            endDate: 'July 2022',
            details: [
                'Improved web usability through accessibility consultancy for clients like HSBC, Barclays, Gov UK, and charities.',
                'Conducted workshops, educating on inclusive design and accessibility.',
                'Performed thorough manual and automated testing using JAWS, Dragon, HTML, CSS.',
                'Shaped user testing projects, delivering tailored enhancement recommendations.',
            ],
            technologies: [
                { icon: '/icons/html.png', width: 80, alt: 'HTML' },
                { icon: '/icons/css.png', width: 80, alt: 'CSS' },
                { icon: '/icons/javascript.png', width: 80, alt: 'JavaScript' },
                { icon: '/icons/wcag.png', width: 80, alt: 'WCAG' },
                { icon: '/icons/jaws.png', width: 80, alt: 'JAWS' },
            ],
        },
    ];

    return (
        <div className='flex'>
            <div id="work" className="bg-cyan-900 min-h-screen p-8 pt-20 w-5/6">
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Hire Me</h2>
                    <p className="text-white-700 max-w-[40vw]">
                        Experienced Full Stack Developer skilled in crafting user-centric web applications. With three years in accessibility and usability consulting across sectors, I&apos;m passionate about innovation, tackling challenges, and delivering exceptional user experiences. My journey into development arises from a desire to understand diverse tech stacks for expert consulting.
                    </p>
                </div>
                <h1 className="text-4xl font-bold mb-8 pt-20">Work Experience

                    <span className="text-white text-base mt-2"> (Click to open)</span></h1>

                {workExperiences.map((experience, index) => (
                    <WorkExperience key={index} {...experience} />
                ))}
            </div>
            <div className="bg-gray-900 w-1/6 h-screen"></div> {/* Sidebar space */}

        </div>
    );
};

export default WorkPage;
