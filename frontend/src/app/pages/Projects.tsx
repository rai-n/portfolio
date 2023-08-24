/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import ProjectInfo from '../components/ProjectInfo';
import { checkPhone } from '../helpers/isPhone';
import './projectImage.css'

const Projects = () => {

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
        <div className={`flex ${isPhone ? 'flex-col' : 'flex-row'}`}>
            <div id="projects" className={`bg-cyan-950 min-h-screen p-8 ${isPhone ? 'w-full' : 'w-1/3'}`}>
                <h1 className="text-4xl text-white font-bold mb-8 pt-20">Projects</h1>

                <div className="overflow-y-scroll overflow-x-hidden h-[700px]">
                    {/* Your content goes here */}
                    <ProjectInfo
                        projectName="🏛️ Canadian Museums"
                        projectDescription="Innova enables museums to sell museum tickets all over the world for on-site exhibitions and virtual tours with a seamless system for customer acquisition, directory for searching, on-site ticket scanning app, analytics, insights more."
                        tools={['React', 'Redux', 'Node.js', 'Stripe Custom Integration', 'MongoDB', 'Algolia Search', 'Others']}
                        prodLink={'https://innova-frontend.onrender.com/'}
                    />
                    <ProjectInfo
                        projectName="♿ User Testing System"
                        projectDescription="UTS is an internal system developed for AbilityNet to manage user testing sessions, keep track of previous sessions, find testers based on average rating, distance, suitability for project; saving hundreds of valuable consulting hours every month."
                        tools={['React', 'Redux', 'Node.js', 'Google Maps', 'MySQL']}
                        viewDocs={'https://github.com/rai-n/utp/blob/master/Design.pdf'}
                    />
                    <ProjectInfo
                        projectName="🤖 Predicting job salaries using NLP Deep Learning Model"
                        projectDescription="I built a deep learning network using TFLearn to analyze job descriptions scraped from Indeed and Glassdoor using Selenium. I preprocessed the data using NLTK and Scikit-learn. The network had two hidden layers with ReLU activation functions and an output layer with softmax activation function. I trained the network using cross-entropy loss function and accuracy metric. I optimized the network using Adam, ProximalAdagrad, and SGD algorithms. I tuned the hyperparameters using grid search. ProximalAdagrad achieved the highest accuracy of 0.86 on the test set. The project aimed to gain insights from the job market and aid in job matching processes."
                        tools={['Python', 'TFLearn', 'TensorFlow', 'Selenium', 'Others']}
                        viewDocs='https://github.com/Malyrion/Intro-to-AI-CW/blob/master/Intro_to_AI_CW.ipynb'
                    />
                    <ProjectInfo
                        projectName="Policy administration system"
                        projectDescription="Designed and developed a policy administration system as a part of the Cognizant onboarding training. Conducted thorough automated testing using tools to ensure code quality, and unit testing."
                        tools={['React', 'Spring boot', 'Maven', 'JUnit', 'Mockito', 'Microservice', 'AWS']}
                    // prodLink={'https://innova-frontend.onrender.com/'}
                    />
                    <ProjectInfo
                        projectName="AWS Developer Associate"
                        projectDescription="GitHub repository for the AWS Developer Associate notes I took while preparing for the exam. It contains all the hands on examples."
                        tools={['API Gateway', 'Lambda', 'DynamoDB', 'Others']}
                        viewDocs='https://github.com/rai-n/AWS-Developer-Associate'
                    />
                </div>
                <div>
                </div>
            </div>
            <div className="bg-gray-900 pt-20 w-full">
                <img 
                    src={"/images/Projects/innovacombined.png"}
                    alt="Innova example"
                    className={"border-gradient-light-blue border-4 border-opacity-70 rounded-full center responsive-image"}
                    loading="lazy"
                />
            </div>

            {/* {!isPhone && <div className="bg-gray-900 w-1/6 h-screen"></div>} */}

        </div>
    );
};

export default Projects;
