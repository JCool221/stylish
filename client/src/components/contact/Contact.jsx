import axios from 'axios'
import { useState } from 'react';
import Oops from '../oops/Oops';
import './contact.css'
import { Link } from 'react-router-dom';

function Contact() {
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email)
    const formData = new FormData(e.target)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    setIsSubmitted(true)
    // use axios to post it
    try {
      const response = await axios.post('/contact', formData, config)
      console.log(response.data)
    } catch (error) {
      console.error('An error occured:', error)
      setError(error.response ? error.response.status : 500)
    }
    e.target.reset()
  }


  return (
    <div className="contact">
      {error ? (<Oops statusCode={error} />) : (
        <>
          {!isSubmitted && (

            <form onSubmit={handleSubmit} className='contact-form'>
              <h1>Contact Me</h1>
              <div className="form-group">
                <label htmlFor="email">Email |</label>
                <input type="email" name="email" id="email" autoFocus="autofocus" />
              </div>
              <div className="form-group">
                <label htmlFor="body">Message |</label>
                <textarea
                  name="body"
                  id="body"
                  cols="18"
                  rows="5"
                />
              </div>
              <button className='contact-button' type='submit'>Submit</button>
            </form>
          )}
          <>
            {isSubmitted && <div className='thanks'>
              <Link to='/'>
                <p>
                  Thank you for your Submission!
                </p>
                <p>
                  Go back
                </p>
              </Link>
            </div>}
          </>
        </>
      )}
    </div>
  )
}

export default Contact