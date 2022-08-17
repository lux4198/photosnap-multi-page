import React from 'react'
import { ButtonType2 } from '../components/shared/buttons'
import StoryPreview from '../components/shared/storyPreview'
import './stories.css'

import { stories } from '../assets/stories/stories'

function Stories() {
    return (
        <div>
            <div class = 'story-hero-section'>
                <div class = 'story-hero-image-mobile'/>
                <div class = 'story-hero-text-wrap'>
                    <h4>Last month's featured story</h4>
                    <h1>Hazy full moon of Appalachia</h1>
                    <div style = {{'display' :'flex'}}>
                        <p>March 2nd 2020</p>
                        <p style = {{'paddingLeft' :'1em', 'color' : 'white'}}>by John Appleseed</p>
                    </div>
                    <p>  The dissected plateau area, while not actually made up of geological mountains,
                        is popularly called "mountains," especially in eastern Kentucky and West Virginia,
                        and while the ridges are not high, the terrain is extremely rugged.
                    </p>
                    <ButtonType2 text = 'READ THE STORY' dark = {true}/>
                </div>
            </div>
            <div class = 'story-story-wrap'>
                {
                    stories.map((story) => {
                        return(
                            <StoryPreview title = {story.title} author = {story.author}
                                            image = {story.imgDesktop} date = {story.date}/>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Stories
