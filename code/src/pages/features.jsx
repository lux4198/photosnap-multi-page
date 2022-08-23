import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import './features.css'

/* components */

import InfoCard from '../components/shared/infoCard'
import BannerBeta from '../components/shared/bannerBeta'

/* text */

import { infoTextDetails, infoTextTitles, featuresHeroText, featuresHeroTitle } from '../assets/text'

/* images */

import heroImageDesktop from '../assets/features/desktop/hero.jpg'
import heroImageTablet from '../assets/features/tablet/hero.jpg'
import heroImageMobile from '../assets/features/mobile/hero.jpg'

import responsive from '../assets/features/desktop/responsive.svg'
import nolimit from '../assets/features/desktop/no-limit.svg'
import embed from '../assets/features/desktop/embed.svg'
import dragdrop from '../assets/features/desktop/drag-drop.svg'
import customdomain from '../assets/features/desktop/custom-domain.svg'
import boostexposure from '../assets/features/desktop/boost-exposure.svg'


const bgImage = () => {
    return(
        (window.innerWidth < 700)? 2 : (window.innerWidth < 1000)? 1 : 0
    )
}

function Features() {
    const backgroundImages = [heroImageDesktop, heroImageTablet, heroImageMobile]
    return (
        <motion.div  exit = {{opacity : 0}}>
            <div id = 'Features'>
                <div class = 'features-hero-section' /* classes defined in home.css / hero-element.css */ >
                    <div class = 'hero-wrap-1' style = {{'backgroundColor' : 'black'}}>
                        <div class = 'hero-text-wrap'>
                            <h1>{featuresHeroTitle}</h1>
                            <p>
                               {featuresHeroText}
                            </p>
                        </div>
                        <div class = 'hero-image'
                            style = {{'backgroundImage': `url(${backgroundImages[bgImage()]})`,
                                        }}
                                        >
                        </div>
                    </div>
                </div>
                <div class = 'info-card-section-wrap'>
                    <InfoCard infoIcon = {responsive} infoTitle = {infoTextTitles[0]} infoDetails = {infoTextDetails[0]}/>
                    <InfoCard infoIcon = {nolimit} infoTitle = {infoTextTitles[1]} infoDetails = {infoTextDetails[1]}/>
                    <InfoCard infoIcon = {embed} infoTitle = {infoTextTitles[2]} infoDetails = {infoTextDetails[2]}/>
                    <InfoCard infoIcon = {customdomain} infoTitle = {infoTextTitles[3]} infoDetails = {infoTextDetails[3]}/>
                    <InfoCard infoIcon = {boostexposure} infoTitle = {infoTextTitles[4]} infoDetails = {infoTextDetails[4]}/>
                    <InfoCard infoIcon = {dragdrop} infoTitle = {infoTextTitles[5]} infoDetails = {infoTextDetails[5]}/>
                </div>
                <BannerBeta/>
            </div>
        </motion.div>
    )
}

export default Features
