import React from 'react'
import "../NavbarPagesStyles/GetInTouch.css"
import Feed from '../Pages/Feed'
import Recaptcha from './Recaptcha'

const GetInTouch = () => {
  return (
    <div>
      
      <div className='GetInTouchBanner'>
        <div className='container GetInTouchContainer'>
          <div className='row GetInTouchRow'>
            <div className='col-12 GetInTouchCol'>
              <div className='wrapper GetInTouchWrapper'>
                <h1>Suggestion? Help? Just want to say Hi?</h1>
                <h2>Fill out the form below and one of the Kidzapp family will <br/> be in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='GetInTouchForm'>
        <div className='container GetInTouchContainer'>
          <div className='row GetInTouchRow'>
            <div className='col-md-12 GetInTouchCol'>
              <div className='wrapper GetInTouchFormWrapper'>
                <form id='GetInTouchCreate' noValidate="novalidate" style={{display:"block", marginTop: "0rem"}}>

                  <div className='form-row GetInTouchFormRow'>
                    
                    <div className='form-group col GetInTouchFormCol'>
                      <label className='formLabel'>
                        <b>First Name</b>
                      </label>
                      <input 
                        type="text"
                        name='fname'
                        className='form-control'
                      />
                    </div>

                    <div className='form-group col GetInTouchFormCol'>
                      <label className='formLabel'>
                        <b>Last Name</b>
                      </label>
                      <input 
                        type="text"
                        name='lname'
                        className='form-control'
                      />
                    </div>
                  </div>
                  
                  <div className='form-row GetInTouchFormRow'>
                    <div className='form-group col GetInTouchFormCol'>
                      <label className='formLabel2'>
                        <b>Email: </b>
                      </label>
                      <input 
                        type="text"
                        name='email'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='form-row GetInTouchFormRow'>
                    <div className='form-group col GetInTouchFormCol'>
                      <label className='formLabel2'>
                        <b>Subject </b>
                      </label>
                      <input 
                        type="text"
                        name='subject'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='form-row GetInTouchFormRow'>
                    <div className='form-group col GetInTouchFormCol'>
                      <label className='formLabel2'>
                        <b>Message</b>
                      </label>
                      <textarea 
                        type="text"
                        name='subject'
                        className='form-control'
                        style={{height:"200px"}}
                      />
                    </div>
                  </div>

                  <Recaptcha />
                  <button type="button" class="btn btn-primary getInTouchButton">SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Feed />
    </div>
  )
}

export default GetInTouch