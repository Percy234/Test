import React from "react";
import '../css/products.css';

const productsData = {
    Essential: [
        { id: 1, name: "Essential Oil 1", description: "Description for Essential Oil 1" },
        { id: 2, name: "Essential Oil 2", description: "Description for Essential Oil 2" },
        { id: 3, name: "Essential Oil 3", description: "Description for Essential Oil 3" },
        { id: 4, name: "Essential Oil 4", description: "Description for Essential Oil 4" },
    ],
    Lotion: [
        { id: 1, name: "Lotion 1", description: "Description for Lotion 1" },
        { id: 2, name: "Lotion 2", description: "Description for Lotion 2" },
        { id: 3, name: "Lotion 3", description: "Description for Lotion 3" },
        { id: 4, name: "Lotion 4", description: "Description for Lotion 4" },
    ],
    HelpingMachine: [
        { id: 1, name: "Helping Machine 1", description: "Description for Helping Machine 1" },
        { id: 2, name: "Helping Machine 2", description: "Description for Helping Machine 2" },
        { id: 3, name: "Helping Machine 3", description: "Description for Helping Machine 3" },
        { id: 4, name: "Helping Machine 4", description: "Description for Helping Machine 4" },
    ],
};

export default function Products() {
    return (
        <div className="products">
            {Object.keys(productsData).map(category => (
                <div key={category} className="category">
                    <h2>{category}</h2>
                    <ul>
                        {productsData[category].map(product => (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}