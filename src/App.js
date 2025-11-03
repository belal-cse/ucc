import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Teacher from "./Components/Teacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/tsignup" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
