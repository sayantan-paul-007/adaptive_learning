import React from 'react'
import Adaptive from '../adaptive.json'
import flex from '../images/flexibility.png'
import vlearn from '../images/virtual-class.png'
import support from '../images/care.png'
import afford from '../images/affordable.png'
import quality from '../images/high-quality.png'
import progress from '../images/tracking.png'
import mockup from '../images/mockup.png'
const AdapFeatures = () => {
  return (
    <section className=" px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-10 max-mobile:py-5 bg-primary-600">
      <h3 className="font-bold font-montserrat text-center text-white  text-7xl max-laptop:text-[54px] max-tablet:text-4xl max-mobile:text-3xl py-4 max-laptop:py-3">
        Why Choose <span className='text-logo_yellow'>ADAPTIVE LEARNING</span> 
      </h3>
      <div className="rounded-xl px-28 gap-8 py-10 grid grid-cols-3 font-notosans justify-around ">
        {/* {Adaptive && Adaptive.map( (adapt) =>{
            return(
                
            )
        }  )} */}
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
  )
}

export default AdapFeatures