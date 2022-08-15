import React from 'react'
import './storyPreview.css'
import {ButtonType2} from './buttons.jsx'

function StoryPreview(props) {
    const title = props.storyTitle
    const author = props.storyAuthor
    const image = props.storyImage
    const date = props.storyDate

    return (
        <div class = 'story-wrap' style = {{'backgroundImage' : `url(${image})`}}>
            <div class = 'story-text' >
                <p>{date}</p>
                <h2>{title}</h2>
                <p>{author}</p>
            </div>
            <div class = 'story-button'>
                <ButtonType2 text = 'READ STORY' dark = {true} />
            </div>
        </div>
    )
}

export default StoryPreview
