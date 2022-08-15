import React from 'react'
import './infoCard.css'


function InfoCard(props) {
    return (
        <div class = 'info-card-wrap'>
            <div class = 'info-card-icon'>
                <img src= {props.infoIcon} alt=""/>
            </div>
            <div class = 'info-card-text'>
                <h2>{props.infoTitle}</h2>
                <p>{props.infoDetails}</p>
            </div>
        </div>
    )
}

export default InfoCard
