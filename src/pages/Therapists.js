import React from "react";
import '../css/therapists.css';

const therapistsData = [
    {
        name: "Dr. John Doe",
        specialty: "Chiropractic",
        description: "Dr. John Doe is a licensed chiropractor with over 10 years of experience in treating musculoskeletal disorders.",
        img: "/img/therapists/john_doe.jpg"
    },
    {
        name: "Dr. Jane Smith",
        specialty: "Acupuncture",
        description: "Dr. Jane Smith is an expert in acupuncture with a focus on pain management and holistic health.",
        img: "/img/therapists/jane_smith.jpg"
    },
    {
        name: "Dr. Emily Johnson",
        specialty: "Massage Therapy",
        description: "Dr. Emily Johnson specializes in massage therapy, helping clients relieve stress and improve overall well-being.",
        img: "/img/therapists/emily_johnson.jpg"
    }
];

export default function Therapists() {
    return (
        <div className="therapists-container">
            <h1>Our Therapists</h1>
            <div className="therapists-grid">
                {therapistsData.map((therapist, index) => (
                    <div key={index} className="therapist-item">
                        <img src={therapist.img} alt={therapist.name} className="therapist-img" />
                        <h3>{therapist.name}</h3>
                        <h4>{therapist.specialty}</h4>
                        <p>{therapist.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}