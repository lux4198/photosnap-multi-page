import React from 'react'
import './bannerBeta.css'

import {ButtonType2} from '../shared/buttons.jsx'

function BannerBeta() {
    return (
        <div class = 'banner-beta'>
            <h1>WE'RE IN BETA. GET YOUR INVITE TODAY.</h1>
            <ButtonType2 text = 'GET AN INVITE' dark = {true}/>
        </div>
    )
}

export default BannerBeta
