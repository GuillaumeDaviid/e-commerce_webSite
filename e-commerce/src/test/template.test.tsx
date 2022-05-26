import React from 'react';
import Template from '../components/Template'
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';


describe('Template', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );
    })
})