import React,{useState, useEffect} from 'react'    
import style from  "../Styles/CarouselBottom.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'reactstrap';
import "../Styles/BottomCardSlider.css"
import axios from "axios"

const CarouselBottom = () => {


    const [item, setItem] =useState([]);
    const [btnName, setBtnName] = useState("featured_kidzapp_deal")

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


    const [data, setData] = useState([])
    useEffect(() =>
    {
        axios.get(`https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${btnName}&country_code=&page=1&page_size=10&city=&website=1`)
        .then(response =>{
            // console.log('response',response.data.results);
            setData(response.data.results);
            // console.log(btnName)
        })
        .catch(err => {console.log("Error: " +err)})
    },[btnName])

    const sliderSettings = {
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
                {/* -------------------------------------------------------------Slick Slider1----------------------------------------------------------- */}
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-10">
                        <div className={style.upperCarousel}>
                            <Slider {...settings}>
                                {item?.map((slide, i) => {            
                                    return (  
                                        <div key={slide.id} className={style.head}>                                   
                                            <button onClick={()=>setBtnName(slide.internal_name)} className={style.para}>{slide.name}</button>             
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>    
                {/* <-----------------------------------------------------------------Slick Slider2------------------------------------------------------------------> */}
                <div className='container'>
                <div className='row' style={{justifyContent:" center"}}>
                    <Slider {...sliderSettings}>
                        {
                            data?.map((slide,i) =>                 
                            (   
                                <div className='col-3' key={slide.id} >            
                                    <div className='cardSlider' 
                                        style={{boxShadow: "1px 1px 5px #999",
                                            background: "#eeeeee66", 
                                            margin:'0.5rem 1rem',
                                            width:"320px",
                                            height:"350px",
                                            }}>
                                        <div className="img-blog">
                                            <img src={slide.image_url}  
                                                    className="card-img-top blogDataImg"
                                                    style={{height:"180px", width:"450px",marginTop: "5px"}}
                                                    alt="..." 
                                            />
                                            <div className='cardSliderBody'>
                                                    <h3>{slide.title}</h3>
                                                    <p>{slide.address}</p> 
                                                    <span className='starRate'>
                                                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg' alt='Star'/>
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
                <button type="button" class="btn btn-outline-success" style={{borderRadius:"30px", padding:"8px 65px", marginTop: "50px"}}>View All</button>  
            </div>    
        </Container> 
    </> 
  )
}

export default CarouselBottom