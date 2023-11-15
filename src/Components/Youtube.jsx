import React from 'react'
import { Button } from 'flowbite-react';
const Youtube = () => {
    const ytdata = [
        {
            link:"https://www.youtube.com/watch?v=uM13j_gPDX8&t=163s",
            thumbnail:"https://i3.ytimg.com/vi/uM13j_gPDX8/maxresdefault.jpg",
            title:"Accounts Ch 1 | Partnership Final Accounts | Introduction | HSC | By Rahul Sir | Lecture 1",
            views:"917K",
            year:3
        },
        {
            link:"https://www.youtube.com/watch?v=vHuGkCcAfXA",
            thumbnail:"https://i3.ytimg.com/vi/vHuGkCcAfXA/maxresdefault.jpg",
            title:"Accounts Ch 1 | Partnership Final Accounts | Illustration 1 Page 24 | HSC | By Rahul Sir | Lecture 2",
            views:"441K",
            year:3
        },
        {
            link:"https://www.youtube.com/watch?v=klQ6lpJr5pg&t=359s",
            thumbnail:"https://i3.ytimg.com/vi/klQ6lpJr5pg/maxresdefault.jpg",
            title:"Accounts Ch 1 | Partnership Final Accounts | Practical Problem 1 | HSC | By Rahul Sir | Lecture 12",
            views:"112K",
            year:3
        },
    ];
  return (
    <section className='px-20 py-10 bg-rose-400'>
<h3 className='font-bold text-[54px] font-montserrat py-2'>
                Find us on Youtube
            </h3>
            <div className='bg-white rounded-xl shadow-lg px-5 pb-10  flex flex-row justify-around '>
                {
                    ytdata.map((yt) =>(
                        
                        <div className='flex w-[30%] flex-col font-notosans py-[24px] hover:shadow-xl '>
                            <a href={yt.link}>
                            <img src={yt.thumbnail} className='h-[200px] rounded-xl' alt='Yt1 Thumbnail'/>
                            <p className='py-2 text-lg text-left font-semibold'>
                                {yt.title}
                            </p>
                            <div className='flex flex-row gap-3 text-base'>
                                <p>{yt.views} views</p> 
                                <p>{yt.year} years ago</p>
                            </div>
                            </a>
                        </div>
                       
                    ) )
                }
                
            </div>
            <div className='flex justify-center'>
                <Button className='text-xl' gradientMonochrome="success">
                        Visit Our Channel
                    </Button>
            </div>
            
    </section>
  )
}

export default Youtube