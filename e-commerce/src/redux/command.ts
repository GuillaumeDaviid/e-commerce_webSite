import { createAction, createReducer } from '@reduxjs/toolkit'
import {productList}  from "../datas/productList"

export const addCommand = createAction('addCommand', (name:string, price:number, id:string) => ({
    payload: {name, price, id},
}));

export const lessCommand = createAction('lessCommand', (name:string, price:number, id:string) => ({
    payload: {name, price, id},
}));

export const clearCart = createAction('clearCart', () => ({
    payload: {},
}));

export const commandReducer = createReducer([productList], (builder:any) =>
  builder
    .addCase(addCommand, (state:any, action:any) => {
        state[0].map((item:any,key:any) => {
            if(item.id === action.payload.id){
               return state[0][key].quantity++;
            }
        });
    })

    .addCase(lessCommand, (state:any, action:any) => {
        state[0].map((item:any,key:any) => {
            if(item.id === action.payload.id){
               return state[0][key].quantity--;
            }
        });
    })

    .addCase(clearCart, (state: any, action:any) => {
        const newState = productList
        return state = [newState]
    })
)
