import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-screen flex justify-between flex-col p-6">
      <div className="head">
        <h1 className="font-[light] text-[14.5vw] translate-y-full leading-none text-center">
          Cristina Gómez
        </h1>
      </div>
      <div className="btm w-[90%] flex items-center justify-between font-[bold] text-[1vw]">
        <div className="flex flex-col leading-tight">
          <h3 className="text-[#787878]">Copyright:</h3>
          <h3>All Rights Reserved © {new Date().getFullYear()}</h3>
        </div>
        <div className="flex flex-col leading-tight">
          <h3 className="text-[#787878]">Fast Travel:</h3>
          <h3>Go Back to Top</h3>
        </div>
        <div className="flex flex-col leading-tight">
          <h3 className="text-[#787878]">Design by:</h3>
          <h3>Alek Tkachev</h3>
        </div>
        <div className="flex flex-col leading-tight">
          <h3 className="text-[#787878]">Code by:</h3>
          <h3>Surya Aditya</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
