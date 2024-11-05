import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-black p-10 mt-3 relative overflow-hidden">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
          <div className="relative w-full h-full">
            <Image 
              src="/bg.jpg" 
              alt="Your Name" 
              className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-80 " 
              width={256} // Set appropriate width
              height={256} // Set appropriate height
            />
           
            {/* Light Effect */}
            <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse"></div>
          </div>
          
        </div>
        
      </div>

      {/* Right Side Text and Button */}
      <div className="text-white w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-base md:text-lg mb-8">
          I'm Syeda Inshrah, a passionate web developer skilled in modern web technologies.
        </p>
        {/* View My Projects Button with Gradient */}
        <Link href="/">
          <span className="bg-gradient-to-r from-gray-400 to-gray-900 text-white py-2 px-6 rounded transition duration-300 transform hover:bg-gray-600 hover:shadow-lg cursor-pointer">
            View My Projects
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
