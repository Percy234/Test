import React from "react";
import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
    const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.1991288208391!2d105.77892893781716!3d10.033643724782094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881f9a732075%3A0xfa43fbeb2b00ca73!2sCUSC%20-%20Cantho%20University%20Software%20Center!5e0!3m2!1svi!2s!4v1739939858544!5m2!1svi!2s";
    return (
        <div className = "container-contact">
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
                    <button type="submit" className="submit2-toggle">Submit</button>
                </form>
            </div>
            <div className="container-map">
            <div className="contact">
                <p><i class="bi bi-geo-alt-fill">Address: 01 Lý Tự Trọng, Quận Ninh Kiều, TP. Cần Thơ</i></p>
                <p><i class="bi bi-telephone-fill">Fax:  +84 292 373 1071</i></p>
                <p><i class="bi bi-envelope-at-fill">Mail: cusc@ctu.edu.vn</i></p>
            </div>
            <div className="map">
            <iframe src={mapLocation} width="100%" height="300%" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>    
           </div>
           </div>
        </div>
    )
}