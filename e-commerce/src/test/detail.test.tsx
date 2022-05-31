import React from 'react';
import Detail from '../components/Detail'
import { BrowserRouter as Router, Route, Routes, MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from "react-redux";
import { store } from "../redux/store";
import * as Redux from 'react-redux';
import {productList}  from "../datas/productList"


jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));


describe('Detail', () => {
    const mockedState = [productList]

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

    test('Should action command in store', async () => {
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
        const btnElement = screen.getByTestId('btnElement');
        fireEvent.click(btnElement);
    })
})