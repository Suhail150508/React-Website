import React from 'react'
import { Link } from 'react-router-dom'
import { servicess } from '../About/About'
import Navbar from '../Navbar/Navbar'
import './Service.css'

function Service() {


  const concateData=(descr,num)=>{
if(descr.length > num )
{
    return descr.slice(0,num )+"..."
}
else{
    return descr;
}

  }

  return (
    <div>
      <Navbar/>
        <h1 className=' py-2' style={{
            borderBottom:"3px solid white",width:"15rem",margin:"auto",color:"#0fe",marginBottom:"3rem"
        }}>My-Servicess</h1>

        <div className=' servicess '> 
   {
    servicess.map((item )=>{
        const {descr,title,img} =item;
return (
<article >
  <div className='service  '>
    <h2>{title}</h2>
    <img src={img} alt="img"/>
    <p>{concateData(descr, 90)}</p>
    <Link to={title} state={{descr}}>Learn More</Link>

  </div>

</article>
)
    }
        
    )
   }

    </div> 
    </div>
   
  )
}

export default Service