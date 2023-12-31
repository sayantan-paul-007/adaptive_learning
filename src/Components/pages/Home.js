import React from 'react'
import Header from '../Header'
import WhatsappButton from '../WhatsappButton'
import Youtube from '../Youtube'
import Testimonial from '../Testimonial'
import Footer from '../Footer'
import Carousel from '../Carousel'
import logo1 from '../images/logo.png'
import mockup from '../images/mockup-new.png'
import mockuppc from '../images/desktop-mockup.png'
import mockuplaptop from '../images/laptop-mockup.png'
import mockuptablet from '../images/tablet-mockup.png'
import mockupmobile from '../images/mobile-mockup.png'
import MetaBox from '../MetaBox'
import AdapFeatures from '../AdapFeatures'
const Home = () => {
  return (
    <div>
      <WhatsappButton />
        <Header />
        <section className="py-5 px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 ">
           <Carousel />
        </section>  
        <MetaBox />     
        {/* About Section */}
        <section className='px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-8   bg-neutral-300 '>
        <h3 className='font-bold text-center hidden font-montserrat text-[54px] py-2 max-mobile:block'>
                About <span className='text-logo_pink'>Us</span>
            </h3>
            <div className=' flex flex-row max-mobile:flex-col-reverse justify-around items-center gap-10'>
            <div className=' text-left w-8/12 max-mobile:w-full'>
            <h3 className='font-bold max-mobile:hidden font-montserrat text-7xl max-laptop:text-[54px] py-4 max-laptop:py-3'>
                About <span className='text-logo_pink'>Us</span>
            </h3>
            <p className='font-notosans max-laptop:text-base text-2xl py-3 max-laptop:py-0'>
            Adaptive Learning is an interactive video platform that teaches academic concepts through hands-on methods, focusing on practical outcomes. It strives to make education accessible to all by using technology to deliver current knowledge and important causes. Embracing a tech-driven future, it follows the Three E's philosophy: ENGAGE, EDUCATE, and ENLIGHTEN. By merging traditional and modern teaching, it offers a balanced learning experience.
            </p>
            <button className='my-8 py-6 px-8 text-2xl max-laptop:text-lg font-semibold text-white rounded-lg max-laptop:py-2 max-laptop:px-6 bg-logo_blue'> 
        Know More
      </button>
        </div>
        <div className='flex flex-row w-2/5  max-mobile:w-full justify-center'>
            <img src={logo1} alt='Adaptive Logo' className='max-mobile:w-4/5 max-laptop:w-full w-4/5' />
        </div>
            </div>
      
    </section>
        <Youtube />
        {/* Why choose Adaptive Learning */}
        <AdapFeatures />
    {/* Modes of Learning */}
    <section className="px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-4 py-8 bg-yellow-100">
    <h3 className="font-bold text-center font-montserrat text-7xl max-laptop:text-[54px] max-tablet:text-5xl max-mobile:text-4xl py-2">
       Our Modes of Learning
      </h3>
      <div className="py-4">
        <img src={mockup} className='max-mobile:hidden' alt="" />
        <div className='flex-col w-full hidden max-mobile:flex'>
          <img src={mockuppc} className='py-3' alt="..." /><img src={mockuplaptop} className='py-3' alt="..." /><img src={mockuptablet} className='px-12 py-3' alt="..." /><img src={mockupmobile} className='py-3 px-12' alt="..." />
        </div>
      </div>
    </section>
    {/* Review Section */}
        <Testimonial />
        <Footer />
        
    </div>
  )
}

export default Home