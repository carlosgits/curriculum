
import { combineReducers } from "redux";
import { ImagenesReducer } from "./reductor";

 const RootReducer = combineReducers({reductorBusqueda: ImagenesReducer })

 export default RootReducer