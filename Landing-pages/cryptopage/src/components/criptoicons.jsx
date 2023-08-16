import Bitcoin from "../icons/bitcoin"
import ChainLink from "../icons/Chainlink";
import Litecoin from "../icons/Litecoin";
import Siacoins from "../icons/siacoins";
import "../styles/criptoicons.css"


const CriptoIcons = () => {

    return (
        <div className="payment-methods">
            <span className="text-light icon-cont"><i className="icon"><Bitcoin width="25" height="25" /></i>Bitcoin</span>
            <span className="text-light icon-cont"><i className="icon"><Litecoin width="25" height="25" /></i>Litecoin</span>
            <span className="text-light  icon-cont"><i className="icon"><ChainLink width="25" height="25" /></i>Chainlink</span>
            <span className="text-light icon-cont"><i className="icon"><Siacoins width="25" height="25" /></i>Siacoins</span>
        </div>
    )
}

export default CriptoIcons