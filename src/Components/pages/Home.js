import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Metabox from '../Metabox'
import WhatsappButton from '../WhatsappButton'
import Aboutus from '../Aboutus'
import Youtube from '../Youtube'
import AdaptiveGrid from '../AdaptiveGrid'

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
    </div>
  )
}

export default Home