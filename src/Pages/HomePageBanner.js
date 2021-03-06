import React from 'react'
import { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/HomePageBanner.css"
import { HomePageBanner_API } from '../Configuration/utils';

const HomePageBanner = () => {

    const settings = {
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        arrows:false,
        slidesToShow: 1,
        dots:true,
        lazyLoad: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(HomePageBanner_API)
        .then(res => res.json())
        .then(data => setItem(data.results))
        .catch(err => console.log("Error: " +err))
    }, [])


  return (

    <div>
        <div className='mainSlider'>
            <Slider {...settings}>
                {item?.map((slide,i) => {
                    return (
                                <div key={slide.id} className="sliderItem"alt="..." >
                                    <img src={slide.image_url} alt="Featured" className="d-block w-100" />
                                    <div className='sliderText'>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.description}</p>
                                        <button className='btn'>{slide.booking_button.text}</button>
                                    </div>
                                </div>
                        )
                    })}
            </Slider>
        </div>
    </div>
  )
}

export default HomePageBanner