import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero_title">
                <div>Welcome to <span className="yellow">Travel Bubble</span>!</div>
            </div>

            <div className="Hero_subtitle">
                <div>Keep reading for an insight into the life of an avid traveller.</div>
            </div>

            <div className="Hero_button">
                <button>Blog</button>
            </div>
        </div>
    )
}

export default Hero;
