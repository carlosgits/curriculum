import StepsToTradeComponent from "../components/stepstotrade";
import VideoComponent from "../components/videocomponent";
import "../styles/section2.css"
import { useTranslation } from "react-i18next";

const Section2 = () => {
    const { t } = useTranslation();


    return (
        <div className="section2">
            <div className="title-container">
                <h1 className="text-light title-s2 text-center">{t("section2.title")}</h1>
                <p className="text-center  sub-tittle-s2">{t("section2.subtitle")}</p>
            </div>
            <div className="video-steps">
                <VideoComponent width="800px" height="540px" />
                <StepsToTradeComponent />
            </div>


        </div>
    )
}

export default Section2;