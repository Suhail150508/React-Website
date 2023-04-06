import React from 'react'
import Navbar from '../Navbar/Navbar'
import calculator from '../Assests/Capture.jpg'
import portfolio from '../Assests/Capture3.jpg'
import ststic from '../Assests/static-website.jpg'
import dynamic from '../Assests/dynamic-website.jpg'
import resume from '../Assests/Resume.jpg'
import ecommimg from '../Assests/Ecom-img.jpg'
import frondend from '../Assests/frontend image.jpg'
import backend from '../Assests/backend image.jpg'
import './About.css'


export const servicess = [
  {
    title:'Static Website',
    img:ststic ,
    descr:"A static website is made up of a fixed number of pre-built files stored on a web server. These files are written in HTML, CSS, and JavaScript, which are called “client-side” languages because they execute in the user’s web browser. When a user requests a page from the server with a URL, the server returns the HTML file that is specified by the URL and any accompanying CSS and/or JavaScript files."
  },
  {
    title:'Dynamic Website',
    img:dynamic ,
    descr:"A Dynamic Website (also referred to as a database-driven site) requires web programming and database design. A dynamic website contains information and content that changes, depending on factors such as the viewer of the site, the time of the day, the time zone, or the native language of the country the viewer). The content of your site (text/images) is stored on a database or content management system. When the information is updated or changed within the database, it changes on the site."
  },
  {
    title:'Frontend Design',
    img:frondend ,
    descr:"Front-end developers turn designs into reality. In the context of web development, front-end development is the practice of producing HTML, CSS, and presentational JavaScript code for a website or web app so that a user can see and interact with a product directly. To create a product with a good user experience, front-end developers should understand the impact front-end coding has on website performance. This article provides an overview of front-end UX design with steps and tips for improving website performance."
  },
  {
    title:'Backend Design',
    img:backend ,
    descr:"Backend web architecture allows website designers to have more control over their environment by allowing a program's logic to operate with the user having to see every detail of the code. This creates more user-friendly environments by making sure the user can focus on enjoying the features of the finished webpage."

  
  },

]

export const projects = [
  {
    name:'Calculator',
    img:calculator ,
    title:"This is my good project"
  },
  {
    name:'Portfolio',
    img:portfolio ,
    title:"My Portfolio-Project"
  },
  {
    name:'Resume',
    img:resume ,
    title:"My Responsive-Resume"
  },
  {
    name:'E-Website',
    img:ecommimg ,
    title:"My ecommerce website"
  },

]

function About() {
  return (
    <div   >
      <Navbar/>
      <div className='text-warning text-center'>
        <h1 style={{color:"white"}}>My Projects</h1>
        <div className='projects' >
     {
projects.map((project)=>(

  <div className='project'>
    <h3>{project.name}</h3>
    <img src={project.img} alt="img"/>
    <h5>Github: <a className='text-white' href="https://suhail150508.netlify.app/">link</a></h5>
  </div>
))

     }
        </div>
      </div>
    </div>
  )
}

export default About