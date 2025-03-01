import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import productsData from "../data/product_data";
import Star from "../components/Star";
import '../css/products.css';

export default function Products() {
    const [ratings, setRatings] = useState({});
    function getRating(e, productId) {
        const currentNode = e.target;
        const currentStar = parseInt(currentNode.getAttribute("data-index"));
        setRatings(prevRatings => ({
            ...prevRatings,
            [productId]: currentStar
        }));
        
    }

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
                                    <p className="productDescrition">{product.description}</p>
                                    <p>Price: 
                                        <span className={product.sale ? "price sale" : "price"}>{product.price}$</span> 
                                        {product.sale && <span id="sale">{product.sale}$</span>}
                                    </p>
                                </Link>
                                    <p>
                                        <Star click={(e) => getRating(e, product.id)} currentStar={ratings[product.id] || 0} star={5 - (ratings[product.id] || 0)} />
                                    </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}