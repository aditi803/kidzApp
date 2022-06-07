import { Carousel } from 'bootstrap'
import React from 'react'
import Activities from '../Pages/Activities'
import Blog from '../Pages/Blog'
import BottomFooter from '../Pages/BottomFooter'
import CarouselBottom from '../Pages/CarouselBottom'
import Featured from '../Pages/Featured'
import HomePageBanner from '../Pages/HomePageBanner'
import Kidzappolis from '../Pages/Kidzappolis'

const Home = () => {
  return (
    <>
        <HomePageBanner />
        <CarouselBottom />
        <Kidzappolis />
        <Blog />
        <Activities />
        <Featured />
        <BottomFooter />
    </>
  )
}

export default Home