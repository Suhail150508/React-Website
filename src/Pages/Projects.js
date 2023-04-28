import React from 'react'
import ResumeCart from './ResumeCart/ResumaCart'

const Projects = () => {
  return (
    <div>

   <div className='project row' style={{width:"100%",height:"auto",display:"flex",justifyContent:"space-between",marginTop:"4rem "}}>
   <div className='project-left col-sm-12 col-lg-6'>
        <p className='text-danger'>2023</p>
        <h2 className='font-text'>Projects</h2>
        <div className=' text-info 'style={{height:"830px",width:"100%",borderLeft:"10px solid black",marginLeft:"2rem",display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem"}}>
         <ResumeCart 
         title="Calculator"
         descr="It is my first project. It is made by using html, css, javascript , jquiry."
         />
         <ResumeCart 
         title="React-Portfolio"
         descr="It is my portfolio website . It has made by using html, css,bootstrap and javascript."
         />
         <ResumeCart 
         title="Ecommerce-Website "
         descr=" It is my Dynamic Ecommerce Website . It has made by using javascript ,react js ,node js and mongoDB."
         />
        </div> 
    </div> 
   <div className='project-right col-sm-12 col-lg-6'>
        <p className='text-danger'>2023</p>
        <h2 className='font-text'>Projects</h2>
        <div className=' text-info 'style={{height:"830px",width:"100%",borderLeft:"10px solid black",marginLeft:"2rem",display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem"}}>
         <ResumeCart 
         title="Calculator"
         descr="It is my first project. It is made by using html, css, javascript , jquery."
         />
         <ResumeCart 
         title="React-Portfolio"
         descr="It is my portfolio website . It has made by using html, css,bootstrap and javascript."
         />
         <ResumeCart 
         title="Ecommerce-Website "
         descr=" It is my Dynamic Ecommerce Website . It has made by using javascript ,react js ,node js and mongoDB."
         />
        </div> 
    </div> 
   
    </div>

    </div>
  )
}

export default Projects