import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div>
 <div className="skills-para"style={{borderBottom:"3px solid white",paddingBottom:"1.3rem",fontSize:"1.3rem",textAlign:"center",width:"18%",color:"#0fe",fontWeight:"bolder"}}>MY SKILL'S</div>

<div className="skills" style={{marginRight:"5rem"}}>

  <div classsName="skills1">
   <div className="div1" style={{marginLeft:"4rem"}}>HTML <span>80%</span> </div>
  <div className="bar1"></div>
  </div>
<div className="skills2">
   <div className="div2">CSS <span>70%</span> </div>
   <div className="bar2"></div>
</div>
<div className="skills3">
   <div className="div3">JAVASCRIPT <span>55%</span> </div>
   <div className="bar3"></div>
</div>
<div className="skills4">
   <div className="div4">React js <span>60%</span> </div>
   <div className="bar4"></div>
</div>
<div className="skills5">
   <div class="div5">Node js <span>40%</span> </div>
   <div class="bar5"></div>
</div>
 
</div>

    </div>
  )
}

export default Skills