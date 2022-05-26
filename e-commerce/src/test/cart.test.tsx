import React from 'react';
import Cart from '../components/Cart'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../redux/store";


describe('Cart', () => {
    test('Should render without crashing', async () => {
        render(
            <Provider store={store}>
            <Router>
            <Cart/>
            </Router>
            </Provider>
        );
    })
})