import React from 'react'
import Feed from  "../Pages/Feed"
import Map from "../NavbarPages/Map"
import "../NavbarPagesStyles/getListed.css"
import Recaptcha from "../NavbarPages/Recaptcha"
const GetListed = () => {
  return (
    <div>
      
        <div className='GetInTouchBanner'>
        <div className='container GetInTouchContainer'>
          <div className='row GetInTouchRow'>
            <div className='col-12 GetInTouchCol'>
              <div className='wrapper GetInTouchWrapper'>
                <h1>Get Listed on Kidzapp</h1>
                <h2>Expand your reach by listing your business with us. Simply fill out<br/> the form below and you'll hear back from us very soon.</h2>
              </div>
            </div>
          </div>
        </div>
        </div>

        <section className="getListedForm">
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <h4>Experiences Information</h4>

                <form noValidate="noValidate">

                  <div className="form-group">
                    <label>Type*</label>
                    <select className="form-control" style={{width:"100%", height:"45px"}}>
                      <option value>-</option>
                      <option>Course</option>
                      <option>Venue</option>
                      <option>Event</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>City*</label>
                    <select className="form-control" style={{width:"100%", height:"45px"}}>
                      <option value>-</option>
                      <option>Dubai</option>
                      <option>AI Ain</option>
                      <option>Fujairah</option>
                      <option>Abu dhabi </option>
                      <option>Ajman</option>
                      <option>Sharjah</option>
                      <option>Ras AI Khaimah</option>
                      <option>Umm AI Quwain</option>
                    </select>
                  </div>

                  <div className='location'>
                    <label>Location Map</label>
                    <span className='drag'>
                      Drag pointer to your location
                      <div id='map'>
                        <Map /> 
                      </div>
                    </span>
                  </div>

                  <div className='form-group'>
                    <label>Experience Name*</label>
                    <input 
                      type="text"
                      className='form-control form-input'
                      id='ex_name'
                      name='experience'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Venue Name*</label>
                    <input 
                      type="text"
                      className='form-control form-input'
                      id='ex_name'
                      name='experience'
                    />
                  </div>

                  <div className="form-group">
                    <label>Category*</label>
                    <select className="form-control" style={{width:"100%", height:"45px"}}>
                      <option value>-</option>
                      <option>AE National Day</option>
                      <option>Spring Fun</option>
                      <option>Winter Fun</option>
                      <option>Afterschool Activities</option>
                      <option>Animal Fun</option>
                      <option>Art,Music & Dance</option>
                      <option>Baby & Toddler</option>
                      <option>Birthdays</option>
                      <option>Courses,Camps & Workshops</option>
                      <option>Eat Out</option>
                      <option>Explore The City</option>
                      <option>Markets & Fairs</option>
                      <option>Outdoor & Nature</option>
                      <option>Schools & Nurseries</option>
                      <option>Show & Cinema</option>
                      <option>Sports & Active</option>
                      <option>Theme Parks</option>
                      <option>Water Fun</option>
                      <option>Test Temp</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Subcategory*</label>
                    <select className="form-control" style={{width:"100%", height:"45px"}}>
                      <option value>-</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Description</label>
                    <textarea 
                      className='form-control'
                      name='description'
                      id='description'
                    ></textarea>
                  </div>

                  <h4>Contact Information</h4>

                  <div className='form-group'>
                    <label>Designation*</label>
                    <input 
                      type="text"
                      className='form-control form-input'
                      id='designation'
                      name='designation'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Name*</label>
                    <input 
                      type="text"
                      className='form-control form-input'
                      id="name"
                      name='name'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Email*</label>
                    <input 
                      type="text"
                      className='form-control form-input'
                      id='email'
                      name='email'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Phone Number*</label>
                    <input 
                      type="text"
                      className='form-control form-input'
                      id='phone-number'
                      name='phone number'
                    />
                  </div>

                  <Recaptcha />

                  <button type="button" className="btn btn-primary getListedButton">GET LISTED</button>
                </form>
                
                <Feed />
              </div>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default GetListed