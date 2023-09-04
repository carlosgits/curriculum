import React from "react";
import { useTranslation } from "react-i18next";
import SocialBitcoin from "../mediaicons/bitcoin-circle";
import SocialFacebook from "../mediaicons/social-facebook";
import SocialLinkedin from "../mediaicons/social-linkedin";
import SocialYoutube from "../mediaicons/social-youtube";
import "../styles/footerSection.css";

const FooterSection = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="kripto-container">
                    <p className="footer-header text-center">{t("footer.kriptoHeader")}</p>
                    <p className="k-footer-content">{t("footer.kriptoContent")}</p>
                </div>
                <div className="links-container">
                    <p className="footer-header text-center">{t("footer.linksHeader")}</p>
                    <ul>
                        <li><a href="#" className="k-footer-content">{t("footer.howItWorks")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.cryptos")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.features")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.testimonial")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.blogs")}</a></li>
                    </ul>
                </div>
                <div className="legal-container">
                    <p className="footer-header text-center">{t("footer.legalHeader")}</p>
                    <ul>
                        <li><a href="#" className="k-footer-content">{t("footer.termsOfUse")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.termsAndConditions")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.privacyPolicy")}</a></li>
                        <li><a href="#" className="k-footer-content">{t("footer.cookiePolicy")}</a></li>
                    </ul>
                </div>
                <div className="newsletter-container">
                    <p className="footer-header text-center">{t("footer.newsletterHeader")}</p>
                    <p className="newsletter-text text-center">{t("footer.newsletterText")}</p>
                    <div className="input-with-button">
                        <input type="text" id="mi-input" placeholder={t("footer.newsletterInputPlaceholder")} />
                        <button id="mi-boton">{t("footer.subscribeButton")}</button>
                    </div>
                    <p className="newsletter-disclaimer text-center">{t("footer.newsletterDisclaimer")}</p>
                </div>
                
            </div>
            <hr className="horizontal-line"/>
            <div className="footer-media-content">
                <div className="footer-media-1">
                    <a href="#">{t("footer.privacyTerms")}</a>
                    <a href="#">{t("footer.contactUs")}</a>
                </div>
                <div className="footer-media-2">
                    <a href="#">{t("footer.copyright")}</a>
                </div>
                <div className="footer-media-3">
                    <a href=""><SocialYoutube/></a>
                    <a href=""><SocialLinkedin/> </a>
                    <a href=""><SocialFacebook/></a>
                    <a href=""><SocialBitcoin/></a>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;
