import React from 'react'
import myImage from './Assests/300@300.jpg'

const Image = () => {
  return (
    <div className='image1' style={{width:"100%", marginTop:"7rem" }}>
        <img src={myImage} alt="img" style={{height:"200px",width:"200px",borderRadius:"100px",margin:"auto"}}/>
    </div>
  )
}

export default Image