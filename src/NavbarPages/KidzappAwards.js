import React from 'react'
import "../NavbarPagesStyles/KidzappAwards.css"
import BottomFooter from "../Pages/BottomFooter"

const KidzappAwards = () => {
  return (
    <div>
      <div className="awardBanner">
        <img src="	https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-awards-banner.png" />
      </div>
      <div className='journeySection'>
        <div className='container kidzAppAwardsContainer'>
          <div className='row kidzAppAwardsRow'>
            <div className='col-12 kidzAppAwardsCol'>
              <h1>The Journey to the Awards</h1>
              <ul className='journeySlides'>
                <li className='journeyItem'>
                  <div className='journeyImg'>
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/Nomination-open.png' alt='Nomination Open' className='kidzAppAwardsImg'/>
                  </div>
                  <h4>Nomination Opens</h4>
                </li>
                <li className='journeyItem'>
                  <div className='journeyImg'>
                    <img src='	https://drfsb8fjssbd3.cloudfront.net/images/Nomination-close-updated.png' alt='Nomination Closed' className='kidzAppAwardsImg'/>
                  </div>
                  <h4>Nomination closes</h4>
                </li>
                <li className='journeyItem'>
                  <div className='journeyImg'>
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/23rd-july.png' alt='Nomination Closed' className='kidzAppAwardsImg'/>
                  </div>
                  <h4>Voting Starts</h4>
                </li>
                <li className='journeyItem'>
                  <div className='journeyImg'>
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/Nomination02.png' alt='Nomination' className='kidzAppAwardsImg'/>
                  </div>
                  <h4>Voting Closes</h4>
                </li>
                <li className='journeyItem'>
                  <div className='journeyImg'>
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/november-month.png' alt='Nomination' className='kidzAppAwardsImg'/>
                  </div>
                  <h4>Announcing Winner <br/> - <br/> Awards Ceremony</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='awardPartner'>
        <div className='container awardPartnerContainer'>
          <div className='row justify-content-center awardPartnerRow'>
            <div className='col-8 awardPartnerCol'>
              <h2>In Partnership with</h2>
              <img src='https://drfsb8fjssbd3.cloudfront.net/images/Logo-A.png' alt='Logo' />
            </div>
          </div> 
        </div>
      </div>
      <div className='awardWinners'>
        <div className='container awardWinnersContainer'>
          <h3>Award Winners</h3>
            <div className='row justify-content-center winners-main-wrapper awardWinnersRow'>
              <div className='col-12 awardWinnersCol'>
                <div className='winnersOuterSection'>
                  <div className='categoryBadgeSection'>                
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/Younger_kids.png' alt='Awards Category' className='winnerSectionImg' />
                    <h2 className='categoryTitle'>Best for Younger Kids</h2>
                  </div>
                  <div className='winnerSection'>
                    <div className='winnerSectionInner goldBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png' alt='Gold Winner' className='winnerSectionImg'/>
                        <p>
                          Fun Block
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/fun-block.jpeg' alt='Gold Winner Image' />
                      </div>
                    </div>
                    <div className='winnerSectionInner silverBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png' alt='Silver Winner' className='winnerSectionImg' />
                        <p>
                          Mattel Playtown
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/plat-town.jpg' alt='Silver Winner' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 awardWinnersCol'>
                <div className='winnersOuterSection'>
                  <div className='categoryBadgeSection'>                
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/Best_for_Older_Kids.png' alt='Awards Category' className='winnerSectionImg' />
                    <h2 className='categoryTitle'>Best for Older Kids</h2>
                  </div>
                  <div className='winnerSection'>
                    <div className='winnerSectionInner goldBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png' alt='Gold Winner' className='winnerSectionImg'/>
                        <p>
                          Fun City
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/fun-city.jpg' alt='Gold Winner Image' />
                      </div>
                    </div>
                    <div className='winnerSectionInner silverBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png' alt='Silver Winner' className='winnerSectionImg' />
                        <p>
                          IMG World Of Adventures
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='	https://drfsb8fjssbd3.cloudfront.net/images/img-worlds.jpg' alt='Silver Winner' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 awardWinnersCol'>
                <div className='winnersOuterSection'>
                  <div className='categoryBadgeSection'>                
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/Best_for_Water_Fun.png' alt='Awards Category' className='winnerSectionImg' />
                    <h2 className='categoryTitle'>Best for Water Fun</h2>
                  </div>
                  <div className='winnerSection'>
                    <div className='winnerSectionInner goldBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png' alt='Gold Winner' className='winnerSectionImg'/>
                        <p>
                          Yas Waterworld
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/yas-waterworld.jpg' alt='Gold Winner Image' />
                      </div>
                    </div>
                    <div className='winnerSectionInner silverBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png' alt='Silver Winner' className='winnerSectionImg' />
                        <p>
                          Laguna Waterpark
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/water-park.jpg' alt='Silver Winner' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 awardWinnersCol'>
                <div className='winnersOuterSection'>
                  <div className='categoryBadgeSection'>                
                    <img src='https://drfsb8fjssbd3.cloudfront.net/images/Best_Birthday_Venue.png' alt='Awards Category' className='winnerSectionImg' />
                    <h2 className='categoryTitle'>Best for Birthdays</h2>
                  </div>
                  <div className='winnerSection'>
                    <div className='winnerSectionInner goldBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/gold-winner.png' alt='Gold Winner' className='winnerSectionImg'/>
                        <p>
                          Cheeky Monkeys
                          <span>Gold Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/cheeky-monkeys.jpg' alt='Gold Winner Image' />
                      </div>
                    </div>
                    <div className='winnerSectionInner silverBlock'>
                      <div className='leftBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/silver-winner.png' alt='Silver Winner' className='winnerSectionImg' />
                        <p>
                          Kids HQ
                          <span>Silver Winner</span>
                        </p>
                      </div>
                      <div className='rightBlock'>
                        <img src='https://drfsb8fjssbd3.cloudfront.net/images/kids-hq.jpg' alt='Silver Winner' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  )
}

export default KidzappAwards