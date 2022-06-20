import {React, useState, useEffect}from 'react'
import "../NavbarPagesStyles/NavbarBlog.css"
import {Link} from "react-router-dom"
import BlogsData from './BlogsData'
import { BlogTabs_API } from '../Configuration/utils';

const NavbarBlog = () => {

  const [item, setItem] =useState([]);

  useEffect(() => {
      fetch(BlogTabs_API)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.log("Error: " +err))
  },[])


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
            <div className='row'>
            
              <div className='col-6 blogListing'>
              {item.map((content,i) =>(
                <ul className='blogCategoryListing'>
                  <li className='firstCategory'style={{backgroundImage:`url(${ i===0 ? "https://kidzapp.com/images/btn-01.png":
                    i===1 ? "https://kidzapp.com/images/btn-02.png" : 
                    i===2 ? "https://kidzapp.com/images/btn-03.png" :
                    i===3 ? "https://kidzapp.com/images/btn-04.png" :
                    "https://kidzapp.com/images/btn-04.png"})`}}>
                     {content.internal_name}
                     <span>
                       <img src='https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg' alt='arrow' />
                     </span>
                  </li>
                </ul>
               ))} 
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

export default NavbarBlog