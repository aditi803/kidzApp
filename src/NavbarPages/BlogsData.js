import React, { useEffect, useState } from 'react'
import '../NavbarPagesStyles/BlogData.css'
import {FaCalendarAlt, FaUserCircle} from "react-icons/fa"

const BlogsData = () => {

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("https://api2.kidzapp.com/api/3.0/blogs?page=1&limit=5&country_code=ae")
        .then(res => res.json())
        .then(data => setItem(data.results))
        .catch(err => console.log("Error: " +err))
    }, [])
  return (
    <>
        <div className='container ' >
            <div className='row' style={{justifyContent:" center"}}>
                {
                    item?.map((content) =>                 
                    (   
                        <div className='col-3 blogDataCard' key={content.id} style={{boxShadow: "1px 1px 5px #999", background: "#eeeeee66", margin:'0.5rem 1rem',width:"370px",height:"450px"}}>
                           
                           <div className='BlogDataWrapper'>

                               <div className="img-blog">
                                    <img src={content.cover_image}  
                                        className="card-img-top blogDataImg"
                                        style={{height:"180px", width:"350px"}} 
                                        alt="..."
                                    />
                                </div>

                                <h2>{content.title}</h2>

                                <div>
                                    <div className='meta'>
                                        <span style={{display:"flex"}}>
                                            <p className='meta-icon meta-cal'><FaCalendarAlt /></p>
                                            <p>{content.created_at}</p>
                                        </span>
                                        <span style={{display:"flex"}}>
                                            <p className='meta-icon meta-author'><FaUserCircle /></p>
                                            <p>{content.auther_name}</p>
                                        </span>
                                    </div>

                                    <div className='trim-paragraph'>
                                        <div className='initial-paragraph'>
                                            <p>{content.excerpt}</p>
                                        </div>
                                    </div>

                                    <div className='read-more'>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default BlogsData