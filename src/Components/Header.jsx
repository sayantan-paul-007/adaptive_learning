import React, {useState} from 'react'
import { Button } from 'flowbite-react';
import logo from '../Components/images/logo-new.png'
import logomobile from '../Components/images/logo-mobile.png'
import '../index.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
    <section className='py-4 px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 justify-between w-full items-center border-b border-gray-300 '>
    <nav className='flex relative justify-between max-mobile:justify-center items-center flex-row bg-slate-50'> 
        <img src={logo} className='h-20 max-tablet:h-14 max-mobile:hidden' alt="Adaptive Learning" />
        <img src={logomobile} className='h-12 hidden max-mobile:block ' alt="Adaptive Learning" />
        <div className='grid grid-cols-5 gap-x-6 text-3xl max-laptop:text-2xl max-tablet:text-xl text-center max-mobile:hidden'>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/freebies">Freebies</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>       
        <div className="button block max-mobile:hidden">
         <Button className=' text-lg bg-primary-500' size="lg" >
          Login
         </Button>
        </div>
        <div className='hidden max-mobile:block tablet:block absolute right-0'>
        <Icon onClick={toggleMenu} className='text-2xl' icon="mdi:hamburger-menu" />
        </div>
       </nav>
       {isOpen && (
        <div className="w-2/5 z-50 px-5 py-3 rounded absolute  bg-logo_blue top-0 right-0">
          <div className='flex justify-end'>
          <Icon onClick={closeMenu} onFocus className='text-2xl' icon="carbon:close-outline" />
          </div>
          <ul className=' py-2 text-center'>
          <li className='py-1'><Link to="/">Home</Link></li>
            <li className='py-1'><Link to="/about">About Us</Link></li>
            <li className='py-1'><Link to="/freebies">Freebies</Link></li>
            <li className='py-1'><Link to="/blog">Blog</Link></li>
            <li className='py-1'> <Link to="/contact">Contact Us</Link></li>
            <li className='py-2 flex justify-center'><Button className=' text-lg bg-primary-500' size="lg" >
          Login
         </Button></li>
          </ul>
        </div>
      )}
    </section>
        </>
  )
}
export default Header