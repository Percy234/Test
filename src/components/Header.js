import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../css/header.css';
import LogInForm from "./form";
import Menubar from "./menu";

export default function Header() {
    const [showLogInForm, setShowLogInForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <header>
                {showMenu && <Menubar closeMenu={() => setShowMenu(false)} />}
                <h1 className="logo">Zara Therapy Clinic</h1>
                <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>Menu</button>
                <ul className="listnav">
                    <li><Link to="/" onClick={() => setShowMenu(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setShowMenu(false)}>About Us</Link></li>
                    <li><Link to="/products" onClick={() => setShowMenu(false)}>Products</Link></li>
                    <li><Link to="/services" onClick={() => setShowMenu(false)}>Services</Link></li>
                    <li><Link to="/contact" onClick={() => setShowMenu(false)}>Contact Us</Link></li>
                </ul>
                <button type="button" className="btnLogIn" onClick={() => setShowLogInForm(true)}>Log In</button>
                {
                    showLogInForm && <LogInForm closeForm={() => setShowLogInForm(false)} />
                }
            </header>
        </div>
    )
};