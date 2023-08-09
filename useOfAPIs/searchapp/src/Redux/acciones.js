export const AGREGAR_BUSQUEDA = "AGREGAR_BUSQUEDA"
export const ACTUALIZAR_BUSQUEDA = "ACTUALIZAR_BUSQUEDA"



export function agregarBusqueda (datos){
    return{
        type: AGREGAR_BUSQUEDA,
carga: datos
    }

}

export function actualizarBusqueda(datos){
    return {
        type: ACTUALIZAR_BUSQUEDA,
        carga: datos
    }
}