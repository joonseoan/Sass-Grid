import React from 'react';
import './Challenge.scss';

const Challenge = props => {
    return(
        <div className="container">
            <div className="item item--1">Header</div>
            <div className="item item--2">Small Box1</div>
            <div className="item item--3">Small Box2</div>
            <div className="item item--4">Small Box3</div>
            <div className="item item--5">Sidbar</div>
            <div className="item item--6">Main Content</div>
            <div className="item item--7">Footer</div>
        </div>
    );
}

export default Challenge;