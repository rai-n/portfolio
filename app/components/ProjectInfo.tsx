/* eslint-disable react/jsx-key */
'use client'

import React, { useState } from 'react'
import '../pages/glow.css'

interface ProjectInfoProps {
    projectName: string;
    projectDescription: string;
    tools: string[];
    codeLink?: string;
    prodLink?: string;
    viewDocs?: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
    projectName,
    projectDescription,
    tools,
    codeLink = "",
    prodLink = "",
    viewDocs = ""
}) => {

    return (
        <div className="relative">
            <div className=" p-4 bg-black bg-opacity-50 mb-8">
                <div className="bg-white text-black py-1 px-4 rounded-md text-sm font-semibold">
                    {projectName}
                </div>
                <p className="text-white mt-2">
                    {projectDescription}
                </p>
                <div className="w-[50vw] mt-4">
                    <div className="flex flex-row items-center space-x-3">
                        {tools.map(element => (
                            <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-semibold">
                                {element}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    {codeLink ? <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >   Visit app <span role="img" aria-label="Link Emoji">🔗</span>
                    </a> : ''}
                    {prodLink ? <a
                        href={prodLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-blue-400 hover:underline"
                    >
                        Visit app <span role="img" aria-label="Link Emoji">🔗</span>
                    </a> : ''}
                    {viewDocs ? <a
                        href={viewDocs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-blue-400 hover:underline"
                    >
                        Read design & implementation <span role="img" aria-label="Link Emoji">🔗</span>
                    </a> : ''}
                    {/* {<button onClick={handleClicked} className="bg-sky-900 border border-white py-1 px-2 rounded-md text-xs font-semibold float-right" disabled={clicked}>
                        View screenshots
                        <svg className="h-5 w-5 ml-2 inline-block" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M22 13.4375C22 17.2087 22 19.0944 20.8284 20.2659C19.6569 21.4375 17.7712 21.4375 14 21.4375H10C6.22876 21.4375 4.34315 21.4375 3.17157 20.2659C2 19.0944 2 17.2087 2 13.4375C2 9.66626 2 7.78065 3.17157 6.60907C4.34315 5.4375 6.22876 5.4375 10 5.4375H14C17.7712 5.4375 19.6569 5.4375 20.8284 6.60907C21.4921 7.27271 21.7798 8.16545 21.9045 9.50024" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3.98779 6C4.10022 5.06898 4.33494 4.42559 4.82498 3.93726C5.76553 3 7.27932 3 10.3069 3H13.5181C16.5457 3 18.0595 3 19 3.93726C19.4901 4.42559 19.7248 5.06898 19.8372 6" stroke="#1C274C" stroke-width="1.5"></path> <circle cx="17.5" cy="9.9375" r="1.5" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M2 13.9376L3.75159 12.405C4.66286 11.6077 6.03628 11.6534 6.89249 12.5096L11.1822 16.7993C11.8694 17.4866 12.9512 17.5803 13.7464 17.0214L14.0446 16.8119C15.1888 16.0077 16.7369 16.1009 17.7765 17.0365L21 19.9376"
                                    stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>
                    </button>} */}
                </div>
            </div>
        </div>)


}


export default ProjectInfo