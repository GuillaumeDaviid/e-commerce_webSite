import React from 'react';
import Carrousel from '../components/Carrousel'
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';


describe('Carrousel', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Carrousel/>
            </Router>
        );
    })

    test('Should have 3 images', async () => {
        render(
            <Router>
            <Carrousel/>
            </Router>
        );

        const imgElement = screen.getAllByTestId('imgElement');
        expect(imgElement).toHaveLength(3);
    })

    test('Should have 2 btn switch', async () => {
        render(
            <Router>
            <Carrousel/>
            </Router>
        );

        const chevron = screen.getAllByTestId('chevron');
        expect(chevron).toHaveLength(2);
    })

    test('Should increment state', async () => {
        render(
            <Router>
            <Carrousel/>
            </Router>
        );

        const chevron = screen.getAllByTestId('chevron');
        fireEvent.click(chevron[0])
    })
})