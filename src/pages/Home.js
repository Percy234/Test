import React from "react";
import '../css/Home.css';
import { Link } from "react-router-dom";

export default function Home() {
    const products = [
        {
            id: 2,
            name: "Pomelo",
            description: "Fresh, pleasant fragrance and has many useful uses in beauty",
            image: "/img/essential oil/2.png",
        },
        {
            id: 5,
            name: "Bee Natural",
            description: "Skin cream with main ingredients from beeswax and natural extracts.",
            image: "/img/lotions/1.png",
        },
        {
            id: 10,
            name: "Neck Massager",
            description: "Allow yourself to relax and unwind after a long day of work with this Neck Massager.",
            image: "/img/helping machines/2.png",
        },
        {
            id: 7,
            name: "Vanilla Dream Serum Body",
            description: "Feel free on an exciting journey in the scent of sweet vanilla.",
            image: "/img/lotions/3.png",
        }
        
    ];
    const services = [
        {
            id: 1,
            name: "Massage Therapy",
            image: "/img/massage/massage.png",
            description: "Massage therapy is a treatment that uses kneading, pressure points, and body manipulation techniques to help relax muscles, reduce stress, and improve blood circulation.",
        },
        {
            id: 2,
            name: "Hair Care",
            image: "/img/beauty_aids/hair.png",
            description: "Hair care is an important part of maintaining healthy, smooth hair and minimizing damage. An effective hair care routine usually includes steps such as cleaning, moisturizing, protecting and nourishing hair from the inside.",
        },
    ];
    return (
        <div className="home">
            
            <div className="home-content">
                <section className="Contents">
                    <h1>PHYSIOTHERAPY CLINIC – COMPREHENSIVE HEALTHCARE</h1> <hr></hr>
                    <p><h3>About Our Clinic</h3>At <b>Zara Therapy Clinic</b>, we specialize in physiotherapy and rehabilitation services to help patients improve joint health, relieve pain, and restore mobility. With a team of experienced specialists and state-of-the-art equipment, we are committed to providing safe, effective, and personalized treatment solutions.</p>
                    <div className="home-img"></div>
                    <hr></hr>
                    <p><h3>Our Key Services</h3>
                    <p>🔹 Physiotherapy & Rehabilitation: Treatment for joint pain, spinal degeneration, herniated discs, sciatica, and more.</p>
                    <p>🔹 Spinal Care: Stretching and spinal adjustment therapies to alleviate pain and enhance flexibility.</p>
                    <p>🔹 Post-Injury & Post-Surgery Therapy: Recovery support after accidents, joint replacement surgeries, and sports injuries.</p>
                    <p>🔹 Therapeutic Massage: Muscle relaxation, stress relief, and improved blood circulation.</p>
                    <p>🔹 Exercise & Rehabilitation Guidance: Personalized exercise programs to maintain health and prevent relapse.</p>
                    </p>
                    <hr></hr>
                    <h3>Healthcare Products</h3>
                    <p><b><a>Dietary supplements</a></b> for bone and joint health, better sleep, and digestive support.</p>
                    <p><b><a>Pain relief balms & patches</a></b> for quick pain relief and muscle relaxation.</p>
                    <p><b><a> Rehabilitation & exercise equipment</a></b>  such as lumbar supports, orthopedic braces, massage pillows, and physiotherapy machines.</p>
                </section>
                <section className="Products">
                    <h2>Products</h2>
                    <p>Our products are made from natural ingredients and are safe for your health</p>
                    <div className="product-list" >
                        {products.map((product)=>(
                            <div key={product.id} className="product">
                                <Link className="link" to={`/products/${product.id}`}>
                                    <img src={product.image} alt={product.name}/>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </Link>
                            </div>
                            ))}
                    </div>
                </section>
                <section className="Services">
                    <h2>Services</h2>
                    <p>Our clinic offers a wide range of services to help you recover from injuries, manage chronic conditions, and improve your overall health and well-being.</p>
                      <div className="service-list">
                        {services.map((service)=>(
                            <div key={service.id} className="service">
                                <Link className="link" to={`/services`}>
                                    <img src={service.image} alt={service.name}/>
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                </Link>
                            </div>
                            ))}
                      </div>
                </section>
            </div>
        </div>
    )

}