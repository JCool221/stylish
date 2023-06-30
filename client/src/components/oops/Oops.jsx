import {Link} from 'react-router-dom'
import './oops.css'

const Oops = ({ statusCode }) => {
  let errorMessage;

  switch (statusCode) {
    case 404:
      errorMessage = 'Oops! Page not found.';
      break;
    case 500:
      errorMessage = 'Oops! Internal server error.';
      break;
    default:
      errorMessage = 'Oops! Something went wrong.';
      break;
  }

  return (<div className='oops'>
  <div className='error'>{statusCode}: {errorMessage}</div>
  <div className="return">
    <a href="#" onClick={() => window.location.reload()}>|Try again|</a>
  <Link to='/home'>|Home|</Link>

  </div>
  </div>
  )
};

export default Oops;
