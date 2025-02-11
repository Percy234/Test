import React from "react";
import { useState } from "react";
import '../css/header.css';
import LogInForm from "./Form";
import Menubar from "./menu";

export default function Header() {
    const [showLogInForm, setShowLogInForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <header>
                {showMenu && <Menubar closeMenu={()=> setShowMenu(false)}/>}
                <h1 className="logo">Zara Therapy Clinic</h1>
                <button className="menu-toggle" onClick={()=> setShowMenu(!showMenu)}>Menu</button>
                <ul className="listnav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
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