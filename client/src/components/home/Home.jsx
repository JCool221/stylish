// import TypeIt from 'typeit-react'
import './home.css'

function Home() {
  return (
    <div className='homepage'>
      {/* <div className="terminal">
        <p className='terminal-text'>systemctl start portfolio<br/>
          ...starting...<br/>
          portfolio running<br/>
          enable CSS <br/>
        </p>
      </div> */}
      <span className="edit-me">        
      Welcome to my page.  I have an unhealthy fascination with CSS.
      </span>

      <style className="styleplay" contentEditable>{
        `
        .edit-me {
          color: red;
          font-size: 2rem;
        }
        `
        }</style>
    </div>
    
  )
}

export default Home