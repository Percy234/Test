import React from 'react';
import { useParams } from 'react-router-dom';
import therapistsData from '../components/TherapistsData'; // Import dữ liệu từ tệp JS

export default function TherapistsDetail() {
    const { therapistId } = useParams();
    const therapist = therapistsData.find(t => t.id === parseInt(therapistId));

    if (!therapist) {
        return <div>Therapist not found</div>;
    }

    return (
        <div className="therapist-details-container">
            <h1>{therapist.name}</h1>
            <img src={therapist.img} alt={therapist.name} className="therapist-img" />
            <h3>{therapist.specialty}</h3>
            <p>{therapist.description}</p>
            <p><strong>Contact:</strong></p>
            <p>Email: <a href={`mailto:${therapist.contact.email}`}>{therapist.contact.email}</a></p>
        </div>
    );
}