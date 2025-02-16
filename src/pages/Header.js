import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../css/header.css';
import LogInForm from "../components/form";
import Menubar from "../components/menu";


export default function Header() {
    const [showLogInForm, setShowLogInForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <header>
                {showMenu && <Menubar closeMenu={() => setShowMenu(false)} />}
                <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}><i class="bi bi-list"></i></button> { /* thanh menu */}
                <h1 className="logo">Zara Therapy Clinic</h1>
                <ul className="listnav">
                    <li><Link to="/home" onClick={() => setShowMenu(false)}>Home</Link></li>
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