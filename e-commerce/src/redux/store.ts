import { configureStore } from '@reduxjs/toolkit'
import { commandReducer } from './command';

export const changeTotal = (price:number) => ({ type: "changeTotal", payload: price});

export const changeQuantity = () => ({ type: "changeQuantity"});

//export const addCommand = (name:string, price:number, id:string) => ({ type: "addCommand", name: name, price: price, id: id});


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

export const store = configureStore({
    reducer : {
    totalPrice: totalPriceReducer,
    quantity: quantityReducer,
    command: commandReducer,
    }
});