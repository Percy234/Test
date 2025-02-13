import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function Menubar({ closeMenu }) {
    return (
        <div>
            <nav className="menu">
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/about" onClick={closeMenu}>About Us</Link>
                <Link to="/products" onClick={closeMenu}>Products</Link>
                <Link to="/services" onClick={closeMenu}>Services</Link>
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </nav>
        </div>
    )
}