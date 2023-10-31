import React from 'react'
import { Button } from 'flowbite-react';
import logo from '../images/logo1.jpeg'
import Navlinks from './Navlinks'
import '../index.css'
const Header = () => {
  return (
    <section className='py-3 px-20 border-b border-gray-300'>
       <nav className='flex justify-between items-center flex-row'> 
        <img src={logo} className='h-12' alt="Adaptive Learning" />
        <div className='grid grid-cols-5 gap-x-6'>
          <Navlinks navlink = "Home" />
        <Navlinks navlink = "About Us" />
        <Navlinks navlink = "Freebies" />
        <Navlinks navlink = "Blog" />
        <Navlinks navlink = "Contact Us" />
        </div>
        
        <div className="button">
         <Button gradientMonochrome="info" size="lg" >
          Login
         </Button>
        </div>
        
       </nav>
    </section>
  )
}

export default Header