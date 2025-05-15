// import React from "react";
// import Header from "./components/Header";
// // import Booking from "./components/Booking";
// import StandWords from "./components/StandWords";

// function App() {
//   return (
//     <div>
//       <Header />
//       <div
//         className=" ml-2 mr-2 mb-2 bg-blue-100 rounded-b-2xl items-center "
//       >
//         <StandWords />
//         {/* <Booking /> */}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
//       <Header />
//       <main className="flex-grow">
//         <Hero />
//         <MainContent />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// 
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Rooms />
      <CallToAction />
      <Footer />
    </div>
  );
}