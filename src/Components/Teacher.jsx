import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Teacher(){


    return(
        <div className="container">
            <h1></h1>

            <div className="card1">
                <input className="name" type="text" placeholder="enter username"/>
                <input className="pass" type="password" placeholder="********"/>
                <input className="vary" type="password" placeholder="Enter verification code"/>
                <button  className="sub" type="submit">submit</button>
                <p className="p1">Don't have an account:<Link to="/tsignup">signup</Link></p>



            </div>


        </div>
    );
}
export default Teacher;