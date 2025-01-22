import { Link } from "react-router-dom"
import './FirstView.css'

const FirstView = () =>{
    return(
        <div className="kaitori-firstview-container">
             <img className="first-view" src="./kaitori_firstview.svg" alt="" />
            <div className="mitsumori-form-container">
                <div className="form-title"><h3>オンライン買取見積書</h3></div>
                
                <div className="mitsu-form">
                <div className="mitsu-search">
                    <label>キーワード: </label>
                    <input type="text" />
                </div>
                <div className="mitsu-search">
                    <label>カテゴリ: </label>
                        <select>
                            <option value="">選択してください</option>
                            <option value="electronics">ワイヤレス</option>
                            <option value="furniture">有線イヤホン</option>
                            <option value="books">有線ヘッドホン</option>
                            <option value="clothing">ゲーミング</option>
                            <option value="">プレーヤー</option>
                            <option value="electronics">AMP・DAC</option>
                            <option value="furniture">修理・自作</option>
                            <option value="books">雑貨アクセサリ</option>
                            <option value="clothing">アウトレット</option>
                        </select>
                </div>
                <div className="mitsu-search">
                    <label>メーカー: </label>
                    <select>
    <option value="">選択してください</option>
    <option value="sony">ソニー (SONY)</option>
    <option value="panasonic">パナソニック (Panasonic)</option>
    <option value="audio-technica">オーディオテクニカ (Audio-Technica)</option>
    <option value="bose">ボーズ (Bose)</option>
    <option value="jbl">ジェイビーエル (JBL)</option>
    <option value="apple">アップル (Apple)</option>
    <option value="samsung">サムスン (Samsung)</option>
    <option value="soul">ソウル (Soul)</option>
    <option value="sennheiser">ゼンハイザー (Sennheiser)</option>
    <option value="shure">シュア (Shure)</option>
</select>
                </div>
                <div className="mitsumori-btn">
                   <button className="mitsu-btn"><Link  to="/kaitori2">検索</Link></button> 
                </div>
                </div>
            </div>
        </div>
    )
}
export default FirstView