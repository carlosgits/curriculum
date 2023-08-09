import { configureStore} from "@reduxjs/toolkit"
import RootReducer  from "./reductorRaiz"

export const almacen = configureStore({reducer: RootReducer})