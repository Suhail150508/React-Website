import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'



const ResumeCart = ({title,descr}) => {

const concate =(descr,num)=>{

if(descr.length > num){

 return descr.slice(0, num)+"..."
}
else{

  return descr;
}
}

  return (
    <main>
    <div style={{marginLeft:"2rem",position:"relative",}}>
         <div className='light1' style={{height:"35vh",width:"70%",backgroundColor:"#212428",  boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",marginTop:"1.5rem"}}>
            <div style={{width:"3rem",height:".5rem",position:"absolute",marginTop:"3rem",marginLeft:"-2.5rem",backgroundColor:"#212"}} >
                <span className='light' style={{height:"25px",width:"25px",top:"-.3rem",left:"-8px", borderRadius:"12px",backgroundColor:"black",position:"absolute",}}><span style={{height:"12px",width:"12px",borderRadius:"6px",backgroundColor:"red",position:"absolute",top:"6.5px",left:"5.9px"}}></span></span>
            </div>
            <div className='text-center p-3'>
          <h3 className='text-primary'>{title}</h3>
          <p>{concate(descr,50)}</p>
          <Link to={title}  state={{descr}} style={{color:"#e0f"}}>learn more</Link>
            </div>

         </div>
   
    </div>
    </main>
  )
}

export default ResumeCart