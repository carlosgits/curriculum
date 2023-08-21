import CriptoIcons from "../components/criptoicons";
import Clock from "../components/cryptoClock";
import CriptoPrice from "../components/realtimecriptoprice";
import "../styles/section1.css"


const Section1 = () => {

    return(  
<div className="section-1"> 
<h1 className="k-title-section-1 text-center" >Next Generation <br/>Crypto Trading</h1>
   <p className="k-text-section-1 text-center">Crypto Market Starts in</p> 
   <Clock />
   <div className="button-section  mt-3">
       <a href="#section-1" className="button-s-1 download-button " role="button" aria-pressed="true"><p className="text-center">DOWNLOAD APP</p></a>
       <a href="#section-1" className="button-s-1 trade-button" role="button" aria-pressed="true"><p className="text-center">TRADE CRYPTO</p></a>
   </div>

   <p className="text-center mt-3 text-light">WE ACCEPT</p>
  <CriptoIcons/>
</div>
)
}

export default Section1;