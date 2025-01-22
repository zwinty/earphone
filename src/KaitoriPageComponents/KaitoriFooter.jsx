import './KaitoriFooter.css'

const KaitoriFooter = ()=>{
    return(
        <div className="kaitori-footer-container">
            <div className="moshikomi-container">
                <img src="./satei.png" alt="satei-pic" />
            </div>
            <div className="footer-container">
                <div className="footer-top">
                    <img src="./logo-black.svg" alt="logo" />
                    <p>イヤホン・ヘッドホン専門店 e☆イヤホン WEB本店<br />
                       このWEBサイトに掲載されている記事・写真・図表などの転載・複製の一切を禁じます。
                    </p>
                </div>
                <div className="footer-buttom">
                    <p>Copyright© e☆イヤホン All rights reserved.</p>
                </div>
            </div>
        </div>

    )
}

export default KaitoriFooter