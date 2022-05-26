import React from 'react';
import Header from '../components/Header'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';


describe('Header', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );
    })
})