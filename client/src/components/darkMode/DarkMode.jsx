import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from './darkModeSlice'

import './darkMode.css'

function DarkMode() {
    const isDarkMode = useSelector((state) => state.darkMode)
    const dispatch = useDispatch()

const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode())
}

  return (
    <div className='darkmode'>
        <button className='darkmode-toggle' onClick={handleDarkModeToggle}>dark mode</button>
    </div>
  )
}

export default DarkMode