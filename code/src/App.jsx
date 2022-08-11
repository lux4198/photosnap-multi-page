import { useState } from 'react'
import './App.css'

/* components */

import {ButtonType1, ButtonType2} from './components/shared/buttons.jsx'
import Footer from './components/shared/footer'
import Navbar from './components/shared/navbar'

function App() {

  return (
    <div class = "App">
      <Navbar/>
      <h1>hello</h1>
      <Footer/>
    </div>
  )
}

export default App
