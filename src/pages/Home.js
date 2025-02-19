import React from "react";
import '../css/Home.css';

export default function Home() {
    const products = [
        {
            id: 1,
            name: "Essential Oil",
            description: "Description for Essential Oil 2",
            image: "/img/essential oil/2.png",
        },
        {
            id: 2,
            name: "Lotion",
            description: "Description for Lotion 1",
            image: "/img/lotions/1.png",
        },
        {
            id: 3,
            name: "Helping Machine",
            description: "Description for Helping Machine 2",
            image: "/img/helping machines/2.png",
        },
        
    ];
    const services = [
        {
            id: 1,
            name: "Physiotherapy & Rehabilitation",
            description: "Treatment for joint pain, spinal degeneration, herniated discs, sciatica, and more.",
        },
        {
            id: 2,
            name: "Spinal Care",
            description: "Stretching and spinal adjustment therapies to alleviate pain and enhance flexibility.",
        },
        {
            id: 3,
            name: "Post-Injury & Post-Surgery Therapy",
            description: "Recovery support after accidents, joint replacement surgeries, and sports injuries",
        }
    ];
    return (
        <div className="home">
            <div className="home-img"></div>
            <div className="home-content">
                <section className="Contents">
                    <h1>PHYSIOTHERAPY CLINIC – COMPREHENSIVE HEALTHCARE</h1> <hr></hr>
                    <p><h3>About Our Clinic</h3>At <b>Zara Therapy Clinic</b>, we specialize in physiotherapy and rehabilitation services to help patients improve joint health, relieve pain, and restore mobility. With a team of experienced specialists and state-of-the-art equipment, we are committed to providing safe, effective, and personalized treatment solutions.</p>
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
                    <div className="product-list">
                        {products.map((product)=>(
                            <div key={product.id} className="product">
                                <img src={product.image} alt={product.name}/>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
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
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                            ))}
                      </div>
                </section>
            </div>
        </div>
    )

}