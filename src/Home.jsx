import React from "react";
import logo from "../public/crud.png";
import logo2 from "../public/mern.png";
function Home() {
  return (
    <div>
      <img src={logo} className="h-[35vh] mx-auto w-[80%]" alt="" />
      <img src={logo2} className="h-[55vh] w-[100%]" alt="" />
    </div>
  );
}

export default Home;
