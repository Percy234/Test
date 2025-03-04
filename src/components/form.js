import React, { useState } from "react";
import "../css/header.css";
import RegisterForm from "./registerform";

export default function LogInForm({ closeForm }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registering, setRegistering] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password) {
            alert("Please fill in all fields!");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No registered user found. Please register first.");
            return;
        }

        if (username !== storedUser.username || password !== storedUser.password) {
            alert("Invalid username or password");
            return;
        }

        alert("Log In Successful!");
        closeForm();
    };

    const toggleForm = () => {
        setRegistering(!registering);
    };

    return registering ? (
        <RegisterForm toggleForm={toggleForm} closeForm={closeForm} />
    ) : (
        <div className="overlay-login">
            <div className="LogInForm">
                <h2>Log In</h2>
                <form>
                    <input type="text" placeholder="Enter the Username" value={username} onChange={(event) => setUsername(event.target.value)} /><br />
                    <input type="password" placeholder="Enter the Password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
                    <button type="submit" className="submit-toggle" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="cancel-toggle" onClick={closeForm}>Cancel</button>
                    <p>You do not have an account?<a><span onClick={() => setRegistering(true)} className="link">Register</span></a></p>
                </form>
            </div>
        </div>
    );
}