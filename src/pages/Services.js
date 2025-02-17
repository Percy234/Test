import React from 'react';
import '../css/services.css';

const servicesData = [
    { id: 1, name: 'Service 1', description: 'Description for Service 1', img: '/img/services/1.png' },
    { id: 2, name: 'Service 2', description: 'Description for Service 2', img: '/img/services/2.png' },
    { id: 3, name: 'Service 3', description: 'Description for Service 3', img: '/img/services/3.png' },
    { id: 4, name: 'Service 4', description: 'Description for Service 4', img: '/img/services/4.png' },
];

export default function Services() {
    return (
        <div className="services-page">
            <h2>Our Services</h2>
            <div className="services-list">
                {servicesData.map(service => (
                    <div key={service.id} className="service-item">
                        <img src={service.img} alt={service.name} />
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}