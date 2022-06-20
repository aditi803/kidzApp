import React from 'react'
import style from "../Styles/Kidzappolis.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Kidzappolis_API } from '../Configuration/utils';

const Kidzappolis = () => {
    const settings = {
        slidesToShow: 5,
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


    const [item, setItem] = useState([]);
    const getReviewData = () => {
        axios.get(Kidzappolis_API
        )
        .then((response) => {
            const myData = response.data;
            setItem(myData)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getReviewData()
    },[]);

    const collectionSettings = {
        slidesToShow: 5,
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



    const [data, setData] = useState([]);
    const getKidsCollection = () => {
        axios.get("https://api2.kidzapp.com/api/3.0/lists?country_code=ae"
        )
        .then((response) => {
            const myData = response.data;
            setData(myData)
            console.log(myData);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getKidsCollection()
    },[]);

    const collections = [
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/c5c3ecbc-a326-4a01-ae1f-90500caf54a9.jpg",
            captionCollection: "Play & Attraction"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/SupperClub_Offers_fdeff72c-5f00-4450-add2-3f465acded97.jpg",
            captionCollection:"Super Club Offers"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/0889ea35-9cd5-4558-bfa7-1861ace029ba.jpg",
            captionCollection:"Family Shopping"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/64ea5802-2f8b-11ea-98b7-fa2c3f187b01attractions.png",
            captionCollection:"Deals:  Big Attractions"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/Weekday_Deals_Not_To_Miss_cf50f82d-0a0e-4477-9d32-8d7b70d64b29.jpg",
            captionCollection:"WeekDay Deals Not to Miss"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/Birthday_Deals__Picks_f8d8950c-1b18-4841-b466-a513745abf25.jpg",
            captionCollection:"Birthday Deals & Picks"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/Fun_For_AED_50_Or_Less_ab3830af-b472-466c-b229-7a7dcfdc3a26.jpg",
            captionCollection:"Fun for AED  or Less"
        },
        {
            id:1,
            src:"https://images.kidzapp.com/media/lists/Fun_For_AED_50_Or_Less_ab3830af-b472-466c-b229-7a7dcfdc3a26.jpg",
            captionCollection:"How To Spend Your Cashback -"
        },
       
    ]
 
  return (
    <div>
        <div className={style.containerKidsappolis}>
            <div className={style.customKids}>
                <div className='row'>
                    
                    <div className='col-md-12'>
                        <h2>Kidzappolis</h2>
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-md-12">
                                <div className={style.kidsCarousel}>
                                    <Slider {...settings}>
                                        {item?.map((slide,i) => {
                                            return (
                                                <div key={slide.id} className={style.activityBox}>
                                                    <img src={slide.image_url} alt="Featured" style={{height:"150px", width:"160px"}}/>
                                                    <p className={style.paraKidsSection}>{slide.name}</p>
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <h2 className={style.kidsCollection}>Kidzapproved Collections</h2>
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-md-12">
                                <div className={style.kidsCarousel}>
                                    <Slider {...collectionSettings}>
                                        {collections.map((slide, i) => {
                                            return (
                                                <div key={slide.id} className={style.activityCollectionBox}>
                                                    <img src={slide.src} alt="Featured" className={style.kidsCollectionImg}/>
                                                    <span className={style.spanKidsSection}>{slide.captionCollection}</span>
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kidzappolis