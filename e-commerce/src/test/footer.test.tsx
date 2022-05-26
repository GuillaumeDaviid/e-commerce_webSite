import React from 'react';
import Footer from '../components/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';


describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Footer/>
            </Router>
        );
    })
})