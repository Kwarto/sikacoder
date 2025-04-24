import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, Intern, Network, Services } from '../pages'

const RouterNavigation = () => {
  return (
    <>
     <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/internship' element={<Intern />} />
        <Route path='/network' element={<Network />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
     </Routes>
    </>
  )
}

export default RouterNavigation