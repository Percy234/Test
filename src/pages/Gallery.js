import React from 'react';
import '../css/gallery.css';

const images = [
    { src: '/img/gallery/image1.jpg', alt: 'Image 1' },
    { src: '/img/gallery/image2.jpg', alt: 'Image 2' },
    { src: '/img/gallery/image3.jpg', alt: 'Image 3' },
    { src: '/img/gallery/image4.jpg', alt: 'Image 4' },
    { src: '/img/gallery/image5.jpg', alt: 'Image 5' },
    { src: '/img/gallery/image6.jpg', alt: 'Image 6' },
];

export default function Gallery() {
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={image.alt} className="gallery-img" />
                    </div>
                ))}
            </div>
        </div>
    );
}