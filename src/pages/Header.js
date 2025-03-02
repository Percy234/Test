import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogInForm from "../components/form";
import Menubar from "../components/menu";
import CartBtn from "../components/CartBtn";
import '../css/header.css';

export default function Header() {
    const [showLogInForm, setShowLogInForm] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    return (
        <div>
            <header>
                {showMenu && <Menubar 
                    closeMenu={() => setShowMenu(false)}
                />}

                <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}><i className="bi bi-list"></i></button> { /* thanh menu */ }
                <h1 className="logo">
                    <Link to="/home">
                        <img src="/img/Container/img-logo.jpg" alt="Logo"/>
                    </Link>
                    Zara Therapy Clinic
                </h1>
                {/* list nav */}
                <ul className="listnav">
                    <li><Link to="/home" className={location.pathname === "/home" ? "active" : ""} onClick={() => setShowMenu(false)}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setShowMenu(false)}>About Us</Link></li>
                    <li><Link to="/therapists" className={location.pathname === "/therapists" ? "active" : ""} onClick={() => setShowMenu(false)}>Therapists</Link></li>
                    <li><Link to="/products" className={location.pathname === "/products" ? "active" : ""} onClick={() => setShowMenu(false)}>Products</Link></li>
                    <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setShowMenu(false)}>Services</Link></li>
                    <li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""} onClick={() => setShowMenu(false)}>Gallery</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setShowMenu(false)}>Contact Us</Link></li>
                </ul>

                {/* <Menubar/> */}
                <div className="btn-group">
                    <button type="button" className="btnLogIn" onClick={() => setShowLogInForm(true)}>Log In</button>
                    {
                        showLogInForm && <LogInForm closeForm={() => setShowLogInForm(false)} />
                    }
                    <CartBtn link="/cart"/>
                </div>
            </header>
        </div>
    )
};