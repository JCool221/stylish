import './portfolio.css'
import content from '../../data/portfolioContent.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export const Portfolio = () => {
    console.log(content)
  return (
    <div className='portfolio'>
        {content.map((data) => (
            <div key={data.index} className='portfolio-card'> 
            <h1 key={data.index}>{data.title}</h1>
            <div className="popout">
            <img className='portfolio-img' src={data.image} alt={data.title} />
            <div className='info-card'>
                <h1>{data.title}</h1>
            <p className='portfolio-desc'>{data.description}</p>
            <div className="links">
            <a href={data.github}className='portfolio-icon'><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a href={data.link} className='button-link'>Check it out</a> 
            </div>
            </div>
            </div>
            </div>
            ))}
            
    </div>
  )
}
