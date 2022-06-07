import React from 'react'
import {FaFacebook,FaYoutube, FaWhatsapp, FaInstagram} from "react-icons/fa"
import visaCard from "../Assets/Footer/visa.svg"
import masterCard from "../Assets/Footer/mastercard.svg"
import whatsappImg from "../Assets/Footer/whatsappImg.png"
import style from "../Styles/Footer.module.css"


const Footer = () => {
  return (
    <>
        <div className={style.mainFooter}>
            <div className='container-fluid col-md-12'>
                <div className='row'>
                    <div className='col '></div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Kids Activity by category</h3>
                        <div className={style.paragraphFooter}>
                            <p>Exclusively on KidzApp</p>
                            <p>Spring Fun</p> 
                            <p>Afterschool Activities</p>
                            <p>Animal Fun</p>
                            <p>Art, Music & Dance</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Kids Activity by category</h3>
                        <div className={style.paragraphFooter2}>
                            <p>Baby & Toddler</p>
                            <p>Birthdays</p>
                            <p>Courses, Camps &</p>
                            <p>Workshops</p>
                            <p>Eat Out</p>
                            <p>Explore The City</p>
                        </div>      
                    </div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Family Activity</h3>
                        <div className={style.paragraphFooter3}>
                            <p className='paragraphFooter'>Venues</p>
                            <p className='paragraph2'>Courses</p>
                            <p className='paragraph3'>Events</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Others</h3>
                        <div className={style.paragraphFooter4}>
                            <p>Find Activities</p>
                            <p>Our Story</p>
                            <p>About The App</p>
                            <p>Get In Touch</p>
                            <p>Blog</p>
                            <p>Site Map</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Available on</h3>
                        <div className='col'>
                            <img style={{width:"130px",height:"80px", display:"flex"}} src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-app-store.svg" />  
                            <img style={{width:"130px", display:"flex"}} src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-google-play.svg" />                          
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-6'></div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Indoor/Outdoor Kids Activity</h3>
                        <div className={style.footerParagraph5}>
                            <p className={style.paragraph}> Indoor </p>
                            <p className={style.paragraph}>Outdoor</p>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className={style.footerHeading}>Legal</h3>
                        <p className={style.paragraph}>Pirvacy Policy</p>
                        <p className='paragraph'>Terms and Conditions</p>
                        <p className='paragraph'>Cancellation Policy</p>
                    </div>
                    <div className='col'>
                    <div className={style.footerIcon}>
                        <h3 className={style.footerHeadingFollow}>Follow us on</h3>
                        <FaInstagram className={style.FaInstagram} /> 
                        <FaFacebook className={style.FaFacebook} />
                        <FaWhatsapp className={style.FaWhatsapp} />
                        <FaYoutube className={style.FaYoutube} />
                    </div>
                    </div>    
                </div>
                <hr/>
                <div className='row footerBottom'>
                    <div className='col footerBottomParagraph'>Copyright c 2020 KidzApp.com. All Rights Reserved</div>
                    <div className='col' style={{paddingBottom:"20px"}}>
                        <img className={style.visaCard} src={visaCard}  alt='Visa Card'/>
                        <img className={style.masterCard} src={masterCard}  alt='Master Card'/>
                        <img className={style.whatsappImg} src={whatsappImg}  alt='Whatsapp Image'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer