import { createStore, combineReducers } from "redux";

export const changeTotal = () => ({ type: "changeTotal"});

export const changeQuantity = () => ({ type: "changeQuantity"});

export const addCommand = () => ({ type: "addCommand"});

const totalPriceReducer = (state:number = 0, action:any) => {
    if (action.type === "changeTotal"){
        return state + 1;
    }
}

const quantityReducer = (state:number = 0, action:any) => {
    if (action.type === "changeQuantity"){
        return state + 1
    }
}

const commandReducer = (state:any[] = [], action:any) =>  {
    if (action.type === "addCommand"){
        return state.push('ballon');
    }
}


const reducer = combineReducers({
    totalPrice: totalPriceReducer,
    quantity: quantityReducer,
    command: combineReducers,
  });
  
  export const store = createStore(reducer);