import React from 'react';
import { Link } from 'react-router-dom';
import '../css/therapists.css';
import therapistsData from '../components/TherapistsData'; // Import dữ liệu từ tệp JS

export default function Therapists() {
    return (
        <div className="therapists-container">
            <h1>Our Therapists</h1>
            <div className="therapists-grid">
                {therapistsData.map((therapist, index) => (
                    <Link to={`/therapists/${therapist.id}`} key={index} className="therapist-item">
                        <img src={therapist.img} alt={therapist.name} className="therapist-img" />
                        <h3>{therapist.name}</h3>
                        <h4>{therapist.specialty}</h4>
                    </Link>
                ))}
            </div>
        </div>
    );
}