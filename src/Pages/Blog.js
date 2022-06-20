import React from 'react'
import {useState, useEffect} from "react"
import { Blog_API } from '../Configuration/utils';
import  "../Styles/Blog.css"

const Blog = () => {



  const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(Blog_API)
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
              return( 
                <div className={`${i===0 || i===5 ?'col-md-8':'col-md-4'}`}  key={content.id}>
                  <div className="card blogCard" >
                    <img src={content.cover_image} className="card-img-top" alt="..." />
                    <div className="card-body blogCardBody">
                      <p className="card-text blogCardText ">{content.title}</p>
                      <hr/>
                      <p className="blogCardParaText">{content.auther_name}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='row'>
            <div className='col-12'>
              <button type="button" className="btn btn-light btn-lg blogButton">View All</button>
            </div>
          </div>
      </div>
    </div> 
  </>
  )
}

export default Blog