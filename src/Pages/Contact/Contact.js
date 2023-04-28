import React from 'react'
import Navbar from '../Navbar/Navbar'
import contactImage from '../Assests/contact-image1.jpg'
import './Contact.css'

function Contact() {
  const handleSubmit=()=>{
alert("Successfull")

  }
  return (
    <div>
      <Navbar/>
<div className='bg-dark py-2'>
<h1 className='text-center text-white '> Contact Us</h1>
</div>
  
 <div className=' conatact bg-secondary text-center  pb-4 d-flex'>

<div className='contact-left'>

<img className=' contact-image img-fluid' src={contactImage} alt="img"/>
</div>
        <div className='contact-right'>
        <form onSubmit={handleSubmit}>
          <label className=' label mt-4'>Username: <input className='input1 ' type="text" required name="username" placeholder='username'/></label><br/>
          <label className=' label mt-4'>Email: <input className='input2 ' type="text" required name="email" placeholder='email'/></label><br/>
          <label className=' label mt-4'>Password: <input className='input3 ' type="text" required name="password" placeholder='password'/></label><br/>
          <label className=' label mt-4'>Description: <input className='input4 ' type="textarea" required name="description" placeholder='description'/></label><br/>
          <button className='btn btn-outline-praimary text-center text-danger bg-warning p-2 mt-4' type='submit'>Submit</button>
        </form>      
        </div>

      </div>
    </div>
  )
}

export default Contact