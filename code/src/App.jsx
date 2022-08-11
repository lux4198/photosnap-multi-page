import { useState } from 'react'
import './App.css'

/* components */

import {ButtonType1, ButtonType2} from './components/shared/buttons.jsx'
import Footer from './components/shared/footer'

function App() {

  return (
    <div class = "App">
      <h1>hello there</h1>
      <ButtonType1 text = 'BUTTON 1' dark = {true}/>
      <ButtonType2 text = 'BUTTON 2' dark = {false} />
      <Footer/>
    </div>
  )
}

export default App
