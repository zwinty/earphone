import { Fragment } from 'react'
import './BlogCard.css'


const BlogCard = ({img,title,text}) =>{
    return(


        <div className="blog-card-container">
                <img className='blog-card-img' src={img} alt="blog-photo" />
                 <p className="blog-title">{title}</p>
                 <p className="blog-text">{text}</p>
            </div>



           
            
            
    )
}

export default BlogCard