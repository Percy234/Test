import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/productDetail.css';

const productData = {
    1: { name: 'Essential Oil 1', description: 'Description for Essential Oil 1', img: '/img/essential oil/1.png' },
    2: { name: 'Essential Oil 2', description: 'Description for Essential Oil 2', img: '/img/essential oil/2.png' },
    3: { name: 'Essential Oil 3', description: 'Description for Essential Oil 3', img: '/img/essential oil/3.png' },
    4: { name: 'Essential Oil 4', description: 'Description for Essential Oil 4', img: '/img/essential oil/4.png' },
    5: { name: 'Lotion 1', description: 'Description for Lotion 1', img: '/img/lotions/1.png' },
    6: { name: 'Lotion 2', description: 'Description for Lotion 2', img: '/img/lotions/2.png' },
    7: { name: 'Lotion 3', description: 'Description for Lotion 3', img: '/img/lotions/3.png' },
    8: { name: 'Lotion 4', description: 'Description for Lotion 4', img: '/img/lotions/4.png' },
    9: { name: 'Helping Machine 1', description: 'Description for Helping Machine 1', img: '/img/helping machines/1.png' },
    10: { name: 'Helping Machine 2', description: 'Description for Helping Machine 2', img: '/img/helping machines/2.png' },
    11: { name: 'Helping Machine 3', description: 'Description for Helping Machine 3', img: '/img/helping machines/3.png' },
    12: { name: 'Helping Machine 4', description: 'Description for Helping Machine 4', img: '/img/helping machines/4.png' },
};

export default function ProductDetail() {
    const { productId } = useParams();
    const product = productData[productId];

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-detail">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
}
