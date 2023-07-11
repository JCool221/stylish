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

      <article>
        I think we're going to do a picture here and some kind of impact blurb
        i'll work on the full formatting later, and i ned to find a picture of me i like
      </article>
    </div>

  )
}

export default Home