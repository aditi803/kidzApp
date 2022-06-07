import React from 'react'  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import style from  "../Styles/CarouselBottom.module.css"
import image1 from "../Assets/carousel-bottom-images/1.jpg"
import deal from "../Assets/carousel-bottom-images/Deal.svg"
import star from "../Assets/carousel-bottom-images/star.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'reactstrap';
import Kidzappolis from './Kidzappolis';
import { useEffect, useState } from 'react';
import BottomCardSlider from './BottomCardSlider';

const CarouselBottom = () => {


    const [item, setItem] =useState([]);

    useEffect(() => {
        fetch("https://api2.kidzapp.com/api/3.0/lists?country_code=ae")
        .then(res => res.json())
        .then(data => setItem(data))
        .catch(err => console.log("Error: " +err))
    },[])


    const settings = {
        autoplay:true,
        autoplaySpeed:1000,
        infinite: true,
        slidesToShow: 4,
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

    <>
    <Container>  
{/* <---------------------------------------------------------text----------------------------------------------------------------------------------->       */}
        <div className='container-fluid my-5 ' >  
            <div className={style.headerText}>
                <h1>Find the best places to take your <br/> kids in the UAE</h1><br/>
                <span className={style.bottomText}>
                    Handpicked Experiences
                </span>
                <h2 className={style.bttom2Text}>
                    Our pick of the best kids activities in Dubai, Abu Dhabi and the rest of the UAE
                </h2>
            </div>  
            <div class="row d-flex justify-content-center text-center">
                <div className="col-md-10">
                    <div className={style.upperCarousel}>
                    <Slider {...settings}>
                        {item?.map((slide, i) => {
                            
                            return (
                                
                                <div key={slide.id} className={style.head}>                                   
                                    <p className={style.para}>{slide.name}</p>             
                                </div>
                            )
                        })}
                    </Slider>
                    </div>
                </div>
            </div>
        <div> 
             
{/* <-----------------------------------------------------------------Owl Carousel------------------------------------------------------------------> */}
            
            {/* <>
            {list.map((content) => {
                    <OwlCarousel items={3}   
                    className={style.owlDots} 
                    dots={true}
                    loop  
                    item
                    nav
                    arrows
                    margin={8} >  
                    
                    <div className={style.item}>
                        <div className={style.card} >
                            <div className='card-head'>
                                <img src= {content.image_url} className={style.img}/>
                                <span className={style.newDeal}>
                                    <img style={{width:"45px"}} alt="Deal" src={deal} ></img>  
                                </span>
                                <div className={style.cardBody}>
                                    <h3 className={style.cardHeader}>{content.title}</h3>
                                    <p className={style.purplePara}>Villa No.1, Street 8A, Safa 2,...</p>
                                    <div className='clearfix'>
                                            
                                    </div>
                                    <span className={style.starRate} >
                                        <img src={star} />
                                        <span>
                                            4.3
                                       </span>    
                                    </span>
                                     <div className={style.bottomCard}>
                                        <div className={style.cardLeft}>
                                            <p className={style.oldPrice}>AED 120</p>
                                            <p className={style.newPrice}>AED 99</p>
                                        </div>
                                        <a className={style.bookNow}>Book Now</a>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div> 
                </OwlCarousel>
            })}
                           
            </> */}

            <BottomCardSlider />
             
            <button type="button" class="btn btn-outline-success" style={{borderRadius:"30px", padding:"8px 65px", marginTop: "50px"}}>View All</button>
            </div>  
        </div>    
    </Container> 
    </> 
  )
}

export default CarouselBottom