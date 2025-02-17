import React from "react";
import { Link } from "react-router-dom";
import '../css/products.css';
import Slide from "../components/Slide";

const productsData = {
    "Essential Oil": [
        { id: 1, img:"/img/essential oil/1.png", name: "Essential Oil 1", description: "Description for Essential Oil 1" },
        { id: 2, img:"/img/essential oil/2.png", name: "Essential Oil 2", description: "Description for Essential Oil 2" },
        { id: 3, img:"/img/essential oil/3.png", name: "Essential Oil 3", description: "Description for Essential Oil 3" },
        { id: 4, img:"/img/essential oil/4.png", name: "Essential Oil 4", description: "Description for Essential Oil 4" },
    ],
    Lotion: [
        { id: 5, img:"/img/lotions/1.png", name: "Lotion 1", description: "Description for Lotion 1" },
        { id: 6, img:"/img/lotions/2.png", name: "Lotion 2", description: "Description for Lotion 2" },
        { id: 7, img:"/img/lotions/3.png", name: "Lotion 3", description: "Description for Lotion 3" },
        { id: 8, img:"/img/lotions/4.png", name: "Lotion 4", description: "Description for Lotion 4" },
    ],
    "Helping Machine": [
        { id: 9, img:"/img/helping machines/1.png", name: "Helping Machine 1", description: "Description for Helping Machine 1" },
        { id: 10, img:"/img/helping machines/2.png", name: "Helping Machine 2", description: "Description for Helping Machine 2" },
        { id: 11, img:"/img/helping machines/3.png", name: "Helping Machine 3", description: "Description for Helping Machine 3" },
        { id: 12, img:"/img/helping machines/4.png", name: "Helping Machine 4", description: "Description for Helping Machine 4" },
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