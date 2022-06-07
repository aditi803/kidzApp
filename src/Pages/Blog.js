import React from 'react'
import {useState, useEffect} from "react"
import  "../Styles/Blog.css"
import blog1 from "../Assets/Blog/blog1.webp"
import blog2 from "../Assets/Blog/blog2.webp"
import blog3 from "../Assets/Blog/blog3.webp"
import blog4 from "../Assets/Blog/blog4.webp"
import blog5 from "../Assets/Blog/blog5.webp"
import blog6 from "../Assets/Blog/blog6.jpg"
import blog7 from "../Assets/Blog/blog7.jpg"
import blog8 from "../Assets/Blog/blog8.webp"
import blog9 from "../Assets/Blog/blog9.jpg"
import blog10 from "../Assets/Blog/blog10.webp"

const Blog = () => {



  const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("https://api2.kidzapp.com/api/3.0/blogs?page=1&limit=5&country_code=ae")
        .then(res => res.json())
        .then(data => setItem(data.results))
        .catch(err => console.log("Error: " +err))
    }, [])
  return (
  <>
    <div className='kids-collection blog-picks'>
      <div className='container cust-container'>
        <h2>Our Blog Picks</h2>
          <div className='row'>
            {item?.map((content,i) => {
              return((i==0 || i==5 ? 
                <div className='col-8'>
                  <div class="card blogCard" >
                    <img src={content.cover_image} class="card-img-top" alt="..." />
                    <div class="card-body blogCardBody">
                      <p class="card-text blogCardText ">{content.title}</p>
                      <hr/>
                      <p className="blogCardParaText">{content.auther_name}</p>
                    </div>
                  </div>
                </div> 
                :
                <div className='col-4'>
                  <div class="card blogCard" >
                    <img src={content.cover_image} class="card-img-top" alt="..."/>
                    <div class="card-body blogCardBody">
                      <p class="card-text blogCardText">{content.title}</p>
                      <hr/>
                      <p className="blogCardParaText">{content.auther_name}</p>
                    </div>
                  </div>
                </div>
              ))
            })}
          </div>
          <div className='row'>
            <div className='col-12'>
              <button type="button" class="btn btn-light btn-lg blogButton">View All</button>
            </div>
          </div>
        </div>
    </div> 
  </>
  )
}

export default Blog