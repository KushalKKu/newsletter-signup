import React, { useState } from 'react'
import desktopimg from '../images/illustration-sign-up-desktop.svg'
import {useNavigate} from "react-router-dom"
import mobile from '../images/illustration-sign-up-mobile.svg'
import iconlist from '../images/icon-list.svg'
import './Sign.css'

function Sign() {
  const[email,setEmail]=useState("")
  const[error,setError]=useState("")
  const navigate = useNavigate()
  const[submitted,setSubmitted]=useState("")


   const emailvalidation=() =>{
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regEx.test(email)){
      {navigate("/Thankyou/"+email)}
    }else{
      setError("Please enter Valid Email")
    }
   }


  //  const handleChange=(event)=>{
  //   setEmail(event.target.value)
  //  }
  return (
    <>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 pb-4 pt-0 my-1 rounded-4" style={{backgroundColor:'white'}}>

      <div className="col-10 col-sm-8 col-lg-6">
        <picture className='sign-pic'>
        <source media='(max-width:990px)' srcSet={mobile}/>
        {/* <img src={mobile} style={{maxWidth:'950px', width:'100%', height:'auto'}} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/> */}
        <img src={desktopimg} style={{maxWidth:'100%', width:'100%', height:'auto'}} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
        </picture>
      </div>
      <div className="col-lg-6 d-flex flex-column " id="sign-ul">
        <h2 className=" fw-bold text-body-emphasis lh-1 mb-3">Stay updated!</h2>
        <p className="lead"  style={{fontFamily: "Roboto",  
    fontWeight: 'normal'}} > Join 60,000+ product managers receiving monthly updates on:</p>
        <ul style={{fontFamily: "Roboto",  
    fontWeight: 'normal'}} className='d-flex flex-column'>
          <li><img src={iconlist} alt="list-img" />Product discovery and building what matters</li>
          <li><img src={iconlist} alt="list-img" />Measuring to ensure updates are a success</li> 
          <li><img src={iconlist} alt="list-img" />And much more!</li>
        </ul>
        <label style={{fontWeight:'bold'}}>Email address<span>{error ? <p className='text-danger'>{error}</p>:null}</span> </label>
        <div className="d-flex flex-column">
          <input type='email' name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
          <button onClick={emailvalidation}>Subscribe to monthly newsletter</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Sign