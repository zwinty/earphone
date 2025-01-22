import './Recommend.css'

const Recommend = () =>{
    return(
        <div className="recommend-outer-container">
        <h2>おすすめ・特集</h2>
        <div className="recommend-container">
             <div className="recommend-left">
                <img src="./recommend3.webp" alt="" /><img src="./recommend4.webp" alt="" /><img src="./recommend5.webp" alt="" />
             </div>
            <div className="recommend-right">
                <div className="recommend-blog">
                    <img src="./recommend1.webp" alt="recommend-photo" />
                    <p className="recommend-text">2024年の年間ランキングを大発表！カテゴリーごとに集計したものをまとめて掲載しました！2024年のトレンドがまるわかりです。</p>
                </div>
                <div className="recommend-blog">
                <img src="./recommend2.webp" alt="recommend-photo" />
                <p className="recommend-text">専門店スタッフが選ぶおすすめの完全ワイヤレスイヤホンをご紹介！スタッフレビューをご参考にしていただければ、自分にあった機種が見つかること間違いなし！</p>
                </div>
            </div>
            <div className="recommend-bottom"></div>
        </div>
        </div>
    )
}
export default Recommend