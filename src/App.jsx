
import './App.css'
import { React } from 'react-dom'
import Header from './components/Header/Header'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Footer from './Footer/Footer'
import { useEffect } from 'react'
import Aos from 'aos'


function App() {
useEffect(()=>{
  Aos.init()
})

  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default App
