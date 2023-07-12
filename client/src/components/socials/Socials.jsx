import './socials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Socials() {
  return (
    <div className='socials'>
        <a className='social-icon' target='blank' href="https://github.com/JCool221">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className='social-icon' target='blank' href="https://www.facebook.com/jcool2211/">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className='social-icon' target='blank' href="https://www.linkedin.com/in/j-cool42/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className='social-icon' target='blank' href="https://www.instagram.com/j_cool42">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  )
}

export default Socials