import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <div className="Nav_brand">
                <span className="yellow">T</span>ravel <span className="yellow">B</span>ubble
            </div>

            <div className="Nav_links">
                <NavLink exact to='/' activeClassName="highlight">
                    <div className="Nav_item">Home</div>
                </NavLink>
                <NavLink exact to='/about' activeClassName="highlight">
                    <div className="Nav_item">About</div>
                </NavLink>
                <NavLink exact to='/blog' activeClassName="highlight">
                    <div className="Nav_item">Blog</div>
                </NavLink>
                <NavLink exact to='/contact' activeClassName="highlight">
                    <div className="Nav_item">Contact</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Nav;
