import { Fragment } from "react"
import './Question.css'


const Question = () =>{
    return(
        <Fragment>
            <div className="question-container">
                <img src="./faq.png" alt="" />
                <img className="question-img" src="./question.svg" alt="" />
            </div>
            <div className="map-container">
                <img src="./map.svg" alt="map-pic" />
            </div>
            <div className="shop-btn-container">
                <button className="shop-btn">店舗の詳細はこちら≫</button>
            </div>
        </Fragment>
    )
}

export default Question