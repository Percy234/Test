import React from 'react';
import '../css/gallery.css';

const images = [
    { src: '/img/gallery/gallery1.png', alt: 'Gallery 1', name: 'Clinic Room 1' },
    { src: '/img/gallery/gallery2.png', alt: 'Gallery 2', name: 'Clinic Room 2' },
    { src: '/img/gallery/gallery3.png', alt: 'Gallery 3', name: 'Clinic Room 3' },
    { src: '/img/gallery/gallery4.png', alt: 'Gallery 4', name: 'Clinic Room 4' },
];

export default function Gallery() {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={image.alt} className="gallery-img" />
                        <div className="overlay">
                            <div className="text">{image.name}</div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='gallery-description'>
                Zara Therapy Clinic is a specialized area in medical facilities, equipped with equipment and treatment methods to support patients in rehabilitation after trauma, surgery or diseases affecting the motor system. 
                Here, patients will be guided by physical therapists to perform exercises, using support equipment such as spinal traction machines, therapeutic ultrasound, electrotherapy or thermotherapy to relieve pain, improve muscle strength and increase mobility. 
                The physical therapy room plays an important role in the recovery process, helping patients regain normal activities and improve their quality of life.
            </p>
        </div>
    );
}