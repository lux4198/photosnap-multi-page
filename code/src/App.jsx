import { useState } from 'react'
import './App.css'

import {ButtonType1, ButtonType2} from '../src/components/buttons.jsx'

function App() {

  return (
    <div class = "App">
      <h1>hello there</h1>
      <ButtonType1 text = 'BUTTON 1' dark = {true}/>
      <ButtonType2 text = 'BUTTON 2' dark = {false} />
    </div>
  )
}

export default App
