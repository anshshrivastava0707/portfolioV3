"use client"

import Image from "next/image";
import Navbar from "./components/navbar";
import TypingTitle from "./components/TypingTitle";
import { CardSim, ExternalLink, ShieldAlert, Swords, Users } from 'lucide-react';
// import { app, auth, db, storage } from "./utils/firebase/connect";
// import { collection,getDocs, query, where } from "firebase/firestore";

import GitHubTracker from "./components/githubTracker";
import { useEffect, useState } from "react";

interface Card{
  id: string,
  content: string
}

interface ProjectCard{
  id: string,
  content: string,
  title: string,
  language :string,
  link :string
}

interface BlogCard{
  id: string,
  content: string,
  title: string,
  date :string
}


export default function Home() {
  // const [card1,setCard1] = useState<Card>();
  // const [card2,setCard2] = useState<Card>();
  // const [projectCard1,setprojectCard1] = useState<ProjectCard>();


  // useEffect(() => {
  //   const getInfo  = async () => {
  //     const colRef = collection(db,"homepage")
  //     const q = query(colRef)
  //     const querySnapshot = await getDocs(q);
  //     const data = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       })) as Card[];
  //     const c1 = data.find((item) => item.id === "card1");
  //     const c2 = data.find((item) => item.id === "card2");
  //     const pc1 = data.find((item) => item.id === "projectcard1");

  //     setCard1(c1);
  //     setCard2(c2);
  //     setprojectCard1(projectCard1)

  //   }
  //   getInfo()
  // },[])
  

  return (
    <div>
      
      <div>
        
          <div className="flex justify-center">
            <h1 className="text-white text-center text-6xl p-5 font-bold text-shadow-lg text-shadow-green-800 font-mono">Hi, I'm Ansh!</h1>
          </div>
          <div className="flex justify-center wrap-normal">
              <h1 className="text-white text-center text-5xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">I am a <TypingTitle /></h1>
          </div>
        
      </div>
      
      <div className="w-full flex flex-wrap gap-4 p-10 justify-between">
        <div className="p-5 font-mono flex-1 min-w-[300px] max-w-full md:max-w-[48%] border-2 hover:border-green-400 border-green-800 rounded-xl tracking-wide hover:scale-105 transition-normal ease-linear duration-300">
          <p className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono"> Hi There! :</p>
          Driven by the creative thrill of building from scratch, I focus on real-world problem-solving over classroom syntax memorization. As a self-driven developer, I love bridging the gap between theory and production-ready applications.
        </div>
        

        <div className="p-5 font-mono flex-1 min-w-[300px] max-w-full md:max-w-[48%] border-2 hover:border-green-400 border-green-800 rounded-xl tracking-wide hover:scale-105 transition-normal ease-linear duration-300">
          <p className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono"> Live Status:</p>
          Ansh_System_OS v2.6.16
          <br/>
          --------------------------------------
          <br/>
          ● CURRENT_FOCUS: B.Tech CSE
          <br/>
          ● CORE_STACK:    [React, FastAPI, Python, Java]
          <br/>
          ● DATABASES:     [MongoDB, SQL]
          <br/>
          ● CURRENT_DEV:   Building Minecraft Agentic AI
          <br/>
          ● STATUS:        Open for collaborations 🟢
          <br/>
  
          <p className="text-xl justify-end pt-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono transition-normal hover:text-blue-500 ease-linear duration-300">
          <a href="/about">Click here to learn more</a>
          </p>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">My Projects: </h1>
        <div className="p-5 grid gap-4 grid-cols-1 lg:grid-cols-3 w-full mx-auto">
          <div className="p-5 min-w-[300px] min-h-[300px] h-full hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
            <div className="flex gap-3">
              <div className="pt-1">
              <Swords className="text-green-400 w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                Minecraft Agentic AI: 
              </h1>

            </div>
            
            <p className="text-white font-mono"> 
              An AI agent which helps and guides you in beating minecraft. Provides input and helps you beat the Ender Dragon. In construction 🚧.
            </p>
            <div className="grid grid-cols-2 mt-auto">
              <h1 className="text-sm text-start text-white font-mono mt-auto">[Java]</h1>
              
              <div className="flex justify-end">
                <a target="_blank" href="https://www.linkocollab.xyz/">
                  <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                </a>
              </div>
            </div>
            
          </div>
          <div className="p-5 min-w-[300px] min-h-[300px] h-full hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
            <div className="flex gap-3">
              <div className="pt-1">
              <Users className="text-green-400 w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                Linko: 
              </h1>
            </div>
            <p className="text-white font-mono"> 
              Coding is better together. Linko is the ultimate collaboration tool built to make real-time pair programming on LeetCode and other platforms completely effortless.
            </p>
            <div className="grid grid-cols-2 mt-auto">
              <h1 className="text-sm text-start text-white font-mono mt-auto">[TypeScript]</h1>
              
              <div className="flex justify-end">
                <a target="_blank" href="https://www.linkocollab.xyz/">
                  <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                </a>
              </div>
            </div>
            
          </div>
          <div className="p-5 min-w-[300px] min-h-[300px] h-full hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
            <div className="flex gap-3">
              <div className="pt-1">
              <ShieldAlert className="text-green-400 w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                Hardware Advisory System (HAS):
              </h1>

            </div>
            <p className="text-white font-mono"> 
              An AI-driven Hardware Advisory System (HAS) chatbot designed to intelligently diagnose, troubleshoot, and resolve complex computer hardware queries. It leverages targeted logic to provide users with precise architectural recommendations and hardware solutions, streamlining system optimization and technical support.
            </p>
            <div className="grid grid-cols-2 mt-auto">
              <h1 className="text-sm text-start text-white font-mono mt-auto">[Python] [AWS]</h1>
              
              <div className="flex justify-end">
                <a target="_blank" href="https://www.linkocollab.xyz/">
                  <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        <div className="w-full flex justify-end p-5">
            <h1 className="font-bold font-mono hover:text-green-500 transition-normal ease-linear duration-300"><a href="/myprojects">See All Projects</a> {"❯❯❯❯"}</h1>
        </div>

      </div>
      <div className="p-5">
        <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">My Blogs: </h1>
        <div className="p-5 grid gap-4 grid-cols-1 sm-grid-cols-2 lg:grid-cols-3 w-full mx-auto">
  
          <div className="p-5 min-w-[300px] lg:h-[300px] h-fit border-2 rounded-xl hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-green-800 flex flex-col">
            <div className="flex">
              <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
              Statistics in Sports 
              </h1>
              
            </div>
            
            <p className="text-white font-mono"> 
              To optimize performance and boost market value, competitive athletes use sensor-driven statistics to replace endless, ineffective practice with targeted, data-driven training.
            </p>
            <h1 className="text-sm text-white font-mono mt-auto">7 July 2023</h1>
          </div>
          <div className="p-5 min-w-[300px] lg:h-[300px] h-fit hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
            <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
              Are we the problem ?
            </h1>
            <p className="text-white font-mono"> 
              Despite our intellectual potential to solve problems, human flaws and biases are turning us into problem creators, as seen when our negative behavior and prejudices corrupt advanced technologies like AI.
            </p>
            
            <h1 className="text-sm text-white font-mono mt-auto">27 June 2023</h1>
          </div>
          <div className="p-5 min-w-[300px] lg:h-[300px] h-fit hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
            <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
              Rapid changes
            </h1>
            <p className="text-white font-mono"> 
              Rapid technological evolution is shifting standards—such as the transition to 12-pin ATX12VO power standards—while diminishing returns in performance-per-dollar mean that spending more money no longer guarantees a proportional leap in power.
            </p>
            <h1 className="text-sm text-white font-mono mt-auto">23 June 2023</h1>
          </div>
        </div>
        <div className="w-full flex justify-end p-5">
            <h1 className="font-bold font-mono hover:text-green-500 transition-normal ease-linear duration-300"><a href="/blogs">See All Blogs</a> {"❯❯❯❯"}</h1>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">Activity Feed: </h1>
        <GitHubTracker />
      </div>
      <div className="p-5 pb-10">
        <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">Contact: </h1>
        <div className="w-full flex flex-wrap font-mono text-xl justify-center gap-10 p-5">
          <a target="_blank" href="https://www.linkedin.com/in/ansh-shrivastava-083aa427a/"><h1 className="hover:border-b-2 hover:border-blue-600 hover:scale-105 transition-normal duration-300 ease-in-out">LinkedIn</h1></a>
          <a target = "_blank" href="https://github.com/anshshrivastava0707"><h1 className="hover:border-b-2 hover:border-blue-600 hover:scale-105 transition-normal duration-300 ease-in-out">Github</h1></a>
          <a target  = "_blank" href="https://x.com/AnshCoderr"><h1 className="hover:border-b-2 hover:border-blue-600 hover:scale-105 transition-normal duration-300 ease-in-out">Twitter/X</h1></a>
        </div>
      </div>
    </div>
  );
}
