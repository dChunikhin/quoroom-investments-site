import React from "react";

import {
    MainScreen,
    AboutUsScreen,
    WhyQuoroomScreen,
    TechnologyScreen,
    ProductScreen,
    ContactUsScreen,
    NewsScreen,
    SchemeScreen,
    GalleryScreen}
    from "../../screens";

const HomePage = () => {
    return (
        <div className="home_page">
            <MainScreen/>
            <AboutUsScreen/>
            <WhyQuoroomScreen/>
            <TechnologyScreen/>
            <ProductScreen/>
            <GalleryScreen/>
            <SchemeScreen/>
            <NewsScreen/>
            <ContactUsScreen/>

        </div>
    )
}

export default HomePage;