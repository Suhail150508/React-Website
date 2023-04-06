import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import FullDescription from '../FullDescription'
import Home from '../Home/Home'
import Service from '../Servicess/Service'



function Layout() {
  return (
<BrowserRouter>
<Routes>


<Route path='/' element={<Home/>}/>
<Route path='/:title' element={<FullDescription/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/service/:title' element={<FullDescription/>}/>
<Route path='/resumeCart/:title' element={<FullDescription/>}/>
<Route path='/contact' element={<Contact/>}/>

</Routes>


</BrowserRouter>

  )
}

export default Layout