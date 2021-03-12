import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Finger Lickin' Good</HeroH1>
                    <HeroP>Not Just For Sunday</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
