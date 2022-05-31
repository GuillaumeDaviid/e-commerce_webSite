import React from 'react';
import Cart from '../components/Cart'
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
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

    test('Should total to equal 0', async () => {
        render(
            <Provider store={store}>
            <Router>
            <Cart/>
            </Router>
            </Provider>
        );

        const contentTotal = screen.getByTestId('contentTotal');
        expect(contentTotal).toBeInTheDocument();
        expect(contentTotal).toHaveTextContent('TOTAL :0 €');
    })

    test('Should have a message if cart is equal to 0', async () => {
        render(
            <Provider store={store}>
            <Router>
            <Cart/>
            </Router>
            </Provider>
        );

        const messageElement = screen.getByTestId('messageElement');
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent('Votre panier est vide');
    })

    test('Should have a button', async () => {
        render(
            <Provider store={store}>
            <Router>
            <Cart/>
            </Router>
            </Provider>
        );

        const btnCommand = screen.getByTestId('btnCommand');
        expect(btnCommand).toBeInTheDocument();
        expect(btnCommand).toHaveTextContent('Commander');
    })
})