import React from "react";
import '../css/about.css';

const AboutUs = () =>{
   return(
    <div className='about'>
        <div className='about-row'>
            <div className='about__colum-2-4'>
                <h3 className="about-2-5">High Quality</h3>
                <a>We take a goal-oriented approach to healing. Whatever your goals might be we want to help you achieve them</a>
            </div>
            <div className='about__colum-2-4'>
                <h3 className="about-2-5">Patient Care</h3>
                <a>We’ll provide hands-on treatment in the office and education you can take home with you, enabling you to become an active participant in your recovery and future physical health.</a>
            </div>
            <div className='about__colum-2-4'>
                <h3 className="about-2-5">Professional Service</h3>
                <a>Our five physical therapists have a combined 120 years of clinical experience and a shared passion for helping our community stay active.</a>
            </div>
            <div className='about__colum-2-4'>
                <h3 className="about-2-5">Free Consultation</h3>
                <a>Our practitioners are very happy to give you a free consultation and guide you to the best service that can suit your medical needs. Just give us a call and book for a consultation.</a>
            </div>
        </div>
    </div>
   ) 
}
export default AboutUs;