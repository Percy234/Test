import React from "react";
import '../css/slide.css';

const Slide = ({label, url}) => {
    return (
        <div id="slide-container">
             <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/img/Slide/slide1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="/img/Slide/slide2.webp" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="/img/Slide/slide3.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                </div>
        </div>
    );
};
export default Slide;