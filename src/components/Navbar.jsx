import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-green-700">Green La Vie Hotel</div>
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-green-700 cursor-pointer">Home</li>
        <li className="hover:text-green-700 cursor-pointer">About</li>
        <li className="hover:text-green-700 cursor-pointer">Rooms</li>
        <li className="hover:text-green-700 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
