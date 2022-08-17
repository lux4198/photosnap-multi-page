import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './home.css'

/* components  */

import HeroElement from '../components/home/heroElement.jsx'
import StoryPreview from '../components/shared/storyPreview.jsx'
import InfoCard from '../components/shared/infoCard'



/* text */

import {heroTextTitles, heroTextDetails, ButtonText1, ButtonText2, infoTextTitles, infoTextDetails} from '../assets/text'


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


import mountainsDesktop from '../assets/stories/desktop/mountains.jpg'
import cityscapesDesktop from '../assets/stories/desktop/cityscapes.jpg'
import voyageDesktop from '../assets/stories/desktop/18-days-voyage.jpg'
import architecturalsDesktop from '../assets/stories/desktop/architecturals.jpg'

import mountainsMobile from '../assets/stories/mobile/mountains.jpg'
import cityscapesMobile from '../assets/stories/mobile/cityscapes.jpg'
import voyageMobile from '../assets/stories/mobile/18-days-voyage.jpg'
import architecturalsMobile from '../assets/stories/mobile/architecturals.jpg'



/* icons */

import responsive from '../assets/features/desktop/responsive.svg'
import noLimit from '../assets/features/desktop/no-limit.svg'
import embed from '../assets/features/desktop/embed.svg'





function Home() {

    const heroImagesDesktop = [heroImageDesktop1, heroImageDesktop2, heroImageDesktop3 ]
    const heroImagesTablet = [heroImageTablet1, heroImageTablet2, heroImageTablet3 ]
    const heroImagesMobile = [heroImageMobile1, heroImageMobile2, heroImageMobile3 ]

    const heroImageCycle = [heroImagesDesktop, heroImagesTablet, heroImagesMobile]

    const storyImagesDesktop = [mountainsDesktop, cityscapesDesktop, voyageDesktop, architecturalsDesktop]
    const storyImagesMobile = [mountainsMobile, cityscapesMobile, voyageMobile, architecturalsMobile]

    const coverStories = {
        storyTitle : [  'The Mountains',
            'Sunset Cityscapes',
            '18 Days Voyage',
            'Architecturals'
          ],

        storyAuthor : [ 
            'by John Appleseed',
            'by Benjamin Cruz',
            'by Alexei Borodin',
            'by Samantha Brooke'
        ], 

        storyImage : [
            storyImagesDesktop, 
            storyImagesMobile
        ]
    }

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

    const mobileImage = () => {
        const width = window.innerWidth
            if(width < 600){
                return 1
        }
            else {
                return 0
            }
        }
                                
    return (
            <motion.div  exit = {{opacity : 0}} >
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

                    <div class = 'cover-stories-wrap'>
                        <StoryPreview  title = {coverStories.storyTitle[0]} author = {coverStories.storyAuthor[0]}  image = {coverStories.storyImage[/* mobileImage() */0][0]}/>
                        <StoryPreview  title = {coverStories.storyTitle[1]} author = {coverStories.storyAuthor[1]}  image = {coverStories.storyImage[/* mobileImage() */0][1]}/>
                        <StoryPreview  title = {coverStories.storyTitle[2]} author = {coverStories.storyAuthor[2]}  image = {coverStories.storyImage[/* mobileImage() */0][2]}/>
                        <StoryPreview  title = {coverStories.storyTitle[3]} author = {coverStories.storyAuthor[3]}  image = {coverStories.storyImage[/* mobileImage() */0][3]}/>
                    </div>
                    <div class = 'info-card-section-wrap'>
                        <InfoCard infoIcon = {responsive} infoTitle = {infoTextTitles[0]} infoDetails = {infoTextDetails[0]}/>
                        <InfoCard infoIcon = {noLimit} infoTitle = {infoTextTitles[1]} infoDetails = {infoTextDetails[1]}/>
                        <InfoCard infoIcon = {embed} infoTitle = {infoTextTitles[2]} infoDetails = {infoTextDetails[2]}/>
                    </div>
                </div>
            </motion.div>
    )
}

export default Home
