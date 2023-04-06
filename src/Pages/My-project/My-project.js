import React from 'react'
import { projects } from '../About/About'

const Myproject = () => {
  return (
    
<div className='container'>
    <div className=' mt-5 text-white text-center'style={{width:"100%",height:"100vh"}}>
    <h1 className=' py-3 mb-5'style={{width:"220px",margin:"0 auto",color:"#0fe",borderBottom:"4px solid white",marginTop:"15rem"}}>My Projects</h1>
    <div className='projects'style={{flexWrap:"wrap"}}>
  {
projects.map((project)=>{
return(
<article>
<div className='project'>
<h1>{project.name}</h1>
<img src={project.img} alt="img"/>
<h5><a  href='https://github.com/Suhail150508'><i class="fa-brands fa-github  " style={{fontSize:"1.4rem",color:"red",border:"1px solid white",padding:"4px",borderRadius:"15px",marginLeft:"8rem"}}></i></a></h5>
</div>
</article>
)
})
}
    </div>
  </div>
  </div>
  )
}

export default Myproject