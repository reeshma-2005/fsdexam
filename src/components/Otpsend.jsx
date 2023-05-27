import React from 'react'
import { useNavigate } from 'react-router-dom'
const Otpsend = () => {
    const navigate=useNavigate();
    const otppage=()=>{
        navigate("/otp")
    }
    const [otpdata,setOtpData]=useState({
        
      otp:''
  })
  
  
  const otpSubmit = () => {

      //const data1 = { otp }

     // console.log(data1)
      axios.post(`http://localhost:3002//addOtpemail`,otpdata)
          .then((response) => {

              if (response.status == 200) {
                  {
                      alert("OTP sent successfully")
                      navigate('/otppage')
                  }

              }
              else {
                  alert(response.status)
              }
          })
          .catch((error) => {
              console.log(error)
          })      
     
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
                  <input type="text" placeholder='Enter Email' name="email" className='form-control rounded-0' />
               </div>
               
               
               
               
               <button type="button" className='btn btn-success' onClick={otpSubmit} >Submit</button>
             </form>
         </div>
     </div>
  )
}

export default Otpsend