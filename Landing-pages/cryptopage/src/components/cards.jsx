import "../styles/cards.css"

const Cards = ({width}) =>{

return(            

<div className="card-container">
<div className="card" style={{width: width}}>
    <img class="card-img-top" src={process.env.PUBLIC_URL + '/bitcoinImg.svg'} alt="Card image cap2"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>

<div className="card" style={{width: width}}>
    <img class="card-img-top" src={process.env.PUBLIC_URL + '/litecoinImg.svg'} alt="Card image cap1"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>

<div className="card" style={{width: width}}>
    <img class="card-img-top" src={process.env.PUBLIC_URL + '/ethereumImg.svg'} alt="Card image cap3"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>
</div>)

}

export default Cards;