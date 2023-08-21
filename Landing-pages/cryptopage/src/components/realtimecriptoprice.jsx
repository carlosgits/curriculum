import { useEffect } from "react";
import { useState } from "react";
import "../styles/realtimeCriptoPrice.css"
import axios from "axios";
import { apikeyBinance } from "./keys";


// require cripto symbol example BTC LTC ETH
const CriptoPrice = ({criptoSymbol}) => {

    //Put here your API key
    const apiKey="1549dbcc-75a6-4b7e-8e23-01a264137797"

    const [criptoPrice, setCripto] = useState(0)

    useEffect(() => {
        // Función para obtener los datos de la API usando Axios.
        function fetchCripto () {
          
            fetch(("https://api.coincap.io/v2/assets/bitcoin", {
                headers: { "Accept-Encoding": "gzip","Authorization": "Bearer 1549dbcc-75a6-4b7e-8e23-01a264137797"}
            })).then((response) => response.json()).then((data) => { console.log(data[0]) }).catch((error) => { console.log(error) })
        }
    
        fetchCripto(); // Llamar a la función para obtener los datos cuando el componente se monta.
      }, []);


    // cripto value with regex to add commas after 3 digits
    const value = ` $ ${Math.round(criptoPrice.rate)}`

    return (

        <div>
           
            <p className="cripto-price">{value }</p>
        </div>
    )

}

export default CriptoPrice