import React from 'react'
import style from "../Styles/Featured.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {

    const settings = {
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow: 4,
        arrows: false,
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
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: black; color: red`
        //     );
        // }
    };

    const data = [
        {
            id:1,
            src: "https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
        },
        {     id:2,
              src: "https://drfsb8fjssbd3.cloudfront.net/images/khaleej-times.png"
        },
        {   id: 3,
            src: "https://drfsb8fjssbd3.cloudfront.net/images/the-national.png"
        },
        {   id: 4,
            src: "https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png"
        },
        {   id: 5,
            src: "https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png"
        },
    ]

  return (
    <div>
        <div className={style.container}>
            <div className='row'>
                <span className={style.featuredSpan}>As Featured in </span>
                    <div class="row d-flex justify-content-center text-center">
                        <div className="col-md-7">
                            <div className={style.featuredCarousel}>
                                <Slider {...settings}>
                                    {data.map((slide, i) => {
                                        return (
                                            <div key={slide.id} className={style.featuredImage}>
                                                <img src={slide.src} alt="Featured Image"/>
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
  )
}

export default Featured