import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'

const reduxDevtools = (window as any)['__REDUX_DEVTOOLS_EXTENSION__']  && (window as any)['__REDUX_DEVTOOLS_EXTENSION__()']

export const changeTotal = () => ({ type: "changeTotal"});

export const changeQuantity = () => ({ type: "changeQuantity"});

export const addCommand = () => ({ type: "addCommand"});


const totalPriceReducer = (state:number = 0, action:any) => {
    if (action.type === "changeTotal"){
        return state + 1;
    }
    return state;
}

const quantityReducer = (state:number = 0, action:any) => {
    if (action.type === "changeQuantity"){
        return state + 1
    }
    return state;
}

const commandReducer = (state:any[] = [], action:any) =>  {
    if (action.type === "addCommand"){
        return state.push('ballon');
    }
    return state;
}


const reducer = combineReducers({
    totalPrice: totalPriceReducer,
    quantity: quantityReducer,
    command: commandReducer,
  });
  
export const store = createStore(reducer, reduxDevtools);