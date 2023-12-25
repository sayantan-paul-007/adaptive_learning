import React from 'react'
import logo1 from '../Components/images/logo.png'
import { Icon } from '@iconify/react';
import playstore from './images/play_store.png'
import applestore from './images/apple_store.png'
const Footer = () => {
  return (
    <footer className='bg-primary-700 px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-8'>
        <div className="flex max-mobile:flex-col max-mobile:gap-8 justify-between ">
            <div className="flex flex-col w-1/5 max-tablet:w-[25%] max-mobile:w-full gap-4 justify-center">
            <div className='flex justify-center'>
            <img src={logo1} className='h-32 w-32' alt="" />
            </div>
            <div className="flex gap-4 items-center justify-start max-mobile:px-12">
            <Icon icon="vaadin:office" className='text-4xl max-mobile:text-3xl text-white' />
            <address className='text-lg text-white not-italic '>Imperial Tower, Patankar Park, Nalasopara (W)</address>
            </div>
            <div className="flex gap-4 items-center justify-start max-mobile:px-12 ">
            <Icon icon="fa-solid:mobile-alt" className='text-2xl max-mobile:text-xl text-white' />
            <a href="tel:+917387534593" className='text-lg text-white'>+917387534593</a>
           </div>
            </div>
            <div className='flex w-3/5 gap-20 max-mobile:flex-col max-mobile:w-full max-mobile:gap-4'>
                <div className="flex flex-col max-mobile:text-center w-1/5 max-tablet:w-[23%] max-mobile:w-full gap-4 justify-center">
            <h2 className="mb-3 text-2xl text-white font-semibold font-montserrat tracking-widest uppercase">About</h2>
                   <nav className="mb-10 list-none">
                       <li className="mt-3">
                           <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Company</a>
                       </li>
                       <li className="mt-3">
                           <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Careers</a>
                       </li>
                       <li className="mt-3">
                           <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Blog</a>
                       </li>
                   </nav>
            </div>
            <div className="flex flex-col max-mobile:text-center w-1/5 max-tablet:w-[23%] max-mobile:w-full gap-4 justify-center">
            <h2 className="mb-3 text-2xl text-white font-semibold font-montserrat tracking-widest uppercase">Support</h2>
                     <nav className="mb-10 list-none">
                        <li className="mt-3">
                             <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Contact Support</a>
                         </li>
                         <li className="mt-3">
                             <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Help Resources</a>
                         </li>
                         <li className="mt-3">
                             <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Release Updates</a>
                         </li>
                     </nav>
            </div>
            <div className="flex flex-col max-mobile:text-center w-1/5 max-tablet:w-[23%] max-mobile:w-full gap-4 justify-center">
            <h2 className="mb-3 text-2xl text-white font-semibold font-montserrat tracking-widest uppercase">Platform</h2>
                     <nav className="mb-10 list-none">
                        <li className="mt-3">
                             <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Terms &amp; Privacy</a>
                         </li>
                         <li className="mt-3">
                             <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">Pricing</a>
                         </li>
                         <li className="mt-3">
                             <a href='www.google.com' className="text-gray-500 cursor-pointer hover:text-gray-900 font-notosans">FAQ</a>
                         </li>
                     </nav>
            </div>
            </div>
            
        </div>
        <div className="flex py-8 gap-8 max-mobile:gap-4 justify-center w-full">
        <a href="https://www.google.com">
               <img src={playstore} height='200' width='200' alt="Play Store" />
             </a>
             <a href="https://www.google.com">
               <img src={applestore} height='200' width='200' alt="Apple Store" />
             </a>
        </div>
        <div className="flex pt-4 pb-8 gap-8 max-mobile:gap-4 justify-center w-full">
        <a href="https://t.me/adaptivelearning"><Icon icon="logos:telegram" className='text-5xl max-mobile:text-3xl' /></a>
        <a href="https://www.instagram.com/adaptive_learning/"><Icon icon="skill-icons:instagram" className='text-5xl max-mobile:text-3xl' /></a>
        <a href="https://www.youtube.com/channel/UCBrk7LnxpQFyxfLf-2F4arQ"><Icon icon="logos:youtube-icon" className='text-5xl max-mobile:text-3xl' /></a>
        <a href="https://www.facebook.com/adaplearning/"><Icon icon="logos:facebook" className='text-5xl max-mobile:text-3xl' /></a>
        </div> 
        <div className="text-center font-notosans text-lg">
        <p class="text-gray-600">&copy; <span class="current-year">2023</span> Adaptive Learning. All Rights Reserved.</p>
        
        </div>
    </footer>
  );
};

export default Footer;


