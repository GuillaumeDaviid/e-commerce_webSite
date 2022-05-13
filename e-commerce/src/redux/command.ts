import { createAction, createReducer } from '@reduxjs/toolkit'

export const addCommand = createAction('addCommand', (name:string, price:number, id:string) => ({
    payload: {name, price, id},
}));

export const commandReducer = createReducer([], (builder:any) =>
  builder
    .addCase(addCommand, (state:any, action:any) => {
      return state.concat({name: action.payload.name, price: action.payload.price, quantity: 1, id: action.payload.id});
    })
)
