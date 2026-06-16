"use client"

import { CodeXml } from "lucide-react"
import { useEffect, useState } from "react";

export default function ProgrammingTimeline(){

    const [screenWidth,setScreenWidth] = useState(0);
    useEffect(() => {
        setScreenWidth(window.innerWidth)
    })

    if(screenWidth < 500){
        return (
            <div className="pb-5">
                <div className="grid font-mono grid-cols-1 pl-5 pr-5">
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Python Foundations</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Began the programming journey by taking a Python course on Udemy, establishing a solid foundation in core coding concepts. Python's readable syntax allowed a strong focus on logic, data structures, and problem-solving without getting bogged down by complex boilerplate code.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Java and Minecraft Plugins</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Transitioned to learning Java specifically to build custom Minecraft plugins driven by a specific project goal. This practical step introduced object-oriented programming (OOP) principles and experience working within an existing framework and API.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"> Transition to Web Development</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Curiosity naturally shifted toward the web development space, prompting the decision to learn JavaScript. As the native language of the web, learning JavaScript opened up the world of interactive UI elements and dynamic client-side scripting.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"> Vanilla Frontend Stack</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Built initial websites using the foundational core of the frontend: vanilla JavaScript, HTML, and CSS. Mastering these native web technologies provided a deep understanding of how browsers parse layout, styles, and behavioral scripting.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Introduction to ExpressJS</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Integrated ExpressJS into the backend stack to handle multi-page routing and simplify the hosting process. This marked the entry into server-side development, allowing efficient management of HTTP requests and dynamic asset rendering.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Hardware and C++ with Arduino</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Explored low-level programming and hardware integration by learning C++ for a dedicated Arduino project. Working with microcontrollers taught valuable architectural constraints regarding memory management and direct software hardware interaction.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Scaling Frontend with ReactJS</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Recognized the limits of vanilla JavaScript for complex interfaces and took on the steep learning curve of ReactJS. While challenging at first, adopting a component-based architecture saved massive amounts of development time and made the code modular and reusable.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Infrastructure & Infrastructure: Custom NAS Build</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Designed and deployed a custom Network-Attached Storage (NAS) server to manage localized data storage and redundancy. This project provided hands-on experience with Linux server administration, network protocols, permissions management, and storage architecture.</p>
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Core Engineering, Infrastructure & Project Depth</h1>
                        <p className="pl-5 ml-5 text-start mr-5 border-l-green-600 border-l-4 border-dashed ">Shifted focus away from syntax collection to deeply mastering core computer science concepts, networking infrastructure, and software architecture. Currently dedicated to building production-grade projects, optimizing existing stacks, and exploring self-hosted infrastructure solutions like custom NAS deployments.</p>
                    </div>
                    

                </div>

            </div>
        );
    }else{
        return(
            <div className="pb-5">
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 ml-[45]">
                    <div className="flex flex-wrap justify-end">
                        <h1 className="text-white text-end text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Python Foundations<CodeXml className="scale-150 mr-[-10] mt-1 text-green-400 animate-pulse"/></h1>
                        <p className="pr-5 ml-5 text-end mr-5 border-r-green-600 border-r-4 border-dashed ">Began the programming journey by taking a Python course on Udemy, establishing a solid foundation in core coding concepts. Python's readable syntax allowed a strong focus on logic, data structures, and problem-solving without getting bogged down by complex boilerplate code.</p>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 mr-[45]">
                    <div>
                        
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="scale-150 ml-[-10] mt-1 text-green-400 animate-pulse"/>Java and Minecraft Plugins</h1>
                        <p className="pl-5 ml-5 mr-5 border-l-green-600 border-l-4 border-dashed ">Transitioned to learning Java specifically to build custom Minecraft plugins driven by a specific project goal. This practical step introduced object-oriented programming (OOP) principles and experience working within an existing framework and API.</p>
                    </div>
                    
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 ml-[45]">
                    <div className="flex flex-wrap justify-end">
                        <h1 className="text-white text-end text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Transition to Web Development<CodeXml className="scale-150 mr-[-10] mt-1 animate-pulse text-green-400"/></h1>
                        <p className="pr-5 ml-5 mr-5 text-end border-r-green-600 border-r-4 border-dashed ">Curiosity naturally shifted toward the web development space, prompting the decision to learn JavaScript. As the native language of the web, learning JavaScript opened up the world of interactive UI elements and dynamic client-side scripting.</p>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 mr-[45]">
                    <div>
                        
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="scale-150 ml-[-10] mt-1 animate-pulse text-green-400"/>Vanilla Frontend Stack</h1>
                        <p className="pl-5 ml-5 mr-5 border-l-green-600 border-l-4 border-dashed ">Built initial websites using the foundational core of the frontend: vanilla JavaScript, HTML, and CSS. Mastering these native web technologies provided a deep understanding of how browsers parse layout, styles, and behavioral scripting.</p>
                    </div>
                    
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 ml-[45]">
                    <div className="flex flex-wrap justify-end">
                        <h1 className="text-white text-end text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Introduction to ExpressJS<CodeXml className="scale-150 animate-pulse mr-[-10] mt-1 text-green-400"/></h1>
                        <p className="pr-5 ml-5 mr-5 text-end border-r-green-600 border-r-4 border-dashed ">Integrated ExpressJS into the backend stack to handle multi-page routing and simplify the hosting process. This marked the entry into server-side development, allowing efficient management of HTTP requests and dynamic asset rendering.</p>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 mr-[45]">
                    <div>
                        
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="scale-150 ml-[-10] mt-1 animate-pulse text-green-400"/>Hardware and C++ with Arduino</h1>
                        <p className="pl-5 ml-5 mr-5 border-l-green-600 border-l-4 border-dashed ">Explored low-level programming and hardware integration by learning C++ for a dedicated Arduino project. Working with microcontrollers taught valuable architectural constraints regarding memory management and direct software hardware interaction.</p>
                    </div>
                    
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 ml-[45]">
                    <div className="flex flex-wrap justify-end">
                        <h1 className="text-white text-end text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Scaling Frontend with ReactJS<CodeXml className="scale-150 animate-pulse mr-[-10] mt-1 text-green-400"/></h1>
                        <p className="pr-5 ml-5 mr-5 text-end border-r-green-600 border-r-4 border-dashed ">Recognized the limits of vanilla JavaScript for complex interfaces and took on the steep learning curve of ReactJS. While challenging at first, adopting a component-based architecture saved massive amounts of development time and made the code modular and reusable.</p>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 mr-[45]">
                    <div>
                        
                    </div>
                    <div className="flex flex-wrap justify-start">
                        <h1 className="text-white text-start text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="scale-150 animate-pulse ml-[-10] mt-1 text-green-400"/>Infrastructure & Infrastructure: Custom NAS Build</h1>
                        <p className="pl-5 ml-5 mr-5 border-l-green-600 border-l-4 border-dashed ">Designed and deployed a custom Network-Attached Storage (NAS) server to manage localized data storage and redundancy. This project provided hands-on experience with Linux server administration, network protocols, permissions management, and storage architecture.</p>
                    </div>
                    
                    
                </div>
                <div className="grid font-mono grid-cols-2 pl-5 pr-5 ml-[45]">
                    <div className="flex flex-wrap justify-end">
                        <h1 className="text-white text-end text-2xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4">Core Engineering, Infrastructure & Project Depth<CodeXml className="scale-150 animate-pulse mr-[-10] mt-1 text-green-400"/></h1>
                        <p className="pr-5 ml-5 mr-5 text-end ">Shifted focus away from syntax collection to deeply mastering core computer science concepts, networking infrastructure, and software architecture. Currently dedicated to building production-grade projects, optimizing existing stacks, and exploring self-hosted infrastructure solutions like custom NAS deployments.</p>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }

    
}