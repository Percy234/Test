import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogInForm from "../components/form";
import Menubar from "../components/menu";
import CartBtn from "../components/CartBtn";
import '../css/header.css';


export default function Header() {
    const [showLogInForm, setShowLogInForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <header>
                {showMenu && <Menubar 
                    closeMenu={() => setShowMenu(false)}
                />}

                <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}><i className="bi bi-list"></i></button> { /* thanh menu */}
                <h1 className="logo">
                    <img src="/img/Container/img-logo.jpg" alt="Logo"/>
                    Zara Therapy Clinic
                </h1>
                {/* list nav */}
                <ul className="listnav">
                    <li><Link to="/home" onClick={() => setShowMenu(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setShowMenu(false)}>About Us</Link></li>
                    <li><Link to="/therapists" onClick={() => setShowMenu(false)}>Therapists</Link></li>
                    <li><Link to="/products" onClick={() => setShowMenu(false)}>Products</Link></li>
                    <li><Link to="/services" onClick={() => setShowMenu(false)}>Services</Link></li>
                    <li><Link to="/gallery" onClick={() => setShowMenu(false)}>Gallery</Link></li>
                    <li><Link to="/contact" onClick={() => setShowMenu(false)}>Contact Us</Link></li>
                </ul>

                {/* <Menubar/> */}
                <div className="btn-group">
                    <button type="button" className="btnLogIn" onClick={() => setShowLogInForm(true)}>Log In</button>
                    {
                        showLogInForm && <LogInForm closeForm={() => setShowLogInForm(false)} />
                    }
                    <CartBtn link="/cart" />
                </div>
            </header>
        </div>
    )
};