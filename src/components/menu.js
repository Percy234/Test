import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default function Menubar({ closeMenu }) {
    return (
        <div>
            <nav className="menu listnav">
                <Link to="/home" onClick={closeMenu}>Home</Link>
                <Link to="/about" onClick={closeMenu}>About Us</Link>
                <Link to="/therapists" onClick={closeMenu}>Therapists</Link> {/* Thêm liên kết đến trang Therapists */}
                <Link to="/products" onClick={closeMenu}>Products</Link>
                <Link to="/services" onClick={closeMenu}>Services</Link>
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link> {/* Thêm liên kết đến trang Gallery */}
            </nav>
        </div>
    )
}