import React from 'react';
import './Features.css';
import food from '../images/food.svg';
import skyscraper from '../images/skyscraper.svg';
import paris from '../images/paris.svg';

function Features() {
    return (
        <div className="Features">
            <div className="Features_title">Notable features from the blog...</div>
            
            <div className="cards">
                <div className="Features_card">
                    <div className="Features_card_title">
                        The best restaurants in Rome
                    </div>
                    <div className="Features_card_image">
                        <img src={food} width={250} height={250}></img>
                    </div>
                    <div className="Features_card_button">
                        <button>Read Article</button>
                    </div>
                </div>

                <div className="Features_card">
                    <div className="Features_card_title">
                        Breathtaking views from New York skycrapers
                    </div>
                    <div className="Features_card_image">
                        <img src={skyscraper} width={250} height={250}></img>
                    </div>
                    <div className="Features_card_button">
                        <button>Read Article</button>
                    </div>
                </div>

                <div className="Features_card">
                    <div className="Features_card_title">
                        Must do activities in Paris
                    </div>
                    <div className="Features_card_image">
                        <img src={paris} width={250} height={250}></img>
                    </div>
                    <div className="Features_card_button">
                        <button>Read Article</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
