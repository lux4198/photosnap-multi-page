import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import './features.css'


/* images */

import heroImageDesktop from '../assets/features/desktop/hero.jpg'
import heroImageTablet from '../assets/features/tablet/hero.jpg'
import heroImageMobile from '../assets/features/mobile/hero.jpg'

const bgImage = () => {
    return(
        (window.innerWidth < 700)? 2 : (window.innerWidth < 1000)? 1 : 0
    )
}

function Features() {
    const backgroundImages = [heroImageDesktop, heroImageTablet, heroImageMobile]
    return (
        <motion.div>
            <div id = 'Features'>
                <div class = 'features-hero-section'>
                    <div class = 'hero-wrap-1' style = {{'backgroundColor' : 'black'}}>
                        <div class = 'hero-text-wrap'>
                            <h1>FEATURES</h1>
                            <p>
                                We make sure all of our features are designed
                                to be loved by every aspiring and even
                                professional photographers who wanted to
                                share their stories.
                            </p>
                        </div>
                        <div class = 'hero-image'
                            style = {{'backgroundImage': `url(${backgroundImages[bgImage()]})`,
                                        }}
                                        >
                        </div>
                    </div>
                </div>
                <div class = 'features-info-cards'>

                </div>
                <div class = 'features-call-to-action'>

                </div>
            </div>
        </motion.div>
    )
}

export default Features
