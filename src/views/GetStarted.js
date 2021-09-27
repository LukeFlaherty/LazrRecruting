import React from 'react'
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import GetStartedHero from '../components/sections/GetStartedHero';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import SectionHeader from '../components/sections/partials/SectionHeader';

const GetStarted = () => {
    return (
        <>
            {/* <FeaturesTiles /> */}
            {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
            <GetStartedHero />
            <Cta split />
            <GenericSection />
        </>
    )
}

export default GetStarted
