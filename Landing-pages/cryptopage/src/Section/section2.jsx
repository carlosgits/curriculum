import StepsToTradeComponent from "../components/stepstotrade";
import VideoComponent from "../components/videocomponent";
import "../styles/section2.css"

const Section2 = () => {

    return (
        <div className="section2">
            <div className="title-container">
                <h1 className="text-light title-s2 text-center">How to Trade With Krypto</h1>
                <p className="text-center  sub-tittle-s2">Always conduct your own research before making any investment decisions.</p>
            </div>
            <div className="video-steps">
                <VideoComponent width="800px" height="540px" />
                <StepsToTradeComponent />
            </div>


        </div>
    )
}

export default Section2;