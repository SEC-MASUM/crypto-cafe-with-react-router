import React from "react";

const UsAddress = () => {
  return (
    <div className="border p-8 bg-green-100 w-full">
      <div className="flex flex-col md:flex-row justify-center  md:justify-between items-center">
        <div className="order-2 md:order-1">
          <h1>Street: 1203 SN Street</h1>
          <h1>City: New York</h1>
          <h1>Phone: +1(607)2333333</h1>
          <h1>Email: contact.usa@cc.com</h1>
        </div>
        <div className="mb-5 order-1 md:order-2 text-center">
          <h1 className="text-2xl">USA OFFICE</h1>
        </div>
      </div>
    </div>
  );
};

export default UsAddress;
