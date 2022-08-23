import React from 'react'
import { useState } from 'react'

import { motion } from 'framer-motion'
import './pricing.css'

/* images */

import heroImageDesktop from '../assets/pricing/desktop/hero.jpg'
import heroImageTablet from '../assets/pricing/tablet/hero.jpg'
import heroImageMobile from '../assets/pricing/mobile/hero.jpg'


/* text */

import { pricingHeroTitle, pricingHeroText, pricingPlanBasicText, pricingPlanProText, pricingPlanBusinessText } from '../assets/text.jsx'
import BannerBeta from '../components/shared/bannerBeta'
import { ButtonType1 } from '../components/shared/buttons'

function Pricing() {

    const backgroundImages = [heroImageDesktop, heroImageTablet, heroImageMobile]

    const bgImage = () => {
        return(
            (window.innerWidth < 700)? 2 : (window.innerWidth < 1000)? 1 : 0
        )
    }

    const [pricingPlan, setPricingPlan] = useState(true)
    const pricingPlansMonthly = ['19.00', '39.00', '99.00']
    const pricingPlansYearly = ['190.00', '390.00', '990.00']

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
            <div class = 'pricing-plan-toggle-button-wrap'>
                <h3 class = {pricingPlan? 'pricing-plan-p' : 'pricing-plan-p-focus'}>
                    Monthly
                </h3>
                <div class = {pricingPlan? 'pricing-plan-button-toggle' : 'pricing-plan-button-toggle-focus'} onClick = {() => setPricingPlan(!pricingPlan)}>
                    <div class = {pricingPlan? 'pricing-plan-button-toggle-inside' : 'pricing-plan-button-toggle-inside-focus'}/>
                </div>            
                <h3 class = {pricingPlan?  'pricing-plan-p-focus' : 'pricing-plan-p'} >
                    Yearly
                </h3>
            </div>
            <div class = 'pricing-plans-wrap'>
                <div class = 'pricing-plan-card-wrap'>
                    <div class = 'pricing-plan-text-price-wrap'>
                        <div class = 'pricing-plan-text'>
                            <h2>Basic</h2>
                            <p>{pricingPlanBasicText}</p>
                        </div>
                        <div class = 'pricing-plan-price'>
                            <h1>${pricingPlan? pricingPlansMonthly[0] : pricingPlansYearly[0]}</h1>
                            <p>per month</p>
                        </div>
                    </div>
                    <div class = 'pricing-plan-button-wrap'>
                        <ButtonType1 text = 'PICK PLAN' dark = {true}/>
                    </div>
                </div>
                <div class = 'pricing-plan-card-wrap pricing-plan-pro'>
                    <div class = 'pricing-plan-text-price-wrap'>
                        <div class = 'pricing-plan-text'>
                            <h2>Professional</h2>
                            <p>{pricingPlanProText}</p>
                        </div>
                        <div class = 'pricing-plan-price'>
                            <h1>${pricingPlan? pricingPlansMonthly[1] : pricingPlansYearly[1]}</h1>
                            <p>per month</p>
                        </div>
                    </div>
                    <div class = 'pricing-plan-button-wrap'>
                        <ButtonType1 text = 'PICK PLAN' dark = {false}/>
                    </div>
                </div>
                <div class = 'pricing-plan-card-wrap'>
                    <div class = 'pricing-plan-text-price-wrap'>
                        <div class = 'pricing-plan-text'>
                            <h2>Business</h2>
                            <p>{pricingPlanBusinessText}</p>
                        </div>
                        <div class = 'pricing-plan-price'>
                            <h1>${pricingPlan? pricingPlansMonthly[2] : pricingPlansYearly[2]}</h1>
                            <p>per month</p>
                        </div>
                    </div>
                    <div class = 'pricing-plan-button-wrap'>
                        <ButtonType1 text = 'PICK PLAN' dark = {true}/>
                    </div>
                </div>
            </div>
            <div class = 'pricing-plans-table'>

            </div>

            <BannerBeta/>
        </motion.div>
    )
}

export default Pricing
