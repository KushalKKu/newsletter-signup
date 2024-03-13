import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import icon from '../images/icon-success.svg'
import './Thankyou.css'

const Thankyou = () => {
    const navigate = useNavigate();
    const params = useParams();

  return (
    <div className="card rounded-3" style={{width:"30rem"}}>
        <div>
            <img src={icon} className='thank-img' alt='correct-img'/>
            <h1 className='thank-h1'>Thanks for Subscribing!!</h1>
            <p className='thank-p'>  A confirmation email has been sent to {params.email}. 
  Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <div><button className='thank-button' onClick={()=>navigate('/')}>Dismiss</button></div>
    </div>
  )
}

export default Thankyou