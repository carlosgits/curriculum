import CriptoIcons from "../components/criptoicons";
import Clock from "../components/cryptoClock";
import "../styles/section1.css"
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next'; // Import the Trans component


const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className="section-1">
      <div className="title-container">
        <h1 className="k-title-section-1 text-center" > <Trans i18nKey="section1.title">
          Next Generation<br />Crypto Trading
        </Trans></h1>
        <p className="k-text-section-1 text-center">{t("section1.subtitle")}</p>
      </div>
      <div className="section1-container">
        <Clock />
        <div className="button-section  mt-3">
          <a href="#section-1" className="button-s-1 download-button " role="button" aria-pressed="true"><p className="text-center">{t("section1.downloadApp")}</p></a>
          <a href="#section-1" className="button-s-1 trade-button" role="button" aria-pressed="true"><p className="text-center">{t("section1.tradeCrypto")}</p></a>
        </div>

        <p className="text-center mt-3 text-light">{t("section1.accept")}</p>
      </div>
      <CriptoIcons />
    </div>
  )
}

export default Section1;