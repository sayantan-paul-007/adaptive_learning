import React from 'react'
const Testimonial = () => {
  return (
    <section className='px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-12 flex flex-row justify-around max-mobile:flex-col items-center bg-zinc-400'>
        <div className="w-1/2 max-mobile:w-full">
        <h3 className='font-bold max-mobile:pb-8 text-center text-7xl max-laptop:text-[54px] max-tablet:text-5xl max-mobile:text-4xl py-2'>
                Reviews of Learners
            </h3>
        </div>
        <div className="w-1/2 max-mobile:w-full flex flex-row justify-center">
           <div className="px-4">
                 <TestimonyCard />
                 
           </div>
        </div>
    </section>
  )
}

export default Testimonial

const TestimonyCard = () => {
 return(
    
        <section className="bg-white rounded-lg border-2">
    <div className="max-w-screen-xl p-4 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg> 
            <blockquote>
                <p className="text-2xl max-mobile:text-xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="pfp" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 text-lg max-mobile:text-base font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                    </div>
            </figcaption>
        </figure>
    </div>
  </section>
   
    
 )
}