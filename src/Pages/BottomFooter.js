import React from 'react'
import style from "../Styles/BottomFooter.module.css"
import baby from "../Assets/BottomFooter/baby.png"

const BottomFooter = () => {
  return (
    <div>
        <section className={style.newHandExp}>
            <div className={style.containerBottomFooter}>
                <div className={style.rowBottomFooter}>
                    <div className='col-md-12'>
                        <div className={style.colBottomFooter}>
                            <div className={style.kidsFeed}>
                                <div className={style.kidsFeedLeft}>
                                    <img src={baby} alt="kids Feed Image"/>
                                </div>
                                <div className={style.kidsFeedRight}>
                                    <p className={`${style.footerKidFeed}, ${style.titleSubs}`}>
                                        The KidzApp Feed
                                    </p>      
                                    <p>Receive regular updates and promotions from Kidzapp</p>

                                    <div className={style.kidsFeedValues}>
                                        <div className={style.kidsFeedValue}>
                                            <span className={style.feedValues}>2500+</span>
                                            <p className={style.bottomFooterPara}>Experiences</p>
                                        </div>
                                        <div className={style.kidsFeedValue}>
                                            <span className={style.feedValues}>500+</span>
                                            <p className={style.bottomFooterPara}>Venues &...</p>
                                        </div>
                                        <div className={style.kidsFeedValue}>
                                            <span className={style.feedValues}>1000+</span>
                                            <p className={style.bottomFooterPara}>Classes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BottomFooter