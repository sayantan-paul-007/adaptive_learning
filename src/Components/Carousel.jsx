import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Carousel = () => {
    return (
        <div>
          <Swiper pagination={true} autoplay={{delay: 2500}} modules={[Autoplay, Pagination]} className="">
            <SwiperSlide className="bg-primary-600"><img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className='w-full aspect-video max-mobile:aspect-square' alt="..." />
        </SwiperSlide>
            <SwiperSlide> <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className='w-full aspect-video max-mobile:aspect-square' alt="..." /></SwiperSlide>
            <SwiperSlide> <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className='w-full aspect-video max-mobile:aspect-square' alt="..." /></SwiperSlide>
            <SwiperSlide><img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" className='w-full aspect-video max-mobile:aspect-square' alt="..." /></SwiperSlide>
            <SwiperSlide><img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" className='w-full aspect-video max-mobile:aspect-square' alt="..." /></SwiperSlide>
          </Swiper>
        </div>
      );
    }
export default Carousel
 
