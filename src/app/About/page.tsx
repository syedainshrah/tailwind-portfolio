import React from 'react';
import { FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'; 
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si'; // Specific icons import karna

const About = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* About Me Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I'm Syeda Inshrah, a passionate web developer with a love for creating intuitive and responsive web applications. 
            My journey in web development began as a hobby, and over time, it has transformed into a career pursuit. 
            I enjoy tackling challenges and continuously learning to improve my skills.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc ml-5">
            <li className="flex items-center mb-2">
              <FaHtml5 className="mr-2 text-orange-500" /> HTML
            </li>
            <li className="flex items-center mb-2">
              <FaCss3Alt className="mr-2 text-blue-500" /> CSS
            </li>
           
            <li className="flex items-center mb-2">
              <SiTypescript className="mr-2 text-blue-600" /> TypeScript
            </li>
            
            <li className="flex items-center mb-2">
              <SiTailwindcss className="mr-2 text-teal-400" /> Tailwind CSS
            </li>
            <li className="flex items-center mb-2">
              <SiNextdotjs className="mr-2 text-gray-700" /> Next.js
            </li>
            <li className="flex items-center mb-2">
              <FaGitAlt className="mr-2 text-red-500" /> Communication Skills
            </li>
          </ul>
        </div>

        {/* Hobbies Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
          <p>
            In my free time, I enjoy coding, reading, and exploring new technologies. 
            I also love spending time with friends and family, going for nature walks, and trying out new recipes in the kitchen.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p>
            Currently, I don't have formal experience in the industry, but I am actively seeking opportunities to grow and develop my skills. 
            I believe that working in a collaborative and innovative environment with experienced professionals will provide me with invaluable insights. 
            I am eager to learn best practices and contribute my creativity and enthusiasm to projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
