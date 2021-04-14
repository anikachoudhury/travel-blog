import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact_icon">
                <i class="fas fa-at fa-3x"></i>
            </div>
            <div className="Contact_text">
                Email
            </div>

            <div className="Contact_icon">
                <i class="fab fa-whatsapp fa-3x"></i>
            </div>
            <div className="Contact_text">
                Whatsapp
            </div>

            <div className="Contact_icon">
                <i class="fab fa-instagram fa-3x"></i>
            </div>
            <div className="Contact_text">
                Instagram
            </div>

            <div className="Contact_icon">
                <i class="fab fa-twitter fa-3x"></i>
            </div>
            <div className="Contact_text">
                Twitter
            </div>
        </div>
    )
};

export default Contact;
