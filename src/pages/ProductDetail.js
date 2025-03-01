import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import '../css/productDetail.css';

const productData = {
    1: { name: 'Lavender', description: 'A beautiful versatile aroma of lavender and rosemary essential oils induces calm and promotes restful sleep. A perfect antidote to hectic days will help to create a soothing ambience in your home.', img: '/img/essential oil/1.png', price: "Price: 20$", rating: 4 },
    2: { name: 'Pomelo', description: 'In addition to its common use in hair care, pomelo essential oil can also be used to fragrance a room and deodorize areas affected by smoking. Ecolife essential oil is completely derived from pomelo and is safe for your health, providing you with peace of mind when using it.', img: '/img/essential oil/2.png', price: "Price: 10$", rating: 5 },
    3: { name: 'Puroleo', description: 'Fresh and Minty - Our pure peppermint oil perspires a cool refreshing aroma of freshly crushed peppermint leaves. With strong hints of minty sweet notes, our peppermint essential oil relaxes the mind, body and soul from within.', img: '/img/essential oil/3.png',price: "Price: 20$", rating: 5 },
    4: { name: 'Longevity', description: 'Nanogize Ginseng Oil helps to overcome some conditions that cause pain such as arthritis and muscle pain. The oil helps blood circulation, dispelling persistent pain. From there, it brings a more comfortable mood because the oil has a gentle, hot and warm ginseng aroma.', img: '/img/essential oil/4.png',price: "Price: 25$", rating: 5 },
    5: { name: 'Bee Natural', description: 'A rich and nourishing body lotion. Combines Shea Butter with oils of Sunflower and Humectants for 24 hour moisture. Wild honey helps soften and while Yoghurt helps hydrate skin. Deliciously fragranced.', img: '/img/lotions/1.png', price: "Price: 20$", rating: 4 },
    6: { name: 'Exxtra Care & Repair', description: 'An advanced, intensive therapy body lotion that moisturises and relieves dry and itchy skin. Combines anti oxidising Avocado butter and Vitamin E with Pro Elastin known for its replenishing properties. Everything your skin has avo wanted.', img: '/img/lotions/2.png', price: "Price: 15$", rating: 5 },
    7: { name: 'Vanilla Dream Serum Body Lotion', description: 'Vanilla Dream Serum Body Lotion SPF 30 PA+++ provides deep skin moisturization lasting up to 72 hours* while offering broad spectrum sun protection. This unique serum-in-lotion formula is lightweight, non-sticky, and features Niacinamide that brightens and evens skin tone, repairs the skin barrier, and removes spots and scars. ', img: '/img/lotions/3.png', price: "Price: 20$", rating: 5 },
    8: { name: 'Strawberry Dream', description: 'Indulge your skin with the creamy goodness of a strawberry poundcake scented body lotion.  This lightweight, fast-absorbing formula provides lasting hydration, leaving your skin soft and smooth. Infused with the mouthwatering scent of fresh strawberries, whipped cream, and vanilla cake, it wraps you in a sweet, comforting aroma while keeping your skin moisturized all day.', img: '/img/lotions/4.png', price: "Price: 35$", rating: 5 },
    9: { name: 'Handheld Massager', description: 'The deep tissue massage gun has 8 different massage heads, each of which is aimed at different muscles. After the massage gun hits the muscles, it can promote blood circulation, decompose lactic acid, and relieve muscle soreness after exercise. In addition, the massage gun also comes with a portable carring case, which is convenient to carry and relax the muscles anytime, anywhere.', img: '/img/helping machines/1.png', price: "Price: 75$", rating: 4 },
    10: { name: 'Neck Massager', description: '8 Powerful Deep-Shiatsu Kneading Massage Nodes. Our neck massager help you better with alleviate muscle soreness, ease neck stiffness, eliminate cervical fatigue, and relax yourself after a long day work', img: '/img/helping machines/2.png', price: "Price: 50$", rating: 4 },
    11: { name: 'Eye Massager', description: 'Comfortable Heating Massage - Renpho eye massager built-in heating pads provide a comfortable temperature between 104 and 107 degrees Fahrenheit(40℃-42℃), better for relaxing eye puffiness, dry eyes, etc. A hot compress can regulate the metabolism of the eyes, more effectively improve symptoms such as dry eyes, and reduce dark circles.', img: '/img/helping machines/3.png', price: "Price: 60$", rating: 5 },
    12: { name: 'Electric Foot Massagers', description: 'Experience the soothing effects of air compression massage that targets your feet, calves, and thighs, relieving fatigue, soreness, and tension after long days at work or intense workouts. Treat yourself or surprise a loved one with this ideal companion for unwinding, relieving stress, and enjoying the benefits of a spa-like massage at home', img: '/img/helping machines/4.png', price: "Price: 75$", rating: 5 },
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

            <div className="product-info">
                <p>{product.price}</p>
                <ul>
                    {Array.from({ length: product.rating }, (_, index) => (
                        <li>
                            <i key={index} className="bi bi-star-fill"></i>
                        </li> 
                    ))}
                </ul>
            </div>
            <div className="button-group">
                <Button type="primary" icon={<i className="bi bi-cart-dash"></i>} label="Add to cart"/>
                <Button type="normal" icon={<i className="bi bi-cart-dash"></i>} label="Buy now"/>
            </div>
        </div>
    );
}
