import React from "react";
import '../css/slide.css';

const Slide = ({label, url}) => {
    return (
        <div id="slide-container">
             <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src="/img/Slide/slide1.jpg" class="d-block w-100" alt="Slide"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src="/img/Slide/slide2.webp" class="d-block w-100" alt="Slide"/>
                    </div>
                    <div class="carousel-item">
                    <img src="/img/Slide/slide3.jpg" class="d-block w-100" alt="Slide"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
};
export default Slide;