import BannerAndProduct from "../TopPageComponents/BannerAndProduct"
import BannerSlider from "../TopPageComponents/BannerSlider"
import BannerSliderShop from "../TopPageComponents/BannerSliderShop"
import Navigation from "../TopPageComponents/Navigation"
import NewArrival from "../TopPageComponents/NewArrival"
import SougoRanking from "../TopPageComponents/SougoRanking"
import StaffReview from "../TopPageComponents/StaffReview"
import SougoReview from "../TopPageComponents/SougoReview"
import Customize from "../TopPageComponents/Customize"
import Payment from "../TopPageComponents/Payment"
import Footer from "../TopPageComponents/Footer"
import Blog from "../TopPageComponents/Blog"
import Recommend from "../TopPageComponents/Recommend"
import SougoLink from "../TopPageComponents/SougoLink"
import '../TopPageComponents/Css.css'

const TopPage = ()=>{
    return(
      <>
            <Navigation/>
            <div className="margin-div"></div>
            <BannerSlider/>
            <BannerAndProduct/>
            <BannerSliderShop/>
            <NewArrival/>
            <StaffReview/>
            <SougoRanking/>
            <SougoReview/>
            <Customize/>
            <Blog/>
            <Recommend/>
            <Payment/>
            <SougoLink/>
            <Footer/>
            
            </>
        
    )
}

export default TopPage