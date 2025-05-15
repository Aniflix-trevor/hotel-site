// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8 text-center">
//       <p className="mb-4">&copy; 2025 Green La Vie Hotel. All rights reserved.</p>
//       <div className="flex justify-center space-x-4">
//         <a href="#facebook" className="hover:text-blue-300">
//           Facebook
//         </a>
//         <a href="#instagram" className="hover:text-blue-300">
//           Instagram
//         </a>
//         <a href="#twitter" className="hover:text-blue-300">
//           Twitter
//         </a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { CalendarDays, PhoneCall } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Green La Vie Hotel. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <span className="flex items-center gap-1 text-sm">
            <PhoneCall size={16} /> +254 724880940
          </span>
          <span className="flex items-center gap-1 text-sm">
            <CalendarDays size={16} /> Open 24/7
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
