import Image from 'next/image'
import React from 'react'
const ProjectInfo = ({ projectName, projectDescription, tools, codeLink, prodLink }) => (

    <div className="relative">
        <div className="absolute top-0 left-0 right-0 p-4 bg-black bg-opacity-50 mb-24">
            <div className="bg-white text-black py-1 px-4 rounded-md text-sm font-semibold">
                {projectName}
            </div>
            <p className="text-white mt-2">
                {projectDescription}
            </p>
            <div className="w-[50vw] mt-4">
                <div className="flex flex-row items-center space-x-3">
                    <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-semibold">
                        React
                    </span>
                    <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-semibold">
                        Redux
                    </span>
                    <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-semibold">
                        Node.js
                    </span>
                    <span className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-semibold">
                        Stripe Custom Integration
                    </span>
                    {/* ... other chips for tools */}
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
            </div>
            
        </div>

    </div>

    
)


export default ProjectInfo