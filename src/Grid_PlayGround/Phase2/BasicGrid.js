import React from 'react';
import './_BasicGrid.scss';

const BasicGrid = props => {
  return (
    <div className="phase2_container">
      <div className="phase2_item phase2_item--1">1. Orange</div>
      <div className="phase2_item phase2_item--2">2. Green</div>
      <div className="phase2_item phase2_item--3">3. Violet</div>
      <div className="phase2_item phase2_item--4">4. Pink</div>
      <div className="phase2_item phase2_item--5">5. Blue</div>
      <div className="phase2_item phase2_item--6">6. Brown</div>
    </div>
  );
}

export default BasicGrid;

