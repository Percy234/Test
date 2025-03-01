import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/services.css';

export default function Services() {
    const [activeTab, setActiveTab] = useState("Medicai aids");
    const renderTab = () => {
        switch (activeTab) {
            case "Medicai aids":
                return <div className="tab-content">
                            <div className='service-item'>
                                <h3 className='service-title'>Chiropractic</h3>
                                <div className='service-content'>
                                    <img className='service-img' src='/img/chiropractic/chiropractic.png' alt="Chiropractic" />
                                    <p className='service-description'>
                                       Chiropractic is a health care practice that focuses on the diagnosis, treatment, and prevention of disorders of the musculoskeletal system, especially the spine. It primarily uses manual manipulation techniques to adjust the structure of the joints, helping to improve nerve function and relieve pain without the need for drugs
                                       Chiropractic is often used to treat problems such as back pain, neck pain, headaches, herniated discs, and posture-related disorders. Chiropractors use methods such as spinal manipulation, soft tissue massage, and instructing patients in rehabilitative exercises.
                                       Many believe that chiropractic not only relieves pain but also improves overall health by enhancing nervous system function and improving body flexibility. However, the effectiveness of chiropractic is still being studied and may vary from case to case.
                                       <div id='service-btns'>
                                            <button>
                                                <Link to={`/products/12`} className='service-btn'>Related Products</Link>
                                            </button>
                                            <button>
                                                <Link to={`/contact`} className='service-btn'>Book Now</Link>
                                            </button>
                                       </div>
                                    </p>
                                </div>
                            </div>
                            <div className='service-item'>
                                <h3 className='service-title'>Acupuncture</h3>
                                <div className='service-content'>
                                    <p className='service-description'>
                                        Acupuncture is a healing method originating from traditional Chinese medicine that uses thin needles to stimulate the flow of energy ("Qi") and restore balance in the body. It is believed to relieve pain, improve blood circulation, relax muscles, and help treat a variety of conditions.
                                        Acupuncture is commonly used to treat back pain, neck pain, headaches, arthritis, digestive disorders, insomnia, stress, and nerve-related problems. Modern research shows that acupuncture can stimulate the nervous system, release endorphins (natural painkillers), and improve immune function.
                                        Although there are different opinions about the mechanism of action of acupuncture, this method is increasingly recognized in modern medicine and is combined with other treatments to increase the effectiveness of health care.
                                        <div id='service-btns'>
                                        <button>
                                                <Link to={`/products/4`} className='service-btn'>Related Products</Link>
                                            </button>
                                            <button>
                                                <Link to={`/contact`} className='service-btn'>Book Now</Link>
                                            </button>
                                       </div>
                                    </p>
                                    <img className='service-img' src='/img/acupuncture/acupuncture.png' alt="Acupuncture" />
                                </div>
                            </div>
                            <div className='service-item'>
                                <h3 className='service-title'>Massage Therapy</h3>
                                <div className='service-content'>
                                    <img className='service-img' src='/img/massage/massage.png' alt="Massage Therapy" />
                                    <p className='service-description'>
                                        Massage therapy is a treatment that uses kneading, pressure points, and body manipulation techniques to help relax muscles, reduce stress, and improve blood circulation. It has a long history and is widely used in both traditional and modern medicine to help treat pain, muscle tension, and stress-related problems.
                                        There are many different types of massage, including Swedish massage for full-body relaxation, deep tissue massage that targets deep muscle layers to relieve chronic pain, sports massage for athletes, and acupressure massage based on the principles of Oriental medicine.
                                        Massage therapy not only helps relieve muscle pain, but can also improve sleep, boost the immune system, and support the mind. When performed properly by a professional, it is a natural therapy that promotes health and improves quality of life.
                                        <div id='service-btns'>
                                        <button>
                                                <Link to={`/products/9`} className='service-btn'>Related Products</Link>
                                            </button>
                                            <button>
                                                <Link to={`/contact`} className='service-btn'>Book Now</Link>
                                            </button>
                                       </div>
                                    </p>
                                </div>
                            </div>
                       </div>;
            case "Beauty aids":
                return <div className="tab-content">
                            <div className='service-item'>
                                <h3>Hair Care</h3>
                                <div className='service-content'>
                                    <img className='service-img' src='/img/beauty_aids/hair.png' alt="Hair Care"/>
                                    <p className='service-description'>
                                        Hair care is an important part of maintaining healthy, smooth hair and minimizing damage. An effective hair care routine usually includes steps such as cleaning, moisturizing, protecting and nourishing hair from the inside.
                                        Choosing the right shampoo and conditioner for your hair type (oily hair, dry hair, curly hair, dyed hair...) helps maintain moisture and balance the oil on the scalp. In addition, using hair masks or nourishing oils such as coconut oil, argan oil can help strengthen hair, reduce breakage and split ends.
                                        Limiting the use of heat from hair dryers, curling irons, straighteners or using heat protection products before styling will help reduce damage to hair. In addition, a healthy diet with lots of vitamins and minerals such as biotin, iron, omega-3 also helps nourish hair from the inside, helping hair grow faster and thicker.
                                        Hair care not only makes hair more beautiful but also shows your concern for your overall health.
                                        <div id='service-btns'>
                                        <button>
                                                <Link to={`/products/7`} className='service-btn'>Related Products</Link>
                                            </button>
                                            <button>
                                                <Link to={`/contact`} className='service-btn'>Book Now</Link>
                                            </button>
                                       </div>
                                    </p>
                                </div>
                            </div>
                            <div className='service-item'>
                                <h3>Skin Care</h3>
                                <div className='service-content'>
                                    <p className='service-description'>
                                        Skin care is an important process to help maintain healthy, smooth and youthful skin. An effective skincare routine usually includes basic steps such as cleansing, moisturizing and protecting the skin from environmental damage.
                                        Cleansing the skin helps remove dirt, excess oil and makeup, preventing clogged pores and acne. Moisturizing provides water and essential nutrients, helping the skin stay soft and smooth. In addition, using sunscreen daily is an important step to protect the skin from UV rays, prevent aging and dark spots.
                                        Depending on your skin type (oily, dry, sensitive or combination skin), you should choose the right product for the best results. In addition, a healthy diet, drinking enough water and getting enough sleep also help nourish the skin from the inside, making the skin more radiant and healthy.
                                        <div id='service-btns'>
                                        <button>
                                                <Link to={`/products/5`} className='service-btn'>Related Products</Link>
                                            </button>
                                            <button>
                                                <Link to={`/contact`} className='service-btn'>Book Now</Link>
                                            </button>
                                       </div>
                                    </p>
                                    <img className='service-img' src='/img/beauty_aids/skincare.png' alt="Skin Care"/>
                                </div>
                            </div>
                       </div>;
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