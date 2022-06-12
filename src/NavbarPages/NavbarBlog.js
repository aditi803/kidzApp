import React from 'react'
import "../NavbarPagesStyles/NavbarBlog.css"
import {Link} from "react-router-dom"
import BlogsData from './BlogsData'

const Blog = () => {

  return (
    <>
      <div className='blogBanner kidztvNewBanner'>
        <div className='container'>
          <div className='row NavbarBlogRow'>
            <div className='col-12 NavbarBlogCol'>
              <div className='NavbarBlogSearchBar'>
                <div class="input-group ">
                  <input 
                    type="search" 
                    className="form-control rounded navbarblogInput" 
                    placeholder="Type here to search Blog"
                    aria-label="Search" 
                    aria-describedby="search-addon" 
                  />
                  <button 
                    type="button" 
                    className="btn btn-primary navbarblogButton"
                  >Search
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row NavbarBlogRow'>
          <div className='col-12 NavbarBlogCol'>
            <div className='back-btn'>
              <Link to ="/">
                <span>
                  <img src="https://drfsb8fjssbd3.cloudfront.net/images/back-arrow-kd-new.svg" alt="..."/>
                </span>
                 Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className='blogCategory'>
        <div className='container'>
          <div className='row NavbarBlogRow'>
            <div className='col-12 NavbarBlogCol blogListing'>
              <ul className='blogCategoryListing'>
                <li className='firstCategory'>
                   Arts & Crafts
                   <span>
                     <img src='https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg' alt='arrow' />
                   </span>
                </li>
                <li className='secondCategory'>
                   Kids Activities
                   <span>
                     <img src='https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg' alt='arrow' />
                   </span>
                </li>
                <li className='thirdCategory'>
                   Parenting
                   <span>
                     <img src='https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg' alt='arrow' />
                   </span>
                </li>
                <li className='fourthCategory'>
                   Health & Nutrition
                   <span>
                     <img src='https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg' alt='arrow' />
                   </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row NavbarBlogRow' >
          <div className='col-12 NavbarBlogCol' style={{width:"100%"}}>
            <h1>The KZ Blog</h1>
            <p>Your source for everything related to Arts & Crafts, Kids Activities, Parenting and Health & Nutrition.</p>
          </div>
        </div>
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
          <BlogsData />
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Blog