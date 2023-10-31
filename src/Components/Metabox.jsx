import React from 'react'
import { Icon } from '@iconify/react';
const Metabox = () => {
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
  return (
    <section className='w-full py-5 rounded-lg bg-slate-100 flex flex-row justify-center'>
        <div className='bg-white rounded-xl shadow-lg px-5 py-3 w-[65%] flex flex-row justify-around '>
            {
                metaboxdata.map((meta) =>(
                   <div className='text-violet-500 flex flex-col w-full items-center'>
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
  )
}

export default Metabox