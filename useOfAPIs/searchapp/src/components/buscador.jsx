
import { useDispatch,useSelector } from "react-redux"
import { agregarBusqueda, actualizarBusqueda } from "../Redux/acciones";
import "../styles/buscador.css"


   


function BuscadorArea () {
    const dispatch = useDispatch()
    const busquedaResultado= useSelector(estado=>estado.reductorBusqueda.termino)
    function LlamarApi (){
        const apiKey = "Introduce here your PixaBay ApiKey"
        
        const apiURL =`https://pixabay.com/api/?key=${apiKey}&q=${busquedaResultado}&image_type=photo&per_page=30&page=`
        fetch(apiURL).then(respuesta=>respuesta.json()).then(datos=>dispatch(agregarBusqueda(datos.hits))).catch(error=>console.log("el error es:" + error))
        
          }
          


   
    return (
    
    
      
    <div className="container ">
<nav class="nav p-0 ">
    <input class="w-75 p-1 input-custom btn-color-light" type="search" placeholder="Search something" aria-label="Search" onChange={(e) => dispatch(actualizarBusqueda(e.target.value),e.preventDefault())}/>
    <button class="btn btn-outline-primary w-2"  onClick={() => { LlamarApi() }}>Search</button>
</nav>
</div>)

}

export default BuscadorArea
