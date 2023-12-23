import React from 'react'
const Youtube = () => {
    const ytdata = [
        {
            id:1,
            link:"https://www.youtube.com/watch?v=uM13j_gPDX8&t=163s",
            thumbnail:"https://i3.ytimg.com/vi/uM13j_gPDX8/maxresdefault.jpg",
            title:"Accounts Ch 1 | Partnership Final Accounts | Introduction | HSC | By Rahul Sir | Lecture 1",
            views:"917K",
            year:3
        },
        {
            id:2,
            link:"https://www.youtube.com/watch?v=vHuGkCcAfXA",
            thumbnail:"https://i3.ytimg.com/vi/vHuGkCcAfXA/maxresdefault.jpg",
            title:"Accounts Ch 1 | Partnership Final Accounts | Illustration 1 Page 24 | HSC | By Rahul Sir | Lecture 2",
            views:"441K",
            year:3
        },
        {
            id:3,
            link:"https://www.youtube.com/watch?v=klQ6lpJr5pg&t=359s",
            thumbnail:"https://i3.ytimg.com/vi/klQ6lpJr5pg/maxresdefault.jpg",
            title:"Accounts Ch 1 | Partnership Final Accounts | Practical Problem 1 | HSC | By Rahul Sir | Lecture 12",
            views:"112K",
            year:3
        },
    ];
  return (
    <section className='px-[120px] max-laptop:px-20 max-tablet:px-10 max-mobile:px-5 py-10 bg-emerald-600'>
<h3 className='font-bold text-center text-7xl max-laptop:text-[54px] max-tablet:text-5xl max-mobile:text-4xl font-montserrat pt-4 pb-10'>
                Find us on Youtube
            </h3>
            <div className='rounded-xl px-2 py-4 border-2 flex flex-row max-mobile:flex-col justify-around '>
                {
                    ytdata.map((yt) =>(
                        
                        <div className='flex w-[30%] max-mobile:w-full flex-col font-notosans py-[24px]' key={yt.id}>
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
            <div className='flex justify-center py-6'>
                <button className='py-4 px-10 rounded-xl font-bold font-notosans text-white bg-red-600 text-xl'>
                        Visit Our Channel
                    </button>
            </div>
            
    </section>
  )
}

export default Youtube