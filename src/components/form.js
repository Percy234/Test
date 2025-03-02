import React, {use, useState} from "react";
import "../css/header.css";

export default function LogInForm({toggleForm, closeForm}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = ()=> {
        const caseCheck = new RegExp("[A-Z]");

        if (!password && !username) {
            alert("Please login!")
            return;
        }
        if (!caseCheck.test(username)) {
            alert("Username must contain at least one uppercase letter");
            return;
        }
        if (password.length < 6 || password.length > 12) {
            alert("Password must be between 6 and 12 characters");
            return;
        }
        else {
            alert("Log In Successful!");
            closeForm();
        }
    };
    return(
        <div className="overlay">
            <div className="LogInForm">
                <h2>Log In</h2>
                <form>
                    <input type="text" placeholder="Enter the Username" value={username} onChange={(event)=>setUsername(event.target.value)}></input><br></br>
                    <input type="password" placeholder="Enter the Password" value={password} onChange={(event)=>setPassword(event.target.value)}></input><br></br>
                    <button type="submit" className="submit-toggle" onClick={handleSubmit}>Submit</button>
                    <button type="button"  className="cancel-toggle" onClick={closeForm}>Cancel</button>
                    <p>You do not have account?<a><span onClick={toggleForm} className="link">Register</span></a></p>
                    
                </form>
            </div>
        </div>
    );
}