import React from 'react';
import Template from '../components/Template'
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';


describe('Template', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );
    })

    test('Should have div element', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );

        const divElement = screen.getByTestId('divElement')
        expect(divElement).toBeInTheDocument();
    })

    test('Should have a link', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );

        const linkElement = screen.getByTestId('linkElement')
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", "/detail/id=6uo");
    })

    test('Should have an image', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );

        const imgElement = screen.getByTestId('imgElement')
        expect(imgElement).toBeInTheDocument();
    })

    test('Should have a name element', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );

        const nameElement = screen.getByTestId('nameElement')
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveTextContent("chaussure de running");
    })

    test('Should have a price element', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );

        const priceElement = screen.getByTestId('priceElement')
        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveTextContent("40 €");
    })

    test('handlers onCLick', async () => {
        render(
            <Router>
            <Template category="vetement"/>
            </Router>
        );
        const linkElement = screen.getByTestId('linkElement');
        fireEvent.click(linkElement);
    })
})