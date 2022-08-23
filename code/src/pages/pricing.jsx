import React from 'react'

import { motion } from 'framer-motion'
import './pricing.css'

/* images */

import heroImageDesktop from '../assets/pricing/desktop/hero.jpg'
import heroImageTablet from '../assets/pricing/tablet/hero.jpg'
import heroImageMobile from '../assets/pricing/mobile/hero.jpg'


/* text */

import { pricingHeroTitle, pricingHeroText } from '../assets/text.jsx'

function Pricing() {

    const backgroundImages = [heroImageDesktop, heroImageTablet, heroImageMobile]

    const bgImage = () => {
        return(
            (window.innerWidth < 700)? 2 : (window.innerWidth < 1000)? 1 : 0
        )
    }

    return (
        <motion.div  exit = {{opacity : 0}}>
            <div class = 'features-hero-section' /* classes defined in home.css / hero-element.css */ >
                    <div class = 'hero-wrap-1' style = {{'backgroundColor' : 'black'}}>
                        <div class = 'hero-text-wrap'>
                            <h1>{pricingHeroTitle}</h1>
                            <p>
                                {pricingHeroText}
                            </p>
                        </div>
                        <div class = 'hero-image'
                            style = {{'backgroundImage': `url(${backgroundImages[bgImage()]})`,
                                        }}
                                        >
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}

export default Pricing
