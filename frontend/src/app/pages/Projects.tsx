
import React from 'react';
import ProjectInfo from '../components/ProjectInfo';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className="flex">
            <div id="projects" className="bg-cyan-950 min-h-screen p-8 w-1/3">
                <h1 className="text-4xl font-bold mb-8 pt-20">Projects</h1>

                {/* Project Card 1 */}
                <ProjectInfo
                    projectName="Canadian Museums"
                    projectDescription="Innova enables museums to sell museum tickets all over the world for on-site exhibitions and virtual tours with a seamless system for customer acquisition, directory for searching, on-site ticket scanning app, analytics, insights more."
                    tools={['React', 'Redux', 'Node.js', 'Stripe Custom Integration']}
                    codeLink={'www.google.com'}
                    prodLink={'www.google.com'}
                />

            </div>

            <div className="bg-gray-900 w-2/4 h-screen">
                <Image
                    width={1000}
                    height={1}
                    src={'/images/Projects/innovacombined.png'}
                    alt={'test'}
                    className='w-full'
                    loading="lazy"
                />
            </div> 


            <div className="bg-gray-900 w-1/6 h-screen"></div> 

        </div>
    );
};

export default Projects;
