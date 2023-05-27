import React from 'react'
import { useState } from 'react';
import axios from 'axios'
const Emailotpsave = () => {

const [email,setEmail]=useState({
    email:'',
    otp:''
})

const inputHandler=(event)=>{
    event.preventDefault();
    const {name,value}=event.target
    setEmail((previousState)=>({
        ...previousState,
        [name]:value
    }))
}

const addEmail=async(e)=>{
    e.preventDefault();
    const res1=axios.post("http://localhost:3002/addemail",email)
      
          console.log(res1)
          if (res1.statusText==="OK") {
            alert("Items successfully Added");
          }
      }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-200'>
         
         <div className='bg-white p-3 rounded w-50' >
             <form action=''>
               <div className='p-3 w-20'>
                 <h1>OTPSEND</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='Email'>Email</label>
                  <input type="text" placeholder='Enter Email' name="email" className='form-control rounded-0' onChange={inputHandler} value={email.email}/>
               </div> 
               
               
               <div className='mb-3'>
                  <label htmlFor='otp'>otp</label>
                  <input type="text" placeholder='Enter otp' name="otp" className='form-control rounded-0' onChange={inputHandler} value={email.otp}/>
               </div>
               
               
               <button type="button" className='btn btn-success' onClick={addEmail} >Submit</button>
             </form>
         </div>
     </div>
  )
}

export default Emailotpsave