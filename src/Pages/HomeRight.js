import React from 'react'
import picture from './Assests/Picture9.png'


const HomeRight = () => {
  return (
    <div className='home-right col-lg-6 ' style={{marginTop:"10rem",marginLeft:"5rem"}}>  
     <div className='home-image  '>
    <img  style={{backgroundColor:"#212428",boxShadow:"10px 10px 19px #1c1e22 -10px -10px 19px #262a2e"}} src={picture} alt="img"/>
   </div>
  </div>
  )
}

export default HomeRight