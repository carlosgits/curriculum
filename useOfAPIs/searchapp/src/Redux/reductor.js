import { ACTUALIZAR_BUSQUEDA, AGREGAR_BUSQUEDA } from "./acciones";



const estadoInicial ={
    contenidoBusqueda: [],
    termino: ""
}

export function ImagenesReducer (estado = estadoInicial,accion ){
switch(accion.type){
case AGREGAR_BUSQUEDA:
    return{...estado,contenidoBusqueda: accion.carga}
    case ACTUALIZAR_BUSQUEDA:
        return{...estado,termino: accion.carga}
    default: return estado
  
}
}