import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar';




function FullDescription() {
    const {title} =useParams();
    const location=useLocation();


  return (
    <div>
        <Navbar/>
        <div className=''style={{width:"70%", margin:"auto",fontSize:"1.3rem",padding:"5rem"}}>
        <h2 style={{fontWeight:"bolder"}}>{title}</h2>
<p>  {location.state.descr.slice(0,300)}  </p>
<p>  {location.state.descr.slice(300,500)}  </p>
        </div >

    </div>
  )
}

export default FullDescription