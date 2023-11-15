import React from 'react'
import Header from '../Header'
import WhatsappButton from '../WhatsappButton'
import Youtube from '../Youtube'
import Testimonial from '../Testimonial'
import Footer from '../Footer'
import logo1 from '../images/logo.png'
import { Carousel, Card} from 'flowbite-react'
import { Icon } from '@iconify/react';
import flex from '../images/flexibility.png'
import vlearn from '../images/virtual-class.png'
import support from '../images/care.png'
import afford from '../images/affordable.png'
import quality from '../images/high-quality.png'
import progress from '../images/tracking.png'
import mockup from '../images/mockup.png'
const Home = () => {
  const metaboxdata = [
    {
        iconlink:"iconoir:youtube",
        count: 300000,
        text: "Views on YouTube"
    },
    {
        iconlink:"carbon:time",
        count: 232000,
        text: "Watch Hours"
    },
    {
        iconlink:"ph:users-four-light",
        count: 40600,
        text: "Subscribers"
    },
    {
        iconlink:"fluent:video-recording-20-regular",
        count: 8000,
        text: "Recorded Content"
    }
];
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
       {/* Hero Section */}
        <div className=' py-4 flex justify-center bg-red-100'>
      <div className=" bg-violet-700 w-4/5 rounded-md">
     <div className="h-[480px]">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
      </div>    
    </div>
        
        {/* Meta Box Section */}
        <section className='w-full py-5 rounded-lg bg-slate-100 flex flex-row justify-center'>
        <div className='bg-primary-500 rounded-xl shadow-xl px-5 py-3 w-[65%] flex flex-row justify-around '>
            {
                metaboxdata.map((meta) =>(
                   <div className='text-accent-500 flex flex-col w-full items-center'>
                    <div className='py-2'><Icon icon={meta.iconlink} className='text-5xl ' /></div>
                    
                        <p className='text-2xl font-bold'>
                             {meta.count}+
                        </p>
                       
                        <p className='text-lg'>
                        {meta.text}
                    </p>
                   </div>
                  
                    
                )
                )
            }
        </div>
    </section>
        {/* About Section */}
        <section className='px-20 py-10 flex bg-neutral-300 flex-row justify-around items-center gap-10'>
        <div className=' text-left w-8/12'>
            <h3 className='font-bold font-montserrat text-[54px] py-2'>
                About <span className='text-logo_pink'>Us</span>
            </h3>
            <p className='font-notosans text-base'>
            Adaptive Learning is an interactive video platform that teaches academic concepts through hands-on methods, focusing on practical outcomes. It strives to make education accessible to all by using technology to deliver current knowledge and important causes. Embracing a tech-driven future, it follows the Three E's philosophy: ENGAGE, EDUCATE, and ENLIGHTEN. By merging traditional and modern teaching, it offers a balanced learning experience.
            </p>
            <button className='my-8 text-lg font-semibold text-white rounded-lg py-2 px-6 bg-logo_blue'> 
        Know More
      </button>
        </div>
        <div className='flex flex-row w-2/5 justify-center'>
            <img src={logo1} alt='Adaptive Logo' className='w-full' />
        </div>
    </section>
        <Youtube />
        {/* Why choose Adaptive Learning */}
        <section className="px-20 py-10 bg-primary-600">
      <h3 className="font-bold font-montserrat text-white text-[54px] py-2">
        Why Choose <span className='text-logo_yellow'>ADAPTIVE LEARNING</span> 
      </h3>
      <div className="rounded-xl px-28 gap-8 py-10 grid grid-cols-3 font-notosans justify-around ">
        {adaptive.map((adap) => (
          <Card className="shadow-lg ">
            <div className="flex justify-center">
              <img src={adap.icon} className="h-[100px] w-[100px]" alt="Flexibility" />
            
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{adap.title}</p>
            </h5>
            {/* <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
              <p>{adap.body}</p>
            </p> */}
          </Card>
        ))}
      </div>
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