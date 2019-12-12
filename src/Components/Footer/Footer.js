import React from 'react';

const Footer = props => {
    return(    
        <footer className="footer">
            <ul className="nav">
                <li className="nav__item">
                    <a href="#" className="nav__item__link">Find your dream home</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__item__link">Request proposal</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__item__link">Download home planner</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__item__link">Contact us</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__item__link">Submit your property</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__item__link">Come work with us!</a>
                </li>
            </ul>
            <p className="copyright">
                &copy;Copyright 2019 by Joon Inc
            </p>
        </footer>
    );
}

export default Footer;