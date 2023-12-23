import React from 'react'
import Adaptive from '../adaptive'
const AdapFeatures = () => {
  return (
    <section className=" px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-10 max-mobile:py-5 bg-primary-600">
      <h3 className="font-bold font-montserrat text-center text-white  text-7xl max-laptop:text-[54px] max-tablet:text-5xl max-mobile:text-3xl py-4 max-laptop:py-3">
        Why Choose <span className='text-logo_yellow'>ADAPTIVE LEARNING</span> 
      </h3>
      <div className="rounded-xl max-laptop:px-28 max-tablet:px-16 max-mobile:px-10 gap-8 py-14 max-laptop:py-10 max-mobile:py-5 grid grid-cols-3 max-mobile:grid-cols-1 font-notosans justify-around ">
        {Adaptive && Adaptive.map( (adapt) =>{
            return(
               <div className='shadow-lg bg-white p-4 w-full rounded-lg' key={adapt.id}>
                <div className="flex justify-center py-5">
              <img src={(adapt.path)} className="h-[148px] w-[148px] max-laptop:h-[100px] max-laptop:w-[100px] " alt={adapt.alt} />
            
            </div>
            <h5 className="text-3xl max-laptop:text-2xl font-notosans font-bold tracking-tight text-center text-gray-900 dark:text-white">
              <p>{adapt.title}</p>
            </h5>
               </div> 
            )
        }  )}
       
      </div>
    </section>
  )
}

export default AdapFeatures