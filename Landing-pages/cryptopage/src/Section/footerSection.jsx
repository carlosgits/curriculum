
import SocialBitcoin from "../mediaicons/bitcoin-circle"
import SocialFacebook from "../mediaicons/social-facebook"
import SocialLinkedin from "../mediaicons/social-linkedin"
import SocialYoutube from "../mediaicons/social-youtube"
import "../styles/footerSection.css"

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="kripto-container">
                    <p className="footer-header text-center">Kripto</p>
                    <p className="k-footer-content">In the realm of digital finance, the term "krypto" resonates with an aura of innovation and security. Krypto currencies like Bitcoin and Ethereum have revolutionized how we perceive money and transactions.</p>
                </div>
                <div className="links-container/">
                    <p className="footer-header text-center">LINKS</p>

                    <ul >
                        <li><a href="#" className="k-footer-content">How it works</a></li>
                        <li><a href="#" className="k-footer-content">Cryptos</a></li>
                        <li><a href="#" className="k-footer-content">Features</a></li>
                        <li><a href="#" className="k-footer-content">Testimonial</a></li>
                        <li><a href="#" className="k-footer-content">Blogs</a></li>
                    </ul>

                </div>
                <div className="legal-container">
                    <p className="footer-header text-center">LEGAL</p>
                    <ul >
                        <li><a href="#" className="k-footer-content">Terms of use</a></li>
                        <li><a href="#" className="k-footer-content">Terms of conditions</a></li>
                        <li><a href="#" className="k-footer-content">Privacy policy</a></li>
                        <li><a href="#" className="k-footer-content">Testimonial</a></li>
                        <li><a href="#" className="k-footer-content">Cookie policy</a></li>
                    </ul>
                </div>
                <div className="newsletter-container">
                    <p className="footer-header text-center">NEWSLETTER</p>
                    <p className="newsletter-text text-center">Over 25000 people have subscribed</p>
                    <div class="input-with-button">
                        <input type="text" id="mi-input" placeholder="Enter your email" />
                        <button id="mi-boton">SUSCRIBE</button>
                    </div>
                    <p className="newsletter-disclaimer text-center">We dont sell your email span</p>
                </div>
                
            </div>
            <hr className="horizontal-line"/>
            <div className="footer-media-content">
                <div className="footer-media-1">
                    <a href="#">Privacy & Terms</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="footer-media-2">
                    <a href="#">Copyright @ 2022 xpence</a>
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

export default FooterSection