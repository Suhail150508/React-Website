import React from 'react'
import './Portfolio.css'
import footer from '../Assests/footer1.jpg'
import Navbar from '../Navbar/Navbar';
import Myproject from '../My-project/My-project';
import Resume from '../Resume/Resume';
import Aboutme from '../Aboutme';
import Contactcode from '../Contactcode';
import MyService from '../MyService';
import HomeLeft from '../HomeLeft';
import HomeRight from '../HomeRight';
import Image from '../Image';


function Portfolio() {



  return (
    <div className='container-fluid'>

       <div className=' navmain fixed-top bg-dark'> 
      
        <Navbar/>
        </div>

         <div>

        <section class="row home mt-5">
        <div className='img1 col-sm-12 text-center'> <Image/> </div>
     
        <div className='col-lg-7 col-sm-12 text-center '> <HomeLeft/></div>
        <div className='col-lg-5  col-sm-12'>   <HomeRight/></div>
     
       </section>
       </div>
{/* ........about me from here....... */}
<div className='aboutme'>
<Aboutme/>
</div>


{/*......... my-servicess from here........... */}
<div >
<MyService/>

</div>


{/* ........my projects from here....... */}


<div >
  <Myproject/>
</div>
{/* ...............Resume from here..... */}

<div>
<Resume />

</div>
    {/*............ contact from here...... */}
    <div >
    <Contactcode/>
    </div>


      <div className='footer' >
        <div className='bg-footer' style={{position:"relative",height:"auto"}}>
          <img style={{height:"100vh",width:"100%"}} src={footer} alt="img"/>
          <div className='footer-info row  p-5 ' style={{position:"absolute",top:"2px",}}>
            <div className=' col-6 col-md-6 col-lg-3 mt-sm-2 mt-lg-5 ' style={{marginTop:"4rem"}}>
              <h2 style={{marginBottom:"2rem",color:"#f01e"}}>About Me</h2>
              <p className=''>
   I Am A Professional Web Designer And Developer.
   I Always Try My Best To Provide Good Work For My Clients,
   And Try To Fulfill There Requirements In Time.</p>
            </div>
            <div className='col-6 col-md-6 col-lg-3 mt-sm-2 mt-lg-5 '  style={{marginTop:"4rem"}}>
              <h2 style={{marginBottom:"2rem",color:"#f01e"}}>Servicess</h2>
              <p>Resposive Cv</p>
              <p>Website Design</p>
              <p>Frontend Design</p>
              <p>Backend Design</p>
            </div>
            <div className='col-6 col-md-6 col-lg-3  mt-lg-5'  style={{marginTop:"1rem"}}>
              <h2 style={{marginBottom:"2rem",color:"#f01e"}}>Languages</h2>
              <p>React js</p>
              <p>Javascript</p>
              <p> Bootstrap</p>
              <p> HTML</p>
            </div>
            <div className='col-6 col-md-6 col-lg-3  mt-lg-5 ' style={{marginTop:"1rem"}}>
              <h2 style={{marginBottom:"2rem",color:"#f01e"}}>Contact</h2>
              <p><i class="fa-solid fa-phone  text-warning"></i> +8801571320434</p>
              <p><i class="fa-brands fa-facebook text-warning"></i> Sohel Rana</p>
              <p><i class="fa-solid fa-at  text-warning"></i> sohail1054155@gmail.com </p>
              <p><i class="fa-brands fa-whatsapp text-warning"></i> Sohel Rana</p>
            </div>
          </div>
        </div>
        {/* <marquee className="mb-3 py-2"><span className='text-warning'>..........</span>

আল্লাহ ছাড়া কোন মালিক নেই | .......... আল্লাহ সব কিছুর উপর সর্বশক্তিমান।</marquee> */}
      </div>
      
    </div>
  )
}

export default Portfolio