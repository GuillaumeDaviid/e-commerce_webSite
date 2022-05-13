import { createAction, createReducer } from '@reduxjs/toolkit'
import {productList}  from "../datas/productList"

export const addCommand = createAction('addCommand', (name:string, price:number, id:string) => ({
    payload: {name, price, id},
}));

export const commandReducer = createReducer([productList], (builder:any) =>
  builder
    .addCase(addCommand, (state:any, action:any) => {
        for (const obj of state[0]) {
            if (obj.id === 1) {
              obj.quantity = 1;

              break;
            }
          }
    })
)
