import React from 'react';
import Detail from '../components/Detail'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../redux/store";


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
})