import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-10 mt-3">
      
      {/* Background Video with Fallback Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src="/bg-video.mp4" type="video/mp4" />
          {/* Fallback content for browsers that do not support video */}
          <Image
            src="/fallback-bg.jpg"
            alt="Fallback background"
            className="object-cover w-full h-full"
            layout="fill"
          />
        </video>
      </div>

      {/* Left Side - Image Section (60%) */}
      <div className="w-full md:w-3/5 flex justify-center relative z-10">
        <div className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-transform transform hover:scale-105">
          <div className="relative w-full h-full">
            <Image
              src="/bg.jpg"
              alt="Your Name"
              className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-80"
              width={256}
              height={256}
              priority
            />

            {/* Light Effect */}
            <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse"></div>
          </div>
        
        </div>
     
      </div>

      {/* Right Side - Black Section (40%) */}
      <div className="w-full md:w-2/5 text-white mt-8 md:mt-0 bg-black p-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-base md:text-lg mb-8">
          I am Syeda Inshrah. A passionate web developer skilled in modern web technologies.
        </p>

        {/* View My Projects Button with Gradient */}
        <Link href="https://e-commerce-jqrt.vercel.app/"
        className='bg-gradient-to-r from-gray-400 to-gray-900 text-white py-2 px-6 rounded transition duration-300 transform hover:bg-gray-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        >
              View My Projects
          
         
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
