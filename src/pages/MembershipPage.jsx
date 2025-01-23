import MemberShipFirstView from "../MemberShipComponents/MemberShipFirstView"
import Navigation from "../TopPageComponents/Navigation"
import Footer from "../TopPageComponents/Footer"

const MembershipPage = () =>{
    return(
        <>
        <Navigation/>
        <div className="margin-div"></div>
        <MemberShipFirstView/>
        <Footer/>
        </>
    )
}
export default MembershipPage