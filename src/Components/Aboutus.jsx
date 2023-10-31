import React from 'react'
import logo from '../images/logo.png'
import {Button} from 'flowbite-react'
const Aboutus = () => {
  return (
    <section className='px-20 py-10 flex flex-row justify-around items-center bg-zinc-400'>
        <div className=' text-left w-3/5'>
            <h3 className='font-semibold text-[54px] py-2'>
                About Us
            </h3>
            <p>
            Adaptive Learning is an interactive video platform that teaches academic concepts through hands-on methods, focusing on practical outcomes. It strives to make education accessible to all by using technology to deliver current knowledge and important causes. Embracing a tech-driven future, it follows the Three E's philosophy: ENGAGE, EDUCATE, and ENLIGHTEN. By merging traditional and modern teaching, it offers a balanced learning experience.
            </p>
            <Button gradientDuoTone="purpleToBlue" className='my-8'> 
        Purple to Blue
      </Button>
        </div>
        <div className='flex flex-row hover:bg-red-400 w-2/5 justify-center'>
            <img src={logo} alt='Adaptive Logo' />
        </div>
    </section>
  )
}

export default Aboutus