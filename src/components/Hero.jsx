// function StandWords(){
//     return (
//       <div className="p-4  items-center">
//         <h2 className="font-bold text-2xl">
//           Escape into a World of Sophistication
//         </h2>
//         <p>You are welcome to visite our dear hotel</p>
//         <p>We are here to make your stay unforgettable</p>
//         <p>Book your stay with us today!</p>
//       </div>
//     );
// }

// export default StandWords;

// import React from "react";

// function Hero() {
//   return (
//     <div
//       className="relative bg-cover bg-center py-32 text-white"
//       style={{ backgroundImage: `url('/images/island-aerial.jpg')` }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="container mx-auto text-center relative z-10">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Green La Vie Hotel</h1>
//         <p className="text-xl mb-8">Your paradise awaits</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="relative bg-[url('/hotel.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center">
      <div className="bg-black bg-opacity-50 text-white p-10 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Luxury & Comfort</h1>
        <p className="text-lg mb-6">
          Book your stay with us and enjoy unmatched hospitality.
        </p>
        <Button className="bg-green-700 hover:bg-green-800">Book Now</Button>
      </div>
    </div>
  );
}

export default Hero;