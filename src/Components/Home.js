import React from 'react'
import Activities from '../Pages/Activities'
import Blog from '../Pages/Blog'
import Feed from "../Pages/Feed"
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
        <Feed />
    </>
  )
}

export default Home