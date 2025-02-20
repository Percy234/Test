import React from "react";
import { Link } from "react-router-dom";
import '../css/products.css';
import Slide from "../components/Slide";

const productsData = {
    "Essential Oil": [
        { id: 1, img:"/img/essential oil/1.png", name: "Lavender", description: "Description for Essential Oil 1" },
        { id: 2, img:"/img/essential oil/2.png", name: "Pomelo", description: "Description for Essential Oil 2" },
        { id: 3, img:"/img/essential oil/3.png", name: "Puroleo", description: "Description for Essential Oil 3" },
        { id: 4, img:"/img/essential oil/4.png", name: "Longevity", description: "Description for Essential Oil 4" },
    ],
    Lotion: [
        { id: 5, img:"/img/lotions/1.png", name: "Bee Natural", description: "Description for Lotion 1" },
        { id: 6, img:"/img/lotions/2.png", name: "Exxtra Care & Repair", description: "Description for Lotion 2" },
        { id: 7, img:"/img/lotions/3.png", name: "Vanilla Dream Serum Body Lotion", description: "Description for Lotion 3" },
        { id: 8, img:"/img/lotions/4.png", name: "Strawberry Dream", description: "Description for Lotion 4" },
    ],
    "Helping Machine": [
        { id: 9, img:"/img/helping machines/1.png", name: "Handheld Massager", description: "Description for Helping Machine 1" },
        { id: 10, img:"/img/helping machines/2.png", name: "Neck Massager", description: "Description for Helping Machine 2" },
        { id: 11, img:"/img/helping machines/3.png", name: "Eye Massager", description: "Description for Helping Machine 3" },
        { id: 12, img:"/img/helping machines/4.png", name: "Electric Foot Massagers", description: "Description for Helping Machine 4" },
    ],
};

export default function Products() {
    return (
        <div className="products">
            <Slide />
            {Object.keys(productsData).map(category => (
                <div key={category} className="category">
                    <h2>{category}</h2>
                    <ul>
                        {productsData[category].map(product => (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.img} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}