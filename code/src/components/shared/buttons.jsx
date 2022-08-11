import React from 'react'
import './buttons.css'

const arrow = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
    )
}
export function ButtonType1(props) {
    return (
        <div class = {props.dark? 'button-type-1 button-dark' : 'button-type-1 button-light'}>
            <h4>{props.text}</h4>
        </div>
    )
}

export function ButtonType2(props) {
    return (
        <div class = {props.dark? 'button-type-2 button-dark' : 'button-type-2 button-light'}>
            <h4>{props.text}</h4>
            {arrow()}
        </div>
    )
}


