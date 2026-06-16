// components/TypingTitle.jsx
"use client";

import Typewriter from 'typewriter-effect';

export default function TypingTitle() {
  return (
    <div className="text-white text-center w-full text-4xl p-5 font-bold text-shadow-lg text-shadow-blue-800 tracking-wide font-mono">
      <Typewriter
        options={{
          strings: [
            'Fullstack Engineer',
            'Tech Enthusiast',
            'CyberSec Enthusiast'
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
        }}
      />
    </div>
  );
}