import { Fragment } from "react"
import './Footer.css'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () =>{
    return(
        <Fragment>
            <div className="footer-container">
               
                <div className="footer-links-pc">
                    <div className="footer-links-top">
                        <div className="category">
                            <h4>カテゴリ</h4>
                            <div className="category-links">
                            <ul>
                                <li><a href="#">イヤホン</a></li>
                                <li><a href="#">ヘッドホン</a></li>
                                <li><a href="#">カスタムIEM</a></li>
                           </ul>
                           <ul>
                                <li><a href="#">ケーブル</a></li>
                                <li><a href="#">スピーカー</a></li>
                                <li><a href="#">ワイヤレス</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">プレーヤー</a></li>
                                <li><a href="#">雑賃・アクセサリ</a></li>
                                <li><a href="#">中古商品</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="content">
                        <h4>コンテンツ</h4>
                            <div className="content-links">
                               
                            <ul>
                                <li><a href="#">ワイヤレスイヤホンの正しい選び方</a></li>
                                <li><a href="#">iPhoneにおすすめイヤホン・ヘッドホン</a></li>
                                <li><a href="#">おすすめのゲーミングヘッドセットランキング</a></li>
                                <li><a href="#">Bluetoothスピーカーおすすめ特集</a></li>
                                <li><a href="#">専門店がおすすめする！ノイキャンイヤホン</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">おすすめ完全ワイヤレスイヤホン</a></li>
                                <li><a href="#">Airpods　Pro用イヤピース特集</a></li>
                                <li><a href="#">映画鑑賞におすすめヘッドホン特集</a></li>
                                <li><a href="#">専門店がおすすめする！ノイキャンヘッドホン特集</a></li>
                            </ul>
                            </div>
                         

                        </div>
                    </div>
                    <div className="footer-links-bottom">
                        <div className="sitelinks-container">
                            <div className="sitelinks">
                                <h4>サイトリンク</h4>
                                <ul>
                                    <li><a href="#">Web本店</a></li>
                                    <li><a href="#">秋葉原店　本店</a></li>
                                    <li><a href="#">ゲーミング　AKIBA</a></li>
                                    <li><a href="#">大阪日本橋本店</a></li>
                                    <li><a href="#">名古屋大須店</a></li>
                                    <li><a href="#">仙台駅前店</a></li>
                                    <li><a href="#">会社概要</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="services-container">
                        <div className="services">
                                <h4>サービス</h4>
                                <ul>
                                    <li><a href="#">買取サービス</a></li>
                                    <li><a href="#">カスタマイズ修理</a></li>
                                    <li><a href="#">メーカー修理受付</a></li>
                                    <li><a href="#">カスタムIEM</a></li>
                                    <li><a href="#">ラッピングサービス</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="info-container">
                        <div className="info">
                                <h4>info</h4>
                                <ul>
                                    <li><a href="#">アルバイト大募集</a></li>
                                    <li><a href="#">会員登録・修正</a></li>
                                    <li><a href="#">会員ポイント確認</a></li>
                                    <li><a href="#">注文履歴確認</a></li>
                                    <li><a href="#">プライバシーポリシー</a></li>
                                    <li><a href="#">ご利用規約</a></li>
                                    <li><a href="#">特定商取引に基づく表記</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="socail-media-container">
                            <div className="social-media">
                            <h4>ソーシャル</h4>
                                <ul>
                                    <li><a href="#">X（Twitter）</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">YouTube</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            


                <div className="footer-links-ph">
                    <ul>
                        <li><a href="#">利用ガイド</a></li>
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                        <li><a href="#">ご利用規約</a></li>
                        <li><a href="#">特定商取引法に基づく表記</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">求人情報</a></li>
                    </ul>
                </div>
            </div>

        </Fragment>
    )
}

export default Footer