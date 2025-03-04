import React, { useState } from 'react';
import '../css/feedback.css';

export default function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        
        alert('Thank you for your feedback!');
        
    };

    const handleCancel = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="feedback-container">
            <h1>Feedback</h1>
            
                <form className="feedback-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <select required>
                            <option value=""></option>
                            <option value="service">Service</option>
                            <option value="product">Product</option>
                            <option value="therapists">Therapists</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </form>
            
        </div>
    );
}