import { useState } from 'react'
import Home from './Home/Home.jsx'
import Features from './Features/Features.jsx'
import NavBar from './NavBar/NavBar.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Features></Features>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </>
  )
}

export default App
