import { Fragment } from 'react'
import './Customize.css'


const Customize = () =>{
    return(
     
            <div className="customize-product-container">
                <div className="customize-product">
                    <img className="customize-img" src='./customize1.webp' alt="customized_product_image" />
                    <p className='customize-title'>e☆イヤホン・ラボ</p>
                    <p className='text'>オリジナル商品質オーディオケーブル</p>
                </div>
                <div className="customize-product">
                    <img className="customize-img" src='./customize2.webp' alt="customized_product_image" />
                    <p className='customize-title'>エアラ（eA-R）</p>
                    <p className='text'>愛機のポテンシャルを引き出すカスタムイヤホン</p>
                </div>
                <div className="customize-product">
                    <img className="customize-img" src='./customize3.png' alt="customized_product_image" />
                    <p className='customize-title'>ラズライト</p>
                    <p className='text'>ユーザーの耳型を元に作成するオーダーメイド</p>
                </div>
                <div className="customize-product">
                    <img className="customize-img" src='./customize4.webp' alt="customized_product_image" />
                    <p className='customize-title'>シリシウム</p>
                    <p className='text'>音楽ライブに最適なオーダーメイド</p>
                </div>
            
            </div>
            
            
    )
}

export default Customize