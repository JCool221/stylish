import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from './darkModeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import './darkMode.css'

function DarkMode() {
    const isDarkMode = useSelector((state) => state.darkMode)
    const dispatch = useDispatch()

const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode())
}

  return (
    <div className='darkmode'>
        <button className='darkmode-toggle' onClick={handleDarkModeToggle}>
          {isDarkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} /> }
          </button>
    </div>
  )
}

export default DarkMode