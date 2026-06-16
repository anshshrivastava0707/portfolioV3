'use client';
import { Menu } from "lucide-react";
import { useState, useEffect} from "react";

export default function Navbar() {
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);
    const [open,setOpen] = useState(true);
    useEffect(() => {
        // This code ONLY runs in the browser
        setViewportWidth(window.innerWidth);

        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if(viewportWidth === null) return null;
    if(viewportWidth > 500){
        return (
        <nav className="flex justify-center items-center gap-10 py-6 bg-linear-to-b from-green-800 via-green-950 to-transparent" >
            <a href="/" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">Home</a>
            <a href="/about" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">About</a>
            <a href="/myprojects" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">My Projects</a>
            <a href="/blogs" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">Blogs</a>
        </nav>
        );
    }else{
        return (
        <nav className="justify-start items-center gap-10 py-6 bg-linear-to-b from-green-800 via-green-950 to-transparent" >
            <button onClick={() => setOpen(!open)} className="pl-5"><Menu /></button>

            <ul 
                className={`flex flex-col items-center gap-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    open 
                    ? "max-h-0 opacity-0 pointer-events-none" 
                    : "max-h-64 opacity-100 text-center"
                }`}
                >
                <li>
                    <a href="/" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">About</a>
                </li>
                <li>
                    <a href="/myprojects" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">My Project</a>
                </li>
                <li>
                    <a href="/blogs" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">Blogs</a>
                </li>
            </ul>
        </nav>
        );
    }
    
}


