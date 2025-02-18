import React from "react";
import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
    return (
        <div className = "container-contact">
            <h1>Contact Us</h1>
            <div className="contact">
            </div>
            
            <div className="feedback">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.."></input>
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    <button type="submit" className="submit-toggle">Submit</button>
                </form>
            </div>
        </div>
    )
}