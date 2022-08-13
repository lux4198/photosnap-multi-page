import React from 'react'
import './hero-element.css'

/* components */

import {ButtonType2} from '../../components/shared/buttons'

function HeroElement(props) {

    return (
        <div class = {(props.type === '1')? 'hero-wrap-1' : 'hero-wrap-2'} style = {{
            'backgroundColor' : props.backgroundColor, 
            }}>
            <div class = 'hero-text-wrap'>

                <h1>{props.heroTextTitle}</h1>
                <p>{props.heroTextDetail}</p>
                <ButtonType2 text = {props.ButtonText} dark = {(props.backgroundColor === 'black')? true : false}/>
            
            </div>
            <div class = 'hero-image' 
                style = {{'backgroundImage': `url(${props.backgroundImage})`, 
                            }}>

            </div>
        </div>
    )
}

export default HeroElement
