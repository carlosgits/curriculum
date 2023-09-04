import CupIcon from "../icons/cup"
import GiftIcon from "../icons/gift"
import HeadphoneIcon from "../icons/headphone"
import LockIcon from "../icons/lock"
import MoneySymbol from "../icons/moneysymbol"
import WalletIcon from "../icons/wallet"
import "../styles/section4.css"
import { useTranslation } from "react-i18next"

const Section4 = () => {
    const { t } = useTranslation();
    return (
        <div className="section-4">
        <div className="title-container-s4">
          <h2 className="text-center title-s4 text-light">{t("section4.title")}</h2>
          <p className="title-subject text-center">{t("section4.subtitle")}</p>
        </div>
        <div className="features-container ">
          <div className="container">
            <div className="row row-cols-3 features mb-1 mr-2">
      
              <div className="col">
                <div className="g-title">
                  <CupIcon width="80px" height="80px" className="icon"/> <p className="g-text">{t("section4.features.0.title")}</p>
                </div>
                <div className="g-content">
                  <p className="g-paragraph">
                    {t("section4.features.0.content")}
                  </p>
                </div>
              </div>
      
              <div className="col">
                <div className="g-title">
                  <WalletIcon width="80px" height="80px" className="icon" /><p className="g-text">{t("section4.features.1.title")}</p>
                </div>
                <div className="g-content">
                  <p className="g-paragraph">
                    {t("section4.features.1.content")}
                  </p>
                </div>
              </div>
      
              <div className="col">
                <div className="g-title">
                  <LockIcon width="80px" height="80px" className="icon"/><p className="g-text">{t("section4.features.2.title")}</p>
                </div>
                <div className="g-content">
                  <p className="g-paragraph">
                    {t("section4.features.2.content")}
                  </p>
                </div>
              </div>
      
              <div className="col">
                <div className="g-title">
                  <MoneySymbol width="80px" height="80px" className="icon"/><p className="g-text">{t("section4.features.3.title")}</p>
                </div>
                <div className="g-content">
                  <p className="g-paragraph">
                    {t("section4.features.3.content")}
                  </p>
                </div>
              </div>
      
              <div className="col">
                <div className="g-title">
                  <GiftIcon width="60px" height="60px" className="icon"/><p className="g-text">{t("section4.features.4.title")}</p>
                </div>
                <div className="g-content">
                  <p className="g-paragraph">
                    {t("section4.features.4.content")}
                  </p>
                </div>
              </div>
      
              <div className="col">
                <div className="g-title">
                  <HeadphoneIcon width="60px" height="60px" className="icon"/><p className="g-text">{t("section4.features.5.title")}</p>
                </div>
                <div className="g-content">
                  <p className="g-paragraph">
                    {t("section4.features.5.content")}
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