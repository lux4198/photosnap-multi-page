import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/* components  */

import HeroElement from '../components/home/heroElement.jsx'

/* text */

import {heroTextTitles, heroTextDetails, ButtonText1, ButtonText2} from '../assets/text'

/* images */

import heroImageDesktop1 from '../assets/home/desktop/create-and-share.jpg'
import heroImageDesktop2 from '../assets/home/desktop/beautiful-stories.jpg'
import heroImageDesktop3 from '../assets/home/desktop/designed-for-everyone.jpg'

import heroImageTablet1 from '../assets/home/tablet/create-and-share.jpg'
import heroImageTablet2 from '../assets/home/tablet/beautiful-stories.jpg'
import heroImageTablet3 from '../assets/home/tablet/designed-for-everyone.jpg'

import heroImageMobile1 from '../assets/home/mobile/create-and-share.jpg'
import heroImageMobile2 from '../assets/home/mobile/beautiful-stories.jpg'
import heroImageMobile3 from '../assets/home/mobile/designed-for-everyone.jpg'



function Home() {

    const heroImagesDesktop = [heroImageDesktop1, heroImageDesktop2, heroImageDesktop3 ]
    const heroImagesTablet = [heroImageTablet1, heroImageTablet2, heroImageTablet3 ]
    const heroImagesMobile = [heroImageMobile1, heroImageMobile2, heroImageMobile3 ]

    const heroImageCycle = [heroImagesDesktop, heroImagesTablet, heroImagesMobile]

    /* determines set of images depending of viewport*/
    const heroImage = () => {
        const width = window.innerWidth
            if(width < 700){
                return 2
        }
            else if(width < 1000){
                return 1
            }
            else {
                return 0
            }
        }

    return (
            <motion.div  exit = {{opacity : 0, y : -50}} >
                <div id = 'Home'>
                    <HeroElement  type = {'1'} heroTextTitle = {heroTextTitles[0]} heroTextDetail = {heroTextDetails[0]}
                                    ButtonText = {ButtonText1} backgroundColor = {'black'}
                                    backgroundImage = {heroImageCycle[heroImage()][0]}/>
                    <HeroElement type = {'2'} heroTextTitle = {heroTextTitles[1]} heroTextDetail = {heroTextDetails[1]}
                                    ButtonText = {ButtonText2} backgroundColor = {'white'}
                                    backgroundImage = {heroImageCycle[heroImage()][1]}/>
                    <HeroElement type = {'1'} heroTextTitle = {heroTextTitles[2]} heroTextDetail = {heroTextDetails[2]}
                                    ButtonText = {ButtonText2} backgroundColor = {'white'}
                                    backgroundImage = {heroImageCycle[heroImage()][2]}/>
                </div>
            </motion.div>
    )
}

export default Home
