import { Fragment } from "react"
import './HouNin.css'
const HouNin = () =>{
    return(
        <Fragment>
            <div className="hounin-background">
            <div className="hou-nin-container">
            <h2>e☆イヤホンの法人買取</h2>
            <p>大量の同一商品の在庫整理や在庫処分、その他展示機サンプルなどで使用されたお品物も買取しております。ポータブルオーディオの専門知識を持ち、取引経験豊富な専任担当者がご対応いたします。お見積、取引方法、取引期間も柔軟にご提案いたします。</p>
            <img className="hounin-img" src="./hounin.svg" alt="" />
            <button className="hounin-buttons">在庫整理・在庫処分〉 法人の方はこちら　　»</button>
            </div>
            </div>
        </Fragment>
    )
}

export default HouNin