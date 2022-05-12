import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'

const reduxDevtools = (window as any)['__REDUX_DEVTOOLS_EXTENSION__']  && (window as any)['__REDUX_DEVTOOLS_EXTENSION__()']

export const changeTotal = (price:number) => ({ type: "changeTotal", payload: price});

export const changeQuantity = () => ({ type: "changeQuantity"});

export const addCommand = (name:string, price:number, id:string) => ({ type: "addCommand", name: name, price: price, id: id});


const totalPriceReducer = (state:number = 0, action:any) => {
    if (action.type === "changeTotal"){
        return state + action.payload;
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
        return state.concat({name: action.name, price: action.price, quantity: 1, id: action.id});
        
    }
    return state;
}


const reducer = combineReducers({
    totalPrice: totalPriceReducer,
    quantity: quantityReducer,
    command: commandReducer,
  });
  
export const store = createStore(reducer, reduxDevtools);