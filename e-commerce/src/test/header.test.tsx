import React from 'react';
import Header from '../components/Header'
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';


describe('Header', () => {
    test('Should render without crashing', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );
    })

    test('should render title', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );
        const titleElement = screen.getByTestId('website_title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent("COMMERCIA");
        expect(titleElement).toHaveAttribute("data-testid", "website_title");
    })

    test('should have nav elements', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );
        const navElement = screen.getAllByTestId('nav_element');
        expect(navElement[0]).toHaveTextContent("Vetements");
        expect(navElement[0]).toHaveAttribute("href", "/product/id=vetement");
    })

    test('should have cart link', async () => {
        render(
            <Router>
            <Header/>
            </Router>
        );
        const cartLink = screen.getByTestId('cartLink');
        expect(cartLink).toHaveAttribute("href", "/cart");
    })
})