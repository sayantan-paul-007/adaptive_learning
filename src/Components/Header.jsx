import React from 'react'
import { Button } from 'flowbite-react';
import logo from '../Components/images/logo-new.png'
import logomobile from '../Components/images/logo-mobile.png'
import '../index.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <section className='py-3 desktop:px-[120px] laptop:px-20 tablet:px-10 mobile:px-8 mobile:py-4 justify-between w-full items-center border-b border-gray-300'>
       <nav className='flex justify-between max-laptop:justify-center items-center flex-row bg-slate-50'> 
        <img src={logo} className='h-[60px] desktop:h-20 laptop:block mobile:hidden max-mobile:hidden' alt="Adaptive Learning" />
        <img src={logomobile} className='h-12 tablet:h-16  laptop:hidden ' />
        <div className='hidden grid-cols-5 gap-x-6 text-xl text-center laptop:grid '>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/freebies">Freebies</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        
        <div className="button hidden laptop:block">
         <Button className=' text-lg bg-primary-500' size="lg" >
          Login
         </Button>
        </div>
       </nav>
    </section>
  )
}

export default Header