import React from 'react'
import Typed from 'react-typed';
import './HomeLeft.css'

const HomeLeft = () => {
  return (
    <div >   
        
   <div class="home-content  " >
    <h3> <span style={{color:"#f0e",fontSize:"1.3rem"}}>Asslamu-Alaikum</span></h3>
    <h1 class="hi py-3" > <span>I am </span>Sohel Rana</h1>
    <h3> And I'm a...    

    <Typed className='type'
            strings={[ " Frontend Designer.","Backend Developer.",'B.Sc. Engineering in ETE']}
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            loop={true}
           
        />

       </h3>
   <h5 className='para'>It is Portfolio Project . This project is designed by using html-5, CSS-3, Bootstrap, Javascript, React js</h5>
   <div class="social-media">
    <a href="https://www.facebook.com/profile.php?id=100008827057336"><i class="fa-brands fa-facebook " style={{color:"#ff014f"}}></i></a>
    <a href="https://www.youtube.com/watch?v=kS3HK5dtVGg"><i class="fa-brands fa-square-youtube "  style={{color:"#ff014f"}}></i></a>
    <a href="https://www.linkedin.com/jobs/full-stack-developer-jobs/?currentJobId=3415408448&originalSubdomain=bd"><i class="fa-brands fa-linkedin "  style={{color:"#ff014f"}}></i></a>
    <a href="https://www.facebook.com/profile.php?id=100008827057336"><i class="fa-brands fa-whatsapp "  style={{color:"#ff014f"}}></i></a>
   </div>
   <br/>
   <div class="btn">
    <a href="https://github.com/Suhail150508/Responsive-CV">Download CV</a>
  </div>
</div>
</div>
  )
}

export default HomeLeft
