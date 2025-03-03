import React, { useState } from 'react';
import '../css/feedback.css';

export default function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSubmitted(true);
    };

    return (
        <div className="feedback-container">
            <h1>Feedback</h1>
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Thank you for your feedback!</h2>
                    <p>We appreciate your input and will get back to you soon.</p>
                </div>
            ) : (
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
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            )}
        </div>
    );
}