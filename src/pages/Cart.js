import React, { useState } from "react";
import "../css/cart.css";

export default function Cart() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleBuyNow = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 1500); // Hide the message after 5 seconds
    };

    return (
        <div id="cart-container">
            <h1>Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">NO.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Prices</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Bee Natural</td>
                        <td>
                            <img src="/img/lotions/1.png" alt="product"/>
                        </td>
                        <td>1</td>
                        <td>20$</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Pomelo</td>
                        <td>
                            <img src="/img/essential oil/2.png" alt="product"/>
                        </td>
                        <td>2</td>
                        <td>10$</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Neck Massenger</td>
                        <td>
                            <img src="/img/helping machines/2.png" alt="product"/>
                        </td>
                        <td>1</td>
                        <td>50$</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Total</td>
                        <td>80$</td>
                    </tr>
                </tfoot>
            </table>
            <div className="parent-container">
                <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
            </div>
            {showSuccessMessage && (
                <div className="success-message">
                    <p>Payment Successful!</p>
                </div>
            )}
        </div>
    );
}
