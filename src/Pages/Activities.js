import React, { useEffect, useState } from 'react'
import "../Styles/Activities.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Activities_API } from '../Configuration/utils';

const Activities = () => {

  const settings = {
    slidesToShow: 3,
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



  const [item, setItem] = useState([])
  const getReviewData = () => {
    axios.get(Activities_API)
    .then((response) => {
    const myData = response.data;
    setItem(myData)
    })
    .catch((error) => 
    {
      console.log("Error :" +error)
    })
  }

  useEffect (() => {
    getReviewData()
  },[])


  return (
    <div>
      <div className='activityContainer realOpinion'>
        <div className='activityCustomContainer container'>
          <div className='row'>
            <div className='col-12'>
              <div className='activityHeading'>
                <h2>
                  Kids Activities Reviews <br />by Real Parents
                </h2>
              </div>
              <div className='activityframe'>
                <div className='activityItem'>
                    <div>
                      <Slider {...settings}>
                        {item?.map((slide, i) => {
                          return (
                            <div key={slide.id}>
                              <div className="card activityCard" style={{width:"65%", marginLeft:"80px"}}>
                                <div className="card-body activityCardBody">
                                  <div>
                                    <p className="activityVenue">{slide.venue.title}</p><br/>
                                    <span className='activityReviewTitle'>{slide.title}</span>
                                    <hr/>
                                    <p className="boldActivityP">{slide.review}</p>
                                  </div>
                                </div>
                                <div className='bottomActivityCard'>
                                  <div className='cardLeft'>
                                    <p>Sussy</p>
                                    <p className='monthAgo'>2 days ago</p>
                                  </div>
                                  <span className='activityStarRate'>
                                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg' alt='Star'/>
                                    <span>{slide.rating}.0</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </Slider>
                    </div>
                </div>
              </div>
              <button type="button" className="btn btn-outline-success" style={{borderRadius:"30px", padding:"8px 65px", marginTop: "50px"}}>View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities