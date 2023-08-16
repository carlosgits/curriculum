import Cards from "../components/cards";
import "../styles/section3.css"


const Section3 = () => {

    return (
        <div className="section3">
            <div className="title-container">
                <h2 className="text-center title-s3 text-light">Available Cryptos</h2>
                <p className="title-subject text-center">Cryptocurrency investments are subject to market risks</p>
            </div>
            <Cards width="350px" height="650px"/>
        </div>
    )

}

export default Section3;