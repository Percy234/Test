import React from "react";
import '../css/Home.css';

export default function Home() {
    const products = [
        {
            id: 1,
            name: "Essential Oil",
            description: "Description for Essential Oil 1",
            image: "/img/essential oil/1.png",
        },
        {
            id: 2,
            name: "Lotion",
            description: "Description for Lotion 1",
            image: "/img/essential oil/2.png",
        },
        {
            id: 3,
            name: "Helping Machine",
            description: "Description for Helping Machine 1",
            image: "/img/essential oil/3.png",
        },
        
    ];
    return (
        <div className="home">
            <div className="home-img">
                <div className="home-introduce">
                <h2>Specialized Clinic</h2> <br></br>
                <ul> 
                    <li>Chấn thương chỉnh hình</li>
                    <li>Khám cột sống</li>
                    <li>Phục hồi chức năng</li>
                    <li>Khám nội tổng quát</li>
                    <li>Khám tiểu đường</li>
                </ul>
                </div>
                </div>
            <div className="home-content">
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
            </div>
        </div>
    )

}