import { ExternalLink, Gamepad2, Swords, Users } from "lucide-react";

export default function Projects() {
    return(
        <div>
            <h1 className="text-white text-center text-6xl p-5 font-bold text-shadow-lg text-shadow-green-800 font-mono">My Projects!</h1>
            <div className="grid p-5 grid-cols-1 lg:grid-cols-3 mx-auto gap-4">
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
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
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
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
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
                    <div className="flex gap-3">
                        <div className="pt-1">
                            <Users className="text-green-400 w-6 h-6 animate-pulse" />
                        </div>
                        <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                            Anonymous Confessions: 
                        </h1>
                    </div>
                    <p className="text-white font-mono"> 
                    A secure, real-time platform designed for anonymous expression, featuring location-based filtering to foster hyper-local community connection. Built with a full-stack architecture using FastAPI and MongoDB to ensure seamless, low-latency updates for every submission.
                    </p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">[Python] [React] [MongoDB]</h1>
                    
                        <div className="flex justify-end">
                            <a target="_blank" href="https://github.com/anshshrivastava0707/anonymousConfession/">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px] hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
                    <div className="flex gap-3">
                        <div className="pt-1">
                            <Users className="text-green-400 w-6 h-6 animate-pulse" />
                        </div>
                        <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                            Hardware Advisory System (HAS): 
                        </h1>
                    </div>
                    <p className="text-white font-mono"> 
                    An AI-driven Hardware Advisory System (HAS) chatbot designed to intelligently diagnose, troubleshoot, and resolve complex computer hardware queries. It leverages targeted logic to provide users with precise architectural recommendations and hardware solutions, streamlining system optimization and technical support.
                    </p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">[Python]</h1>
                    
                        <div className="flex justify-end">
                            <a target="_blank" href="https://github.com/anshshrivastava0707/HAS">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px] hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
                    <div className="flex gap-3">
                        <div className="pt-1">
                            <Gamepad2 className="text-green-400 w-6 h-6 animate-pulse" />
                        </div>
                        <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                            Minecraft Chest Randomizer: 
                        </h1>
                    </div>
                    <p className="text-white font-mono"> 
                    A plugin which provides you with all the help you could possibly need to beat the Ender Dragon. All the riches at an arm's reach.
                    <br/>
                    
                    </p>
                    <p className="font-mono text-white pt-5">Downloads: 164</p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">[Java]</h1>
                        
                        <div className="flex justify-end">
                            <a target="_blank" href="https://www.spigotmc.org/resources/op-chest-randomizer.115617/">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px] hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
                    <div className="flex gap-3">
                        <div className="pt-1">
                            <Gamepad2 className="text-green-400 w-6 h-6 animate-pulse" />
                        </div>
                        <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                            Riches Randomizer: 
                        </h1>
                    </div>
                    <p className="text-white font-mono"> 
                    A plugin which provides you with the best materials possible, but none of the basic materials required. The rarest items become basic and the most basic items become a nightmare to obtain
                    <br/>
                    
                    </p>
                    <p className="font-mono text-white pt-5">Downloads: 79</p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">[Java]</h1>
                        
                        <div className="flex justify-end">
                            <a target="_blank" href="https://www.spigotmc.org/resources/oprandomizer.93462/">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px] hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out  border-2 rounded-xl border-green-800 flex flex-col">
                    <div className="flex gap-3">
                        <div className="pt-1">
                            <Gamepad2 className="text-green-400 w-6 h-6 animate-pulse" />
                        </div>
                        <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                            Custom Enchants: 
                        </h1>
                    </div>
                    <p className="text-white font-mono"> 
                    A plugin which adds fun and powerful enchantments to add to your tools and enchance your playing experience.
                    <br/>
                    
                    </p>
                    <p className="font-mono text-white pt-5">Downloads: 122</p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">[Java]</h1>
                        
                        <div className="flex justify-end">
                            <a target="_blank" href="https://www.spigotmc.org/resources/customenchants.93535/">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
