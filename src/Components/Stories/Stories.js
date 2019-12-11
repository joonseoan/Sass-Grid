import React, { Fragment } from 'react';

const Stories = props => {
    return(
        <Fragment>
            <div className="stories__pictures">
                <img src="img/story-1.jpeg" className="stories__pictures__img--1" />
                <img src="img/story-2.jpeg" className="stories__pictures__img--2" />
            </div>
            <div className="stories__contents">
                <h3 className="head-3 mb-sm">Happy Customers</h3>
                <h2 className="head-2 head-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="stories__contents__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
                </p>
                <button className="btn">Find your own home</button>
            </div>
        </Fragment>
    );
}

export default Stories;