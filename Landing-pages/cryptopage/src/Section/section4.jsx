import CupIcon from "../icons/cup"
import GiftIcon from "../icons/gift"
import HeadphoneIcon from "../icons/headphone"
import LockIcon from "../icons/lock"
import MoneySymbol from "../icons/moneysymbol"
import WalletIcon from "../icons/wallet"
import "../styles/section4.css"

const Section4 = () => {

    return (
        <div className="section-4">
            <div className="title-container-s4">
                <h2 className="text-center title-s4 text-light">Attractive Features</h2>
                <p className="title-subject text-center">Cryptocurrency investments are subject to market risks</p>
            </div>
            <div className="features-container ">
                <div className="container">
                    <div class="row row-cols-3 features mb-1 mr-2">

                        <div class="col">
                            <div className="g-title">
                                <CupIcon width="80px" height="80px" className="icon"/> <p className="g-text">Weekly Trading
Contest</p>
                            </div>
                            <div className="g-content">
                                <p className="g-paragraph">
                                Dive into the world of crypto trading with our exhilarating Weekly Trading Contest. Whether you're a seasoned crypto pro or taking your first steps in the world of digital assets,
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div className="g-title">
                                
                            <WalletIcon width="80px" height="80px" className="icon"  /><p className="g-text">Less Commission On Trade</p>
                            </div>
                            <div className="g-content">
                            <p className="g-paragraph">
                            Say goodbye to high fees and welcome a more cost-effective trading experience with our new "Less Commission On Trade" initiative.
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div className="g-title">
                            <LockIcon width="80px" height="80px" className="icon"/><p className="g-text"  >Safe And Secure Trading platform</p>
                            </div>
                            <div className="g-content">
                            <p className="g-paragraph">
                            Welcome to our Safe and Secure Trading Platform, where your peace of mind is our top priority. We understand that security is paramount.
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div className="g-title">
                            <MoneySymbol width="80px" height="80px"  className="icon"/><p className="g-text">Instant Withdraw
Process</p>
                            </div>
                            <div className="g-content">
                                <p className="g-paragraph">Introducing our Instant Withdrawal Process  your key to swift access to your funds. We understand that timely access to your earnings is essential.</p>
                            </div>
                        </div>

                        <div class="col">
                            <div className="g-title">
                            <GiftIcon width="60px" height="60px"  className="icon"/><p className="g-text">Monthly Commition</p>
                            </div>
                            <div className="g-content">
                            <p className="g-paragraph">
                            We've introduced our Monthly Commission system  straightforward and transparent. We believe in keeping things simple.
                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div className="g-title">
                            <HeadphoneIcon width="60px" height="60px"  className="icon"/><p className="g-text">24/7 Support
Team</p>
                            </div>
                            <div className="g-content">
                            <p className="g-paragraph">
                            We understand that questions can arise at any moment, which is why our dedicated support team is available around the clock to address your inquiries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4