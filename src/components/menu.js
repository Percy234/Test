import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function Menubar({ closeMenu }) {
    return (
        <div>
            <nav className="menu listnav">
                <Link to="/home" onClick={closeMenu}>Home</Link>
                <Link to="/about" onClick={closeMenu}>About Us</Link>
                <Link to="/therapists" onClick={closeMenu}>Therapists</Link>
                <Link to="/products" onClick={closeMenu}>Products</Link>
                <Link to="/services" onClick={closeMenu}>Services</Link>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                <Link to="/feedback" onClick={closeMenu}>Feedback</Link>
            </nav>
        </div>
    )
}