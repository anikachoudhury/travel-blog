import React from 'react';
import './About.css';
import travel from '../images/travel.svg';

function About() {
    return (
        <div className="About">
            <div className="About_title">
                A little bit about me
            </div>

            <div className="About_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="About_image">
                <img src={travel} width={300} height={300} alt="travelling woman"></img>
            </div>
        </div>
    )
};

export default About;
