import React from 'react';
import { useState } from 'react';
import '../css/services.css';

export default function Services() {
    const [activeTab, setActiveTab] = useState("Medicai aids");
    const renderTab = () => {
        switch (activeTab) {
            case "Medicai aids":
                return  <div className="tab-content">Medicai aid
                
                         </div>;
            case "Beauty aids":
                return <div className="tab-content">Beauty aids</div>;
            default:
                return null;
        }
    }
    return (
        <div className="services-container">
            <div className="services-tabs">
                <button className={activeTab === "Medicai aids" ? "active" : ""} onClick={() => setActiveTab("Medicai aids")}>
                    Medicai aids
                </button>
                <button className={activeTab === "Beauty aids" ? "active" : ""} onClick={() => setActiveTab("Beauty aids")}>
                    Beauty aids
                </button>
            </div>
            <div className="content-tabs">{renderTab()}</div>
        </div>
    );
}