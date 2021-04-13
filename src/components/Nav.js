import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <div className="Nav_brand">
                <span className="yellow">T</span>ravel <span className="yellow">B</span>ubble
            </div>

            <div className="Nav_links">
                <div className="Nav_item">Home</div>
                <div className="Nav_item">About</div>
                <div className="Nav_item">Blog</div>
                <div className="Nav_item">Contact</div>
            </div>
        </div>
    )
}

export default Nav;
