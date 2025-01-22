import BlogCard from "../TopPageComponents/BlogCard"
import './CustomerExperience.css'

const CustomerExperience = () =>{
    return(
        <div className="cus-exp-container">
            <div className="voice-title">
                <img src="./voice_title.png" alt="voice-title" />
            </div>
            <div className="voice-blog-container">
                <BlogCard img="./voice_blog.svg" />
                <BlogCard img="./voice_blog.svg"/>
            </div>
        </div>
    )
}

export default CustomerExperience