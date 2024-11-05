import React from 'react';

const Header = () => {
  return (
    
    <header className="flex justify-between items-center p-4 bg-blue-200 mt-5">



      <h1 className="text-gray-800 font-bold text-lg">Syeda Inshrah</h1>
      <nav className="flex space-x-4 ">
        <a href="/" className="text-gray-800 hover:text-blue-600">Home</a>
        <a href="/About" className="text-gray-800 hover:text-blue-600">About</a>
        <a href="/Contact" className="text-gray-800 hover:text-blue-600">Contact</a>
      </nav>

      
    </header>

    
  );
};

export default Header;
