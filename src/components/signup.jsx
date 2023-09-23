import React from "react";
import './signup.css';

function Signup(){
    return(
        <div class="cont">
        <div class="card">
            <a class="singup">Sign Up</a>
             <div class="inputBox1">
                <input type="text" required="required" />
                <span class="user">Email</span> 
             </div>

            <div class="inputBox">
                <input type="text" required="required" />
                <span>Username</span> 
            </div>

            <div class="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
            </div>

            <button class="enter">Enter</button>

        </div>
    </div>
    );
}
export default Signup;
