import React, {useState} from "react";
import "../css/header.css";

export default function Menubar({closeMenu}) {
    return (
        <div>
        <nav className="menu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
        </nav>
        </div>
    )
}