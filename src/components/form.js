import React, {use, useState} from "react";


export default function LogInForm({closeForm}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    
    const handleSubmit = ()=> {
        const caseCheck = new RegExp("[A-Z]");

        if (!password && !repassword && !username) {
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
        if (password !== repassword) {
            alert ("Please the enter correct password!");
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
                    <input type="password" placeholder="Re-password" value={repassword} onChange={(event)=>setRepassword(event.target.value)}></input><br></br><br></br>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="button" onClick={closeForm}>Cancel</button>
                </form>
            </div>
        </div>
    );
}