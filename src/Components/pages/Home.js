import React from 'react'
import Header from '../Header'
import WhatsappButton from '../WhatsappButton'
import Youtube from '../Youtube'
import Testimonial from '../Testimonial'
import Footer from '../Footer'
import Carousel from '../Carousel'
import logo1 from '../images/logo.png'
import {  Card} from 'flowbite-react'
import { Icon } from '@iconify/react';
import MetaBox from '../MetaBox'
import AdapFeatures from '../AdapFeatures'
const Home = () => {

const adaptive = [
  {
    icon: flex,
    title: "Flexible Learning Environment",
    body: "Enjoy the convenience of learning from anywhere, at any time. Our online educational platform provides a flexible and accessible environment, allowing you to study at your own pace and fit your education around your schedule.",
  },
  {
    icon: vlearn,
    title: "Personalized Learning",
    body: "At Adaptive Learning, we believe that one size doesn't fit all. Our platform is designed to meet your unique learning needs. Whether you're a student, professional, or lifelong learner, we offer tailored courses and resources that adapt to your pace and goals.",
  },
  {
    icon: support,
    title: "Supportive Community",
    body: "Learning can be a social experience too. Our platform fosters a vibrant and inclusive learning community. Connect with fellow learners, instructors, and mentors. Share ideas, ask questions, and gain valuable insights from your peers.",
  },
  {
    icon: afford,
    title: "Affordability",
    body: "Quality education shouldn't break the bank. Adaptive Learning offers competitive pricing and flexible payment options. We're dedicated to making education accessible to everyone.",
  },
  {
    icon: quality,
    title: "Quality Content",
    body: "Our courses are created by experts in their respective fields. We provide a diverse range of up-to-date, high-quality content that's relevant to today's world, ensuring you gain valuable skills and knowledge that matter.",
  },
  {
    icon: progress,
    title: "Track Your Progress",
    body: "Monitor your achievements and progress with ease. Our platform offers comprehensive analytics and reporting, so you can visualize your growth and make data-driven decisions about your learning path.",
  },
];
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
        <section className=" px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-10 max-mobile:py-5 bg-primary-600">
      <h3 className="font-bold font-montserrat text-center text-white  text-7xl max-laptop:text-[54px] max-tablet:text-4xl max-mobile:text-3xl py-4 max-laptop:py-3">
        Why Choose <span className='text-logo_yellow'>ADAPTIVE LEARNING</span> 
      </h3>
     
    </section>
    {/* Modes of Learning */}
    <section className="px-20 py-10 bg-yellow-100">
    <h3 className="font-bold font-montserrat text-[54px] py-2">
       Our Modes of Learning
      </h3>
      <div className="py-10">
        <img src={mockup} alt="" />
      </div>
    </section>
    {/* Review Section */}
      
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home