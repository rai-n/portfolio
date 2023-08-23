/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import './glow.css';
import { checkPhone } from '../helpers/isPhone';
// import Image from 'next/image';

const AboutMePage: React.FC = () => {
    return (
        <div className="flex">
            <div id="about" className="bg-[#2E3E51] min-h-screen p-8 pt-40 lg:w-5/6 xl:w-6/6">
                <h2 className="text-5xl font-bold mb-2 text-center text-white pt-20">Hi, I&apos;m Neeraj!</h2>
                <p className="text-center text-white text-sm mt-2">
                    BSc Computer Science - 1st Class | IAAP CPACC | AWS CCP
                </p>
                <p className="text-center text-white text-xl max-w-3xl mx-auto pt-20 mb-20">
                    <span className="font-bold text-yellow-400 glow">Experienced</span> <span className="font-bold text-green-400 glow">Full Stack Developer</span> passionate about <span className="font-bold text-purple-400 glow">cloud development</span>. Skilled in <span className="font-bold text-blue-400 glow">React/React Native, Typescript</span> with expertise in <span className="font-bold text-orange-400 glow">accessibility</span>.
                    <br /><br />
                    Proficient in choosing the right tech for each challenge. Manage data using <span className="font-bold text-green-400 glow">MySQL</span> <span className="font-bold text-orange-400 glow">MongoDB</span> <span className="font-bold text-purple-400 glow">DynamoDB</span> <span className="font-bold text-red-400 glow">Redis</span> with <span className="font-bold text-yellow-400 glow">Spring Boot</span> and <span className="font-bold text-green-400 glow">Node.js</span> on the backend. Delivering <span className="font-bold text-blue-400 glow">business value</span> through optimization.
                </p>

                <div className="flex flex-col items-center justify-center mt-24">
                    <img src="/icons/city.png" width={200} height={200} alt="City University London logo" className='bg-white' />
                    <p className="text-white text-sm mt-2 text-center">
                        Awarded <span className="font-bold text-blue-400">&quot;Best Professional Pathway Student 2022&quot;</span><br /> City University
                    </p>
                </div>

                {/* ... */}
                {/* Education, Certifications, Skills, Projects, etc. */}
            </div>
            <div className="hidden lg:block bg-gray-900 w-1/6 h-screen"></div> {/* Sidebar space */}
        </div>


    );
};

export default AboutMePage;
