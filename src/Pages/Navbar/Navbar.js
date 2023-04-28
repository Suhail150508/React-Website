import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Snavbar from '../Snavbar';
import './Navbar.css'

function Navbar() {

 const [openBtn, setOpenBtn]=useState(true);
const [clossBtn, setCloseBtn]=useState(false);
const [newNavbar, setNewNavbar]=useState(false);



  return (
    <main >
 <div class="header  ">
            <div class="logo">
               <h1><span style={{color:"#0e2",fontSize:"2.5rem"}}>J</span>unaid</h1> 
            </div>


             {
              newNavbar &&  <Snavbar/>
             }
    
           <ul className='navbar'>
            <li><NavLink className='nblink'  to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
            <li><NavLink className='nblink' to="/about" style={{textDecoration:"none"}}>About</NavLink></li>
            <li><NavLink className='nblink' to="/service" style={{textDecoration:"none"}}>Service</NavLink></li>
            <li><NavLink className='nblink' to="/contact" style={{textDecoration:"none"}}>Contact</NavLink></li>
           </ul>

 
            {

              openBtn && <button class="open-btn"onClick={()=>
                setOpenBtn(false)&
                setCloseBtn(true)&
                setNewNavbar(true)
              } style={{margin:"2rem"}}><i class="fa-solid fa-bars"></i></button>
            }
            {

              clossBtn && <button class="closs-btn" onClick={()=>
                setOpenBtn(true)&
                setCloseBtn(false)&
                setNewNavbar(false)
              
              } ><i class="fa-solid fa-xmark"></i></button>
            }
            
           
        </div>

      
    </main>
  )
}

export default Navbar