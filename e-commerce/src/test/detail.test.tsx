import React from 'react';
import Detail from '../components/Detail'
import { BrowserRouter as Router, Route, Routes, MemoryRouter } from "react-router-dom";
import {  render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from "react-redux";
import { store } from "../redux/store";
import {productList}  from "../datas/productList"
import { addCommand, lessCommand, commandReducer } from '../redux/command'

const updatedList = productList.map(p =>
    p.id === '1ed'
      ? { ...p, quantity: 1 }
      : p
  );




describe('Detail', () => {

    test('Should render without crashing', async () => {
        render(
            <Provider store={store}>
            <Router>
            <Detail/>
            </Router>
            </Provider>
        );
    })

    test('Should have an article', async () => {
        render(
            <Provider store={store}>
            <MemoryRouter initialEntries={['/detail/id=1ed']}>
            <Routes>
             <Route path="detail" element={<Detail />}>
               <Route path=":id" element={<Detail />}/>
             </Route>
            </Routes>
            </MemoryRouter>
            </Provider>
        );

        const imgElement = screen.getByAltText('clavier');
        const nameElement = screen.getByTestId('nameElement');
        const priceElement = screen.getByTestId('priceElement');
        const btnElement = screen.getByTestId('btnElement');
        expect(btnElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent('clavier');
        expect(priceElement).toHaveTextContent('15 €');
        expect(imgElement).toBeInTheDocument();
    })

    test('should have an action addCommand', () => {
        expect(addCommand('clavier', 15, '1ed')).toEqual({
          type: 'addCommand',
          payload: {"id": "1ed",
               "name": "clavier",
               "price": 15,}
        })
      })

    test('should have an action lessCommand', () => {
        expect(lessCommand('clavier', 15, '1ed')).toEqual({
          type: 'lessCommand',
          payload: {"id": "1ed",
               "name": "clavier",
               "price": 15,}
        })
      })

    test('should return the initial state when state is undefined', () => {
        expect(commandReducer(undefined, { type: '@INIT' })).toEqual([productList])
    })

    test('should addCommand action', () => {
        expect(commandReducer(undefined, addCommand('clavier', 15, '1ed') )).toEqual([updatedList])
      })
})