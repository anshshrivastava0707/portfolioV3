"use client"

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubTracker() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
    setIsClient(true);
  }, []);
  // Define custom green tones matching your terminal UI
  const cyberpunkTheme = {
    light: ['#111827', '#064e3b', '#047857', '#34d399', '#a7f3d0'],
    dark: ['#0a0f0d', '#022c22', '#059669', '#10b981', '#4ade80'], // Rich neon green variants
  };
  if (!isClient) return <div className="text-green-900 font-mono">Loading Core Modules...</div>;
  return (
    <div className="w-full bg-black border border-green-950 p-6 rounded-xl transition-all duration-300 hover:border-green-400">
      <h3 className="font-mono text-xl font-bold text-white mb-4 tracking-wide">
        ⚡ System Contributions
      </h3>
      
      <div className="flex justify-center items-center overflow-x-auto p-2 font-mono text-gray-400 text-xs">
        <GitHubCalendar 
          username="anshshrivastava0707" // 👈 Replace with your actual GitHub handle
          theme={cyberpunkTheme}
          colorScheme="dark"
          
        />
      </div>
    </div>
  );
}