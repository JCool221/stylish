import axios from 'axios'
import { useState } from 'react';
import Oops from '../oops/Oops';
import './contact.css'

function Contact() {
const [error, setError] = useState(null)
const [isSubmitted, setIsSubmitted] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)
  console.log(formData)
  setIsSubmitted(true)
  // use axios to post it
  try {
    await axios.post('/contact', formData)
  } catch(error) {
    console.error('An error occured:', error)
    setError(error.response ? error.response.status: 500)
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
      <input type="email" name="email" id="email" />
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
        {isSubmitted && <div className='thanks'>Thank you for your Submission!</div>}
        </>
        </>
    )}
    </div>
  )
}

export default Contact