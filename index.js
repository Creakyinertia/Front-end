const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

const buycake=()=>{
    return{
        type:BUY_CAKE,
        payload:'first_redux_action'
    }
}
const icecream=()=>{
    return{
        type:BUY_ICECREAM,
        payload:'first_redux_action'
    }
}

const initialCakeState={
    numOfCakes:10
}
const initialIcecreamState={
    numOfIcecreams:20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{ 
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        // case BUY_ICECREAM:
        //     return{ ...state,
        //         numOfIcecreams:state.numOfIcecreams-1
        //     }
        default : return state
    }
}
const icecreamReducer=(state=initialIcecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{ 
                ...state,
                numOfIcecreams:state.numOfIcecreams-1
            }
        default : return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

const store=createStore(rootReducer,applyMiddleware(logger))
console.log('initialState',store.getState())
const unsubscirbe=store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(icecream())
store.dispatch(icecream())
store.dispatch(icecream())
unsubscirbe()