import React from 'react';
import Home from '../components/Home'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';


describe('Home', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Home/>
            </Router>
        );
    })
})