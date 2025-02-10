import React from "react";
import { useState } from "react";
import '../css/header.css';
import LogInForm from "./Form";

export default function Header() {
    const [showLogInForm, setShowLogInForm] = useState(false);
    return (
        <div>
            <header>
                <h1 className="logo">Zara Therapy Clinic</h1>
                <ul className="listnav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a>
                        <ul className="productbars">
                            <li><a href="#">Product1</a></li>
                            <li><a href="#">Product1</a></li>
                            <li><a href="#">Product1</a></li>
                            <li><a href="#">Product1</a></li>
                            <li><a href="#">Product1</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Services</a>
                        <ul className="servicebars">
                            <li><a href="#">Service1</a></li>
                            <li><a href="#">Service1</a></li>
                            <li><a href="#">Service1</a></li>
                            <li><a href="#">Service1</a></li>
                            <li><a href="#">Service1</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <button type="button" className="btnLogIn" onClick={()=>setShowLogInForm(true)}>Log In</button>
                {
                    showLogInForm && <LogInForm closeForm={()=> setShowLogInForm(false)}/>
                }
            </header>
        </div>
    )
};