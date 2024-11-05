import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="p-10 bg-gray-400">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-lg rounded-lg p-6 w-full max-w-md transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            If you have any questions or would like to reach out, feel free to contact me!
          </p>
          <div className="mb-4">
            <h3 className="font-semibold">Email:</h3>
            <p>syedainshrahkhatoon@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Phone:</h3>
            <p>0313-7865503</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Social Media:</h3>
            <p className="flex items-center">
              <Link href="#" className="text-blue-300 hover:underline flex items-center mr-4">
                <Image 
                  src="/linkedin.jpeg" // LinkedIn image path
                  alt="LinkedIn"
                  width={24} // Adjust width as needed
                  height={24} // Adjust height as needed
                  className="mr-1" // Optional styling
                />
                LinkedIn
              </Link>
              <Link href="#" className="text-blue-300 hover:underline flex items-center mr-4">
                <Image 
                  src="/github.jpeg" // GitHub image path
                  alt="GitHub"
                  width={24} // Adjust width as needed
                  height={24} // Adjust height as needed
                  className="mr-1" // Optional styling
                />
                GitHub
              </Link>
              <Link href="#" className="text-blue-300 hover:underline flex items-center">
                <Image 
                  src="/insta.jpeg" // Instagram image path
                  alt="Instagram"
                  width={24} // Adjust width as needed
                  height={24} // Adjust height as needed
                  className="mr-1" // Optional styling
                />
                Insta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
