import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Metabox from '../Metabox'
import WhatsappButton from '../WhatsappButton'
import Aboutus from '../Aboutus'
import Youtube from '../Youtube'
import AdaptiveGrid from '../AdaptiveGrid'
import Testimonial from '../Testimonial'

const Home = () => {
  return (
    <div>
      <WhatsappButton />
        <Header />
        <Hero />
        <Metabox />
        <Aboutus />
        <Youtube />
        <AdaptiveGrid />
        <Testimonial />
    </div>
  )
}

export default Home