import { Helmet } from 'react-helmet-async'
import './home.css'

function Home() {
  return (
    <div className='homepage'>
      <Helmet>
        <title>Josh Cooley</title>
        <meta name='description' content='Welcome to my homepage, take a look around.  Edit the css on home, check out my portfolio.' />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>
      <span className="edit-me">
        Welcome to my page.  I have an unhealthy fascination with CSS.
        i don't like this, i need to come up with something better, like a cool portrait
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