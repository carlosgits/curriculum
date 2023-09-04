import Cards from "../components/cards";
import "../styles/section3.css"
import { useTranslation } from "react-i18next";

const Section3 = () => {
    const { t } = useTranslation();
    return (
        <div className="section3">
            <div className="title-container">
                <h2 className="text-center title-s3 text-light">{t("section3.title")}</h2>
                <p className="title-subject text-center">{t("section3.subtitle")}</p>
            </div>
            <Cards width="350px" height="650px"/>
        </div>
    )

}

export default Section3;