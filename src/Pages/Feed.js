import React from 'react'
import "../Styles/Feed.css"

const Feed = () => {
  return (
    <div>
        <div className='newFeed'>
            <div className="container">
                <div className='row feedRow'>
                  <div className='col-12 feedCol'>
                    <div className='kidsFeed'>
                      <div className='kidsFeedLeft'>
                        <img src='	https://drfsb8fjssbd3.cloudfront.net/images/subsc-baby.png' alt="..." className='feedImg'/>
                      </div>
                      <div className='kidsFeedRight'>
                        <p className='titleSubs'>The Kidzapp Feed</p>
                        <p>Receive regular updates and promotions from Kidzap</p>
                        <div className='kidsFeedForm'>
                            <form className='validate' target='_blank' noValidate>
                              <div id='signup_scroll'>
                                <input 
                                  type="email"
                                  name='Email'
                                  className='email form-control'
                                  placeholder='Email address'
                                  required />
                                <input
                                  type="submit"
                                  value="Subscribe"
                                  name='subscribe'
                                  id='mc-embedded-subscribe'
                                  className='button form-control'
                                />
                              </div>
                            </form>
                        </div>
                        <div className='kidsFeedValues'>
                          <div className='kidsFeedValue'>
                            <span className='feedValues'>2500+</span>
                            <p>Experiences</p>
                          </div>
                          <div className='kidsFeedValue'>
                            <span className='feedValues'>500+</span>
                            <p>Venues & Events</p>
                          </div>
                          <div className='kidsFeedValue'>
                            <span className='feedValues'>1000+</span>
                            <p>Classes</p>
                          </div>
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

export default Feed