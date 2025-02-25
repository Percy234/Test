import React from "react";
import { Link } from "react-router-dom";
import '../css/products.css';
import Slide from "../components/Slide";

//nạp dữ liệu product
import productsData from "../data/product_data";


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
                                    <p>Price: {product.price}$</p>
                                    <p>
                                        <div>
                                            {Array.from({ length: product.rating }, (_, index) => (
                                                <i key={index} className="bi bi-star-fill"></i> 
                                            ))}
                                        </div>
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}