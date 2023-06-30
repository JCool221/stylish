import './socials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Socials() {
  return (
    <div className='socials'>
        <a className='social-icon' href="#">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='social-icon' href="#">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className='social-icon' href="#">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className='social-icon' href="#">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  )
}

export default Socials