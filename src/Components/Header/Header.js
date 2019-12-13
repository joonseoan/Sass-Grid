import React from 'react';

const Header = props => {
    return(
        <header className="header">
            <img src="/img/logo.png" alt="Nexter logo" className="header__logo" />
            <h3 className="head-3">Your own home:</h3>
            <h1 className="head-1">The ulternate personal freedom</h1>
            <button className="btn btn--header">View our property</button>
            <div className="header__seenon-text">Seen on</div>
            <div className="header__seenon-logos">
                <img src="/img/logo-bbc.png" alt="Seen on logo 1" />
                <img src="/img/logo-forbes.png" alt="Seen on logo 2" />
                <img src="/img/logo-techcrunch.png" alt="Seen on logo 3" />
                <img src="/img/logo-bi.png" alt="Seen on logo 4" />
            </div>
        </header>
    );
}

export default Header;