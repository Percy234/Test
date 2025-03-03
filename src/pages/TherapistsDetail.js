import React from 'react';
import { useParams } from 'react-router-dom';
import therapistsData from '../components/TherapistsData'; // Import dữ liệu từ tệp JS
import { useNavigate } from 'react-router-dom';

export default function TherapistsDetail() {
    const { therapistId } = useParams();
    const therapist = therapistsData.find(t => t.id === parseInt(therapistId));
    const navigate = useNavigate(); // Khai báo useNavigate để điều hướng


    if (!therapist) {
        return <div>Therapist not found</div>;
    }

    return (
        <>
            
            <div className="therapist-details-container" style={{ position: "relative" }}>
                {/* Nút Thoát */}
                <button className="close-button" onClick={() => navigate('/therapists')}>X</button>
                <div className="therapist-image">
                    <img src={therapist.img} alt={therapist.name} className="therapist-img" />
                </div>

                <div>
                    <h1>{therapist.name}</h1>
                    <h3>{therapist.specialty}</h3>
                    <p>{therapist.description}</p>
                    <p><strong>Contact:</strong></p>
                    <p>Email: <a className="email-link" href={`mailto:${therapist.contact.email}`}>{therapist.contact.email}</a></p>
                </div>




            </div>
        </>
    );
}