import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <nav>
        <div className='name'> 
        <h1>Josh</h1>
        <h2>Cooley</h2>
        </div>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
        </ul>
    </nav>
  )
}

export default Nav