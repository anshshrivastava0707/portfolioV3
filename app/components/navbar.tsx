'use client';
import { useState, useEffect} from "react";

export default function Navbar() {
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);

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
        <nav className="flex justify-center items-center gap-10 py-6 bg-linear-to-b from-green-800 via-green-950 to-transparent" >
            {/* <a href="/" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">Home</a>
            <a href="/about" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">About</a>
            <a href="/myprojects" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">My Project</a>
            <a href="/articles" className="text-xl border-b border-b-transparent transition-all duration-300 ease-in-out hover:scale-125 hover:border-b-blue-500">Articles</a> */}
        </nav>
        );
    }
    
}


