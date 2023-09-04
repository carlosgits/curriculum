import { useEffect } from "react";
import { useState } from "react";
import "../styles/realtimeCriptoPrice.css"




// require cripto symbol example BTC LTC ETH

const CriptoPrice = ({ type="bitcoin" }) => {
    const [lastPrice, setLastPrice] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${type}/market_chart?vs_currency=usd&days=1`);
          const data = await response.json();
          const lastPriceData = data.prices[data.prices.length - 1];
          setLastPrice(lastPriceData[1]);
        } catch (error) {
          console.error("Hubo un error al obtener los datos:", error);
        }
      };
  
      fetchData();
  
      // Ejecutar la función fetchData cada 24 horas
      const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000);
  
      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(intervalId);
    }, [type]);
  
    return (
      <div>
       <p className="cripto-price">$ {Math.round(lastPrice)}</p>
      </div>
    );
  };



export default CriptoPrice