import React, { useState } from "react";
import "../css/header.css";

export default function RegisterForm({ toggleForm, closeForm }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password || !email || !confirmPassword) {
            alert("Please fill in all fields!");
            return;
        }
        if (password.length < 6 || password.length > 12) {
            alert("Password must be between 6 and 12 characters");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = { username, password, email };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");
        closeForm();
    };

    return (
        <div className="overlay-login">
            <div className="LogInForm">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Enter the Username" value={username} onChange={(event) => setUsername(event.target.value)} /><br />
                    <input type="email" placeholder="Enter the Email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
                    <input type="password" placeholder="Enter the Password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
                    <input type="password" placeholder="Confirm the Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} /><br />
                    <button type="submit" className="submit-toggle" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="cancel-toggle" onClick={closeForm}>Cancel</button>
                    <p>Already have an account?<a><span onClick={toggleForm} className="link">Log In</span></a></p>
                </form>
            </div>
        </div>
    );
}