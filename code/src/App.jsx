import { useState } from 'react'
import { BrowserRouter as Router,
        Routes, 
        Route, 
        Link, 
        useLocation} from 'react-router-dom'
import { AnimatePresence} from 'framer-motion'
import './App.css'

/* components */

import Stories from '../src/pages/stories'
import Features from '../src/pages/features'
import Pricing from '../src/pages/pricing'
import Home from '../src/pages/home'
import {ButtonType1, ButtonType2} from './components/shared/buttons.jsx'
import Footer from './components/shared/footer'
import Navbar from './components/shared/navbar'




function App() {
  const location = useLocation()

  return (
    <div class = "App">
      <Navbar/>
      <div class = 'main-content'>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key = {location.pathname}>
            <Route exact path='/' element = {<Home/>}></Route>
            <Route exact path='/stories' element = {<Stories/>}></Route>
            <Route exact path='/features' element = {<Features/>}></Route>
            <Route exact path='/pricing' element = {<Pricing/>}></Route>
          </Routes>
        </AnimatePresence>
      </div>
      <Footer/>
    </div>
  )
}

export default App
