import React from 'react';
import './Card.css';

function Card({ title, img, description }) {
    return (
        <div className="Card">
            <div className="Card_title">
                {title}
            </div>

            <div className="Card_image">
                <img src={img} width={250} height={250}></img>
            </div>

            <div className="Card_text">
                {description}
            </div>

            <div className="Features_card_button">
                <button>Read Article</button>
            </div>
        </div>
    )
}

export default Card;
