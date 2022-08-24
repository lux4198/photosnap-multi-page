import React from 'react'
import { useState } from 'react'

import { motion } from 'framer-motion'
import './pricing.css'

/* images */

import heroImageDesktop from '../assets/pricing/desktop/hero.jpg'
import heroImageTablet from '../assets/pricing/tablet/hero.jpg'
import heroImageMobile from '../assets/pricing/mobile/hero.jpg'

import checkIcon from '../assets/pricing/desktop/check.svg'



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

    const pricingPlanBilling = () => {
        return(
            pricingPlan? "per month" : "per year"
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
                            <p>{pricingPlanBilling()}</p>
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
                            <p>{pricingPlanBilling()}</p>
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
                            <p>{pricingPlanBilling()}</p>
                        </div>
                    </div>
                    <div class = 'pricing-plan-button-wrap'>
                        <ButtonType1 text = 'PICK PLAN' dark = {true}/>
                    </div>
                </div>
            </div>
            <div class = 'pricing-plans-table'>
                <table cellSpacing={0}>
                    <thead>
                        <th colSpan={(window.innerWidth > 700)? '1' : '3'}>
                            <h4>The Features</h4>
                        </th>
                        <th>
                            <h4 class = 'pricing-table-plan-head'>Basic</h4>
                        </th>
                        <th>
                            <h4 class = 'pricing-table-plan-head'>Professional</h4>
                        </th>
                        <th>
                            <h4 class = 'pricing-table-plan-head'>Business</h4>
                        </th>
                    </thead>
                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan= '3'>
                                <h4>Unlimited Story Posting</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Unlimited Story Posting</h4>
                            </td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Unlimited Photo Upload</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Unlimited Photo Upload</h4>
                            </td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Embedding Custom Content</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Embedding Custom Content</h4>
                            </td>
                            <td></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Customize Metadata</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Customize Metadata</h4>
                            </td>
                            <td></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Advanced Metrics</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Advanced Metrics</h4>
                            </td>
                            <td></td>
                            <td></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Photo Downloads</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Photo Downloads</h4>
                            </td>
                            <td></td>
                            <td></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Search Engine Indexing</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Search Engine Indexing</h4>
                            </td>
                            <td></td>
                            <td></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>

                        <tr class = 'pricing-table-feature-mobile'>
                            <td colSpan={'3'}>
                                <h4>Custom Analytics</h4>
                            </td>
                        </tr>
                        <tr class = 'pricing-table-plans-mobile'>
                            <td><h4>Basic</h4></td>
                            <td><h4>Pro</h4></td>
                            <td><h4>Business</h4></td>
                        </tr>
                        <tr>
                            <td class = 'pricing-table-feature-desktop'>
                                <h4>Custom Analytics</h4>
                            </td>
                            <td></td>
                            <td></td>
                            <td><img src={checkIcon} alt="checkicon"/></td>
                        </tr>
                </table>
            </div>

            <BannerBeta/>
        </motion.div>
    )
}

export default Pricing
