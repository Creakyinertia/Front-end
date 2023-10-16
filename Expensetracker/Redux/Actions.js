// import { ADD, ADDEXPENSE } from "./ActionTypes";

// // export const addExpense=(rdata)=>{
// //     return {
// //         type:ADD,
// //         payload:rdata
// //     }
// // }

// export const addingExpense = (data) => {
//     return{
//         type: ADDEXPENSE,
//         payload: data
//     }
// }


export const ADD_EXPENSE = 'ADD_EXPENSE';


export const addExpense = (data=[]) => {
    return {
  type: ADD_EXPENSE,
  payload: data,
}};


