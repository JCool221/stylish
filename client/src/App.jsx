import './App.css'
import Nav from './components/nav/Nav'
import Socials from './components/socials/Socials'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Portfolio } from './components/portfolio/Portfolio'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="wrapper">

      <Nav/>
      <div className='box'>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      </div>
      <Socials />
    </div>
    </>
  )
}

export default App
