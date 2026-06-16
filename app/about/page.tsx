
import { CodeXml } from "lucide-react";
import ProgrammingTimeline from "../components/programmingTimeline";

export default function About(){
    return(
        <div>
                <h1 className="text-white text-center text-6xl p-5 font-bold text-shadow-lg text-shadow-green-800 font-mono">About me!</h1>
            <div className="">
                <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="mt-2 ml-[-5] text-green-400 scale-150"/> My Experience: </h1>
                <div className="pl-5 ml-5 mr-5  border-l-green-600 border-l-4 border-dashed ">
                    <p className="p-5">I learned how to programme on my own. The Internet has taught me a lot. To reach my ability level, I have accumulated knowledge from every possible source. I have assisted numerous individuals and advised numerous more. The programming taught in school never interested me. I didn't realise how interesting this genre is until I started exploring it on my own. Now, I look for solutions to challenges in real life using my abilities and knowledge.</p>
                </div>
            </div>
            <div className="">
                <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="mt-2 ml-[-5] text-green-400 scale-150"/> My Interests and Hobbies: </h1>
                <div className="pl-5 ml-5 mr-5  border-l-green-600 border-l-4 border-dashed ">
                    <p className="p-5">Basketball and Football are my favourite sports. I am also an Amateur Cuber with the fastest time of 19.56s. I like programming and rap music, of course. Eminem is my favourite rapper, and Arsenal is my favourite soccer team. I recently developed an interest in Formula 1.</p>
                </div>
                <h1 className="text-white text-start text-3xl p-5 font-bold text-shadow-lg text-shadow-green-800 tracking-wide font-mono flex gap-4"><CodeXml className="mt-2 ml-[-5] text-green-400 scale-150"/> My Programming Path: </h1>
            </div>
            <ProgrammingTimeline />
        </div>
    );
}