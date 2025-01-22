import Navigation from "../TopPageComponents/Navigation"
import Footer from "../TopPageComponents/Footer"
import FirstView from "../KaitoriPageComponents/FirstView"
import Method from "../KaitoriPageComponents/Method"
import BannerSlider from "../TopPageComponents/BannerSlider"
import KaitoriBannerSlider from "../KaitoriPageComponents/KaitoriBannerSlider"
import Point from "../KaitoriPageComponents/Point"
import HouNin from "../KaitoriPageComponents/HouNin"
import Kotsu from "../KaitoriPageComponents/Kotsu"
import Cleaning from "../KaitoriPageComponents/Cleaning"
import CustomerExperience from "../KaitoriPageComponents/CustomerExperience"
import FooterText from "../KaitoriPageComponents/FooterText"
import Question from "../KaitoriPageComponents/Question"
import KaitoriFooter from "../KaitoriPageComponents/KaitoriFooter"

const KaitoriPage = ()=>{
    return(
      <>
            <Navigation/>
            <FirstView/>
            <Method/>
            <KaitoriBannerSlider/>
            <Point/>
            <HouNin/>
            <Kotsu/>
            <Cleaning/>
            <CustomerExperience/>
            <FooterText/>
            <Question/>
            <KaitoriFooter/>
           
       
            
            </>
        
    )
}

export default KaitoriPage