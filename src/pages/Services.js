import React from 'react';
import '../css/services.css';

export default function Services() {
    return (
        <div className="services">
            <h1> Our Services</h1>
            <div className="chiropractic">
                <h2>Chiropractic</h2>
                <p>Description for Service 1</p>
            </div>
            <div className="acupuncture">
                <h2>Acupuncture</h2>
                <p>Description for Service 2</p>
            </div>
            <div className="massage">
                <h2>Massage</h2>
                <p>Description for Service 3</p>
            </div>
        </div>
    );
}