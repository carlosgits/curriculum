import {  useSelector } from "react-redux";

const Resultado= ()=>{
    const datosBusqueda = useSelector(estado => estado.reductorBusqueda.contenidoBusqueda)
    return (  
    <div className="image-container p-3 mt-3">
      {datosBusqueda.map((dato) => 
      (<div key={dato.id} className="m-1 rounded float-left">
        <img src={dato.largeImageURL} width="200px" height="150px"  alt={"Foto realizada por:  " + dato.user} />
        <h5 className="card-content"><i className="p-1 fas fa-heart blue-icon"></i> {dato.likes}<span id="likes"> likes</span></h5>
        </div>))}
    </div>
    )
}

export default Resultado