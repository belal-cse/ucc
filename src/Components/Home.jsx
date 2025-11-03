import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Teacher from "./Teacher";

function Home() {
  const navigate = useNavigate();

  function student() {
    alert("confirm are you a student");
   
    
  }
  function teacher(){
    alert("confirm are you  a teacher");
     navigate("/teacher")
  }

  return (
    <div className="container">
      <h1 className="h1">UCC</h1>
      <h2 className="h2"><b>unique coaching center</b></h2>
      <div className="card">
        <button  className="teacher"onClick={teacher}>for teacher use </button>
      <button className="student" onClick={student}>for student use</button>

      </div>
    </div>
  );
}

export default Home;
