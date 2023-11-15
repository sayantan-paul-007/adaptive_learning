import React from 'react'
import { Button } from 'flowbite-react';
import logo from '../Components/images/logo-new.png'
import '../index.css'
const Header = () => {
  return (
//     <section className='py-3 px-20 h-30'>
// {/* <img src={logo} className='h-13' alt="Adaptive Learning" /> */}
//     </section>

    <section className='py-3 px-20 h-[90px]  justify-between w-full items-center border-b border-gray-300'>
       <nav className='flex justify-between items-center flex-row bg-slate-50'> 
        <img src={logo} className='h-[60px]' alt="Adaptive Learning" />
        <div className='grid grid-cols-5 gap-x-6 text-xl'>
        <a href="https://www.google.com">Home</a>
        <a href="https://www.google.com">About Us</a>
        <a href="https://www.google.com">Freebies</a>
        <a href="https://www.google.com">Blog</a>
        <a href="https://www.google.com">Contact Us</a>
        </div>
        
        <div className="button">
         <Button className='text-lg bg-primary-500' size="lg" >
          Login
         </Button>
        </div>
        
       </nav>
    </section>
  )
}

export default Header