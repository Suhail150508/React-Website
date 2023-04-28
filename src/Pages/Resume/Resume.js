import React,{useState} from 'react'
import Education from '../Education'
import Projects from '../Projects'
import Skills from '../Skills/Skills'
import './Resume.css'

const Resume = () => {

  const [education,setEducation]=useState(true)
  const [skills,setSkills]=useState(false)
  const [projects,setProjects]=useState(false)

  return (
    <div className='resume'  style={{width:"100%",height:"auto"}}>

<h1 className=' py-2' style={{
            borderBottom:"3px solid white",width:"15rem",margin:"auto",color:"#0fe",marginBottom:"3rem"
        }}>My-Resume</h1>
   <div className='div-resume text-center' style={{margin:"4rem",width:"87%",height:"auto" ,backgroundColor:"#212428",}}>
    <ul className='resume-ul d-flex mt-5 ' style={{justifyContent:"space-around"}}>
        <li className='li1 p-3 '><button 
          onClick={()=>
          setEducation(true)& 
          setSkills(false)&
          setProjects(false)} 
          className='btn-outline-secondary p-2 font-weight-bolder' style={{backgroundColor:"#212428", boxShadow:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",color:"#e0f"}}>Education</button></li>
        <li className=' li1 p-3 '><button 
     onClick={()=>
         setEducation(false)& 
         setSkills(true)&
         setProjects(false)} 
        className='btn-outline-secondary px-3 py-2 font-weight-bolder' style={{backgroundColor:"#212428", boxShadow:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",color:"#e0f"}}>Skills</button></li>
        <li className='li1 p-3 '><button 
 onClick={()=>
        setEducation(false)& 
        setSkills(false)&
        setProjects(true)} 
        
        className='btn-outline-secondary p-2 font-weight-bolder'style={{ boxShadow:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",backgroundColor:"#212428",color:"#e0f"}}>Projects</button></li>
    </ul>
   </div>
   <div >
   {
    education &&  <Education/>
   }
   {
    skills && <Skills/>
   }
   {
    projects && <Projects/>
   }
   </div>


      {/* <Education/> */}
      {/* <Projects/> */}
      {/* <Skills/> */}
     </div>
  )
}

export default Resume