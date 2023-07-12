import { Routes, Route } from 'react-router-dom'
import { HelmetProvider} from 'react-helmet-async'
import { useSelector } from 'react-redux'
import Nav from './components/nav/Nav'
import DarkMode from './components/darkMode/DarkMode'
import Socials from './components/socials/Socials'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Portfolio } from './components/portfolio/Portfolio'
import { Helmet } from 'react-helmet-async'

import './App.css'

function App() {
  const isDarkMode = useSelector((state) => state.darkMode)

  const theme = isDarkMode ? 'dark' : 'light';

  const themeVariables = {
    dark: {
      '--background-color': '#121212',
      '--background-invert': '#fff',
      '--text-invert': '#000',
      '--text-color': '#e1d9d1',
      '--accent': '#a0522d',
      '--shadows': 'none',
      '--gradient': 'radial-gradient(circle at top left, #1a1a1a, #393939)',
    },
    light: {
      '--background-color': '#fff',
      '--background-invert': '#121212',
      '--text-color': '#000',
      '--text-invert': '#e1d9d1',
      '--accent': '#fbceb1',
      '--shadows': '5px 5px 15px var(--text-color)',
      '--gradient': 'radial-gradient(circle at top left, #fff, #bdd5e7)'
    }
  }

const style = {
  ...themeVariables[theme]
}

  return (
    <HelmetProvider>
            <Helmet>
        <title>Josh Cooley</title>
        <meta name='description' content='Welcome to my homepage, take a look around.  Edit the css on home, check out my portfolio.' />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>

    <div className="wrapper" style={style}>
      <Nav/>
      <div className='box'>
      <Routes>
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
      </div>
      <DarkMode />
      <Socials />
    </div>
    </HelmetProvider>
  )
}

export default App
