import React from "react";
import { Button } from "./ui/button";

function CallToAction() {
  return (
    <div className="bg-green-700 text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
      <p className="mb-6">Experience the best in hospitality at Green La Vie Hotel.</p>
      <Button className="bg-white text-green-700 hover:bg-gray-100">
        Check Availability
      </Button>
    </div>
  );
}

export default CallToAction;
