// import React from "react";
// import { Card, CardContent } from "./ui/Card";
// import { Button } from "./ui/button";

// function Rooms() {
//   return (
//     <div className="py-12 px-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10">Our Rooms</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {[1, 2, 3, 4, 5].map((room) => (
//           <Card key={room} className="shadow-md">
//             <img
//               src={`/room${room}.jpg`}
//               alt={`Room ${room}`}
//               className="h-48 w-full object-cover rounded-t-xl"
//             />
//             <CardContent className="p-4">
//               <h3 className="text-xl font-semibold mb-2">Deluxe Room {room}</h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 A cozy and elegant room with modern amenities for your comfort.
//               </p>
//               <Button variant="outline">View Details</Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Rooms;

import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/button";

function Rooms() {
  const imageUrls = [
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqg110AKhLzzl6OsFLv6AZSUxgiARS-jKUTx7KQ_lsCTf_I5oToCsVBqysXaqESvmLppRE8OXdiFlNRQZ-R4aHn3c6C3z4C8UNP8WtH30rY_3p97diXAopShCiWMU_9wE7xMzCTIA=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npdVd6WggGLXa3seNLJ-YI5EDMFqwlNKkJ5UOHDulRckop3-xgARpBXwvu5uzZk3_mRMV5e2S6zeE_qESqVG5w4q997n-NtJvbFDEEGX11ozl9rqo63IPNg1jyxB7brE0qg9tby=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXUGqN2A7jlaWt9CyAAIuBO47q2TIIj3MGeV8Ix7ekTGnte3AK1iP7qJ8SOUJAewK-T0AcBiKOH_096nyevEjzz-UISdNITfULobtZBa-3_EAsjEd26NhWCaoIdLcT_pu6P5q0jQ=w141-h101-n-k-no-nu",
  ];

  return (
    <div className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((room) => (
          <Card key={room} className="shadow-md">
            <img
              src={imageUrls[room - 1]} // Access URL from array
              alt={`Room ${room}`}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Deluxe Room {room}</h3>
              <p className="text-sm text-gray-600 mb-4">
                A cozy and elegant room with modern amenities for your comfort.
              </p>
              <Button variant="outline">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
