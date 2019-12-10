import React, { Fragment } from 'react';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Realtors from './Realtors/Realtors';
import Features from './Features/Features';
import Stories from './Stories/Stories';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

const App = () => {
    return(
        <Fragment>
            <Sidebar />
            <Header />
            <Realtors />
            <Features />
            <Stories />
            <Home />
            <Gallery />
            <Footer />
        </Fragment>
    )
}

export default App;