import { ExternalLink, Swords } from "lucide-react"

export default function Blogs(){
    return(
        <div>
            <h1 className="text-white text-center text-6xl p-5 font-bold text-shadow-lg text-shadow-green-800 font-mono">Blogs</h1>
            <div className="grid p-5 grid-cols-1 lg:grid-cols-2 mx-auto gap-4">
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
                    
                    <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                        Statistics in Sports
                    </h1>
                    
                
                    <p className="text-white font-mono"> 
                    To optimize performance and boost market value, competitive athletes use sensor-driven statistics to replace endless, ineffective practice with targeted, data-driven training.
                    </p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">7 July 2023</h1>
                        <div className="flex justify-end">
                            <a  href="/blogs/1">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
                    
                    <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                        Are we the problem?
                    </h1>
                    
                
                    <p className="text-white font-mono"> 
                    Despite our intellectual potential to solve problems, human flaws and biases are turning us into problem creators, as seen when our negative behavior and prejudices corrupt advanced technologies like AI.
                    </p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">27 June 2023</h1>
                        <div className="flex justify-end">
                            <a  href="/blogs/2">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
                    
                    <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                        Rapid changes
                    </h1>
                    
                
                    <p className="text-white font-mono"> 
                    Rapid technological evolution is shifting standards—such as the transition to 12-pin ATX12VO power standards—while diminishing returns in performance-per-dollar mean that spending more money no longer guarantees a proportional leap in power.
                    </p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">23 June 2023</h1>
                        <div className="flex justify-end">
                            <a  href="/blogs/3">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-5 min-w-[300px] h-full min-h-[300px]  hover:-translate-y-2 hover:border-green-400 transition-normal duration-300 ease-in-out border-2 rounded-xl border-green-800 flex flex-col">
                    
                    <h1 className="text-2xl text-white pb-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono">
                        Perfection in the Tech Industry
                    </h1>
                    
                
                    <p className="text-white font-mono"> 
                    We only remember the winners who define the peak of perfection—like Apple and Steve Jobs, while completely forgetting the runners-up who built the foundations.
                    </p>
                    <div className="grid grid-cols-2 mt-auto">
                        <h1 className="text-sm text-start text-white font-mono mt-auto">21 June 2023</h1>
                        <div className="flex justify-end">
                            <a  href="/blogs/4">
                            <ExternalLink className="text-white w-6 h-6 hover:text-green-400 transition-normal duration-300 ease-in-out"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}