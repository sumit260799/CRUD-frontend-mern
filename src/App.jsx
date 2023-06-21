import React from "react";
import Navbar from "./Navbar";
import CodeForInterviews from "./CodeForInterviews";
import Adduser from "./Adduser";
import Alluser from "./Alluser";
import UpdateUser from "./UpdateUser";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code for interviews" element={<CodeForInterviews />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/alluser" element={<Alluser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
      <ToastContainer position="top-center" theme="light" autoClose={2000} />
    </BrowserRouter>
  );
}
