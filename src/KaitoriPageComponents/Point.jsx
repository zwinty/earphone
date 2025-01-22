import './Point.css'


const Point = () =>{
    return(
        <div className="point-container">
            <div className="point-title">
                <img src="./point.png" alt="point-title" />
            </div>
            <div className="point-content">
                <img src="point-1.jpg" alt="point-content-photo" />
                <img src="point-2.jpg" alt="point-content-photo" />
                <img src="point-3.jpg" alt="point-content-photo" />
                <img src="point-4.jpg" alt="point-content-photo" />
            </div>
            <div className="hikaku-title">
                <img src="./hikaku.png" alt="point-title" />
            </div>
            <div className="hikaku-table">
                <img src="./table.png" alt="" />
            </div>
        </div>
    )
}
export default Point