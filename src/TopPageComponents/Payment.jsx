import { Fragment } from 'react'
import './Payment.css'

const Payment = () =>{
    return(
        <Fragment>
            <div className="payment">
            <div className="payment-container">
                <div className="payment-card">
                    <p className="payment-title">
                    16時までのご注文は即日出荷
                    </p>
                    <p className="payment-text">
                    16時までのご注文で入金が確認できれば、当日中に出荷いたします。※名古屋大須店にある商品については15時までのご注文分が当日発送となります。クレジットカードや代金引換ならば、確認作業がスムーズなため、最速での出荷が可能です。
                    </p>
                </div>
                <div className="payment-card">
                    <p className="payment-title">
                    お支払い方法
                    </p>
                    <p className="payment-text">
                    各種クレジットカード(一括・分割・リボ)、Amazon Pay、楽天ペイ、銀行振込、代金引換、コンビニ決済、などがお選びいただけます。</p>
                    <img src="./payment.svg" alt="payment-method" />
                </div>
                <div className="payment-card">
                    <p className="payment-title">
                    年中無休で毎日出荷
                    </p>
                    <p className="payment-text">
                    e☆イヤホンは年中無休で営業しています。休まず出荷いたします。                    </p>
                </div>
                <div className="payment-card">
                    <p className="payment-title">
                    新品3千円以上お買上で送料無料
                    </p>
                    <p className="payment-text">
                    新品商品は3千円以上お買い上げで全国送料無料にて配送します。中古商品に関してはご利用ガイドをご確認ください。 </p>
                </div>
                
            </div>
            </div>

        </Fragment>
    )
}

export default Payment