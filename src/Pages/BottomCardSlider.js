import React from 'react'
import { useState, useEffect } from 'react';
import "../Styles/BottomCardSlider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BottomCardSlider = () => {

    const [item, setItem] = useState([]);
    useEffect(() =>
    {
        fetch("https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_kidzapp_deal&country_code=&page=1&page_size=10&city=&website=1")
        .then(res => res.json())
        .then(data => setItem(data.results))
        .catch(err => console.log("Error: " +err))
    })


    const settings = {
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow: 3,
        lazyLoad: true,
        swipeToSlide: true,
        arrows: true,
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
        ],
    };

  return (
    <div className='container'>
        <div className='row' style={{justifyContent:" center"}}>
            
            <Slider {...settings}>
            {
                    item?.map((slide,i) =>                 
                    (   
                        <div className='col-3' key={slide.id} >
                                    
                           <div className='cardSlider' style={{boxShadow: "1px 1px 5px #999",
                                background: "#eeeeee66", 
                                margin:'0.5rem 1rem',
                                width:"320px",
                                height:"350px",
                                }}>
                               <div className="img-blog">
                                    <img src={slide.image_url}  
                                        className="card-img-top blogDataImg"
                                        style={{height:"180px", width:"450px",marginTop: "5px"}} 
                                    />
                                    <div className='cardSliderBody'>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.address}</p> 
                                    <span className='starRate'>
                                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg' alt='Star Image'/>
                                        <span>{slide.average_rating.toFixed(1)}</span>
                                    </span>
                                    <div className='bottomSliderCard'>
                                        <div className='sliderCardLeft'>
                                            <p>{slide.city.country.currency_code}</p>
                                        </div>
                                        <button className='bookNow'>Book Now</button>
                                    </div>    
                                </div> 
                                </div>
                                   
                            </div> 
                        </div>
                    ))
                }
               </Slider> 
        </div>
    </div>
  )
}

export default BottomCardSlider