import React from 'react'
import contactImage from './Assests/contact-image1.jpg'
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';







function Contactcode() {
 const navigate=useNavigate();
const initialValues = { username: "", email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  valit(formValues)


};

useEffect(() => {
  // console.log(formErrors);
  if (Object.keys(formErrors).length === 0 ) {
    // console.log(formValues), 

  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  } 
  return errors;

};

const valit =(values)=>{
  if(values.email && values.username && values.password){
    setIsSubmit(true)

       }

}



  return (
    <div > 
      <div className='bg-dark contact-section py-2'>
         <h1 className=' py-2' style={{
        width:"15rem",margin:" auto",color:"#0fe",marginBottom:"3rem",
        }}>Contact Me</h1>
    
     <div className=' conatact  bg-secondary text-center pb-4 ' style={{display:"flex",flexWrap:"wrap"}}>
    
    <div className='col-12 col-lg-6 text-center ' >
    
    <img className=' contact-image img-fluid'style={{height:"100%"}} src={contactImage} alt="img"/>
    </div>

 
            <div className=' col-12 col-lg-6 text-center'>
  <form onSubmit={handleSubmit}>
        <h2 style={{marginTop:" 2rem",marginBottom:"2rem",color:"#f0e"}}>Login Form</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input style={{marginLeft:"2rem"}}
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{formErrors.password}</p>
          <button className="fluid ui button blue" style={{backgroundColor:"#9E4",padding:".5rem", borderRadius:"5px"}}>Submit</button>

        </div>

        </form>    
        {

isSubmit &&
  // console.log(formValues), 
  Swal.fire(  
    'Successfull!',
    'Thanks.',
    'success'
  )
 
  && navigate("/")
 

} 
            </div>




          </div>

          </div>
          </div>
  )
}

export default Contactcode









