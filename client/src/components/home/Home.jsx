import './home.css'
import me from '../../assets/me.jpg'

function Home() {
  return (
    <div className='homewrap'>
    <div className='homepage'>
      <img className='home-img' src={me} />
      <article className='hometext'>Hello there, my name is Josh and I like to make web apps.  I write clean, readable code with a focus on accessibility and maintainabilty.  I  know my way around several frameworks as well as no framework javascript but I really like to work with React.  I like to build attractive, accessible, responsive components.<br/>  Anyway, I look forward to hearing from you!
      </article>
    </div>
    </div>

  )
}

export default Home