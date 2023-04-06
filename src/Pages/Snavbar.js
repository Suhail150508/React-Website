import React from 'react'
import { Link } from 'react-router-dom'
import './Snavbar.css'

const Snavbar = () => {

  return (
<div>


<ul className='nav1 '>

            <li ><Link className='nb '  to="/" style={{textDecoration:"none",
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem" }}>Home</Link></li>
            <li><Link className='nb' to="/about" style={{textDecoration:"none",
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>About</Link></li>
            <li><Link className='nb' to="/service" style={{textDecoration:"none",
             textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>Service</Link></li>
            <li> <Link className='nb' to="/contact" style={{textDecoration:"none",  
            textAlign:"center",fontSize:"1.8rem",marginTop:".1rem"}}>Contact</Link></li>
        </ul>
</div>
  )
}

export default Snavbar