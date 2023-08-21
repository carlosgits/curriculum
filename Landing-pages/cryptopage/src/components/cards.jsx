import "../styles/cards.css"
import CriptoPrice from "./realtimecriptoprice";


const Cards = ({ width }) => {

    return (
      

        <div className="card-deck card-container">
            
            <div className="card first-card" style={{ width: width }}>
                <img class="card-img-top" src={process.env.PUBLIC_URL + '/bitcoinImg.svg'} alt="bitcoin card info" />
                <div class="card-body">
                    <h5 class="card-title">Bitcoin</h5>
                    <p class="card-text">
                        As the pioneer, Bitcoin securely transfers value globally. With a capped supply of 21M coins, it reshapes finance.</p>
                    <div className="btn-container">
                    <CriptoPrice criptoSymbol="BTC"/> <a href="#" class="btn  btn-cont">TRADE NOW</a>
                    </div>
                </div>
            </div>

            <div className="card" style={{ width: width }}>
                <img class="card-img-top" src={process.env.PUBLIC_URL + '/litecoinImg.svg'} alt="Litecoin card info" />
                <div class="card-body">
                    <h5 class="card-title">Litecoin</h5>
                    <p class="card-text">Known as digital silver, Litecoin offers swift transactions. With a total of 84M coins, it's practical for daily use.</p>
                    <div className="btn-container">
                    <CriptoPrice criptoSymbol="LTC"/>   <a href="#" class="btn btn-cont text-right">TRADE NOW</a>
                    </div>
                </div>
            </div>

            <div className="card last-card" style={{ width: width }}>
                <img class="card-img-top" src={process.env.PUBLIC_URL + '/ethereumImg.svg'} alt="Ethereum card info" />
                <div class="card-body">
                    <h5 class="card-title">Ethereum</h5>
                    <p class="card-text">Beyond cryptocurrency, Ethereum empowers smart contracts and dApps. Ether drives innovation across diverse industries.</p>
                    <div className="btn-container">
                    <CriptoPrice criptoSymbol="ETH"/> <a href="#" class="btn btn-cont">TRADE NOW</a>
                    </div>
                </div>
            </div>
        </div>)

}

export default Cards;