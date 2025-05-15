// function Header() {
//   return (
//     <header className="bg-cyan-100 text-zinc-400 p-4 flex flex-col items-center rounded-t-xl ">
//       <h1 className="text-2xl">Green La Vie</h1>
//     </header>
//   );
// }

import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-500 mr-2">Green La Vie Hotel</span>
          <span className="w-10 h-10 bg-blue-500 rounded-full"></span> {/* Add your graphic element as a background in CSS */}
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#rooms" className="hover:text-blue-500">Rooms & Suites</a></li>
            <li><a href="#dining" className="hover:text-blue-500">Dining</a></li>
            <li><a href="#experiences" className="hover:text-blue-500">Experiences</a></li>
            <li><a href="#gallery" className="hover:text-blue-500">Gallery</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          {/* Hamburger menu icon (replace with your own) */}
          <button>Menu</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

