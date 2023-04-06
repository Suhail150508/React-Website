import React from 'react'
import Typed from 'react-typed';

const HomeLeft = () => {
  return (
    <div >   
        
   <div class="home-content text-center col-lg-8  " style={{marginTop:"10rem"}}>
    <h3> <span style={{color:"#f0e",fontSize:"1.9rem"}}>Hello</span>, It's Me</h3>
    <h1 class="hi py-3" >Suhail</h1>
    <h3> And I'm a...    

    <Typed  
            strings={[ " Frontend Developer.","Backend Developer.",'B.Sc. Engineering in ETE']}
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            loop={true}
           
        />

  
       </h3>
    <p className='para'>I Am A Web Designer And Developer.This Website has designed by using html,css,Bootstrap,javascript and react js.</p>
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