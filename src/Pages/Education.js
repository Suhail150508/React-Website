import React from 'react'
import ResumeCart from './ResumeCart/ResumaCart'

const Education = () => {
  return (
    <div style={{width:"100%",height:"auto"}}>

   <div className='education row' style={{display:"flex",justifyContent:"space-between",marginTop:"1rem "}}>
   <div className='col-sm-12 col-lg-6'>
        <p className='text-danger'>2014-2015</p>
        <h3 className='font-text'>Education Quality</h3>
        <div className=' text-success 'style={{height:"830px",width:"100%",borderLeft:"10px solid black",marginLeft:"2rem",display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem",}}>
         <ResumeCart 
         title="B.Sc.in ( ETE ) "
         descr="I Have Completed My Graduation In Electronics and Telecommunication Engineering (ETE), From Pabna University Of Science And Technology, Pabna In 2022. "
         />
         <ResumeCart 
         title="HSC in Science"
         descr="Chirirbandar, Dinajpur"
         />
         <ResumeCart 
         title="SSC in Science "
         descr=" Chirirbandar ,Dinajpur"
         />
        </div> 
    </div> 
    <div className='col-sm-12 col-lg-6'>
        <p className='text-danger'>2014-2015</p>
        <h3 className='font-text'> Programming Quality</h3>
        <div className=' text-primary 'style={{height:"830px",width:"100%",borderLeft:"10px solid black",marginLeft:"2rem",display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem"}}>
         <ResumeCart 
        title='Static Website'
        descr="A static website is made up of a fixed number of pre-built files stored on a web server. These files are written in HTML, CSS, and JavaScript, which are called “client-side” languages because they execute in the user’s web browser. When a user requests a page from the server with a URL, the server returns the HTML file that is specified by the URL and any accompanying CSS and/or JavaScript files. "
         />
         <ResumeCart 
          title='Dynamic Website'
          descr="A Dynamic Website (also referred to as a database-driven site) requires web programming and database design. A dynamic website contains information and content that changes, depending on factors such as the viewer of the site, the time of the day, the time zone, or the native language of the country the viewer). The content of your site (text/images) is stored on a database or content management system. When the information is updated or changed within the database, it changes on the site."
         />
         <ResumeCart 
          title='Frontend Design'
          descr="Front-end developers turn designs into reality. In the context of web development, front-end development is the practice of producing HTML, CSS, and presentational JavaScript code for a website or web app so that a user can see and interact with a product directly. To create a product with a good user experience, front-end developers should understand the impact front-end coding has on website performance. This article provides an overview of front-end UX design with steps and tips for improving website performance."
         />
        </div> 
    </div>   
    </div>

    </div>
  )
}

export default Education