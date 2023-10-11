import { BUY_CAKES } from "./CakeType"

export const buyCakes=(number=1)=>{
    return{
        type:BUY_CAKES,
        payload:number
    }
}
