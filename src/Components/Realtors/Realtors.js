import React from 'react';

const Realtors = props => {
    return(
        <div className="realtors">
            <h3 className="head-3">Top 3 Realtors</h3>
            <div className="realtors__list">
                <img src="img/realtor-1.jpeg" alt="Realtor 1" className="realtors__list__img" />
                <div className="realtors__list__details">
                    <h4 className="head-4 head-4--light">Erik Feiman</h4>
                    <p className="realtors__list__details__sold">245 houses sold</p>
                </div>
                <img src="img/realtor-2.jpeg" alt="Realtor 2" className="realtors__list__img" />
                <div className="realtors__list__details">
                    <h4 className="head-4 head-4--light">Kim Brown</h4>
                    <p className="realtors__list__details__sold">212 houses sold</p>
                </div>
                <img src="img/realtor-3.jpeg" alt="Realtor 3" className="realtors__list__img" />
                <div className="realtors__list__details">
                    <h4 className="head-4 head-4--light">Todd Ramsey</h4>
                    <p className="realtors__list__details__sold">198 houses sold</p>
                </div>
            </div>    
        </div>
    );
}

export default Realtors;