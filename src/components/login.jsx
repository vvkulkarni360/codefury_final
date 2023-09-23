import React from "react";
import './login.css';

function Login(){
    return(
        <div class="container">
        <div class="card">
            <a class="login">Log in</a>
            <div class="inputBox">
                <input type="text" required="required" />
                <span class="user">Username</span>
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

export default Login;