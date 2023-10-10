import { combineReducers } from "redux";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import CakeReducer from "./cake/CakeReducer";

const rootReducer=combineReducers({
    Cake:CakeReducer,
    IceCream:IceCreamReducer
})

export default rootReducer