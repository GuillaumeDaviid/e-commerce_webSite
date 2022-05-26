import React from 'react';
import Carrousel from '../components/Carrousel'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';


describe('Carrousel', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Carrousel/>
            </Router>
        );
    })
})