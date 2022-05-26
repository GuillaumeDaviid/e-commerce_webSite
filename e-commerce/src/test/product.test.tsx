import React from 'react';
import Product from '../components/Product'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';


describe('Product', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Product/>
            </Router>
        );
    })
})