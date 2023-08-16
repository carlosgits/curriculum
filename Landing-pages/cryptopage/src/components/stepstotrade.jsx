import "../styles/stepstotrade.css"

const StepsToTradeComponent = ()=>{
    return(
        <div className="stepsToTrade">
            
            <div className="container">
            <h1 className="tittle text-center">Steps to Trade</h1>
            <div className="oval-container">
            <p className="circle text-center">01</p><p className="text-content">Create an account</p>
            </div>
            <div className="oval-container">
            <p className="circle text-center">02</p><p className="text-content">Download platfrom</p>
            </div>
            <div className="oval-container">
            <p className="circle text-center">03</p><p className="text-content">Select crypto</p>
            </div>
            <div className="oval-container">
            <p className="circle text-center">04</p><p className="text-content">Start trading</p>
            </div>
        </div>
        </div>
    )
}

export default StepsToTradeComponent;