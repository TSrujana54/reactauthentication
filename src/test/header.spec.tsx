import React from 'react' // test a react componenent

import { render, unmountComponentAtNode } from "react-dom"; // to render in DOM
import { act } from "react-dom/test-utils"; // to implement test action

import Header from "../components/Header/header";


let container: any = null; //  DOM is container, contains elements

// create root element in contains
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

// after componet testing free up DOM
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


describe("To Test Header Componet", () => {
    it("Test Header Heading", () => {

        act(() => {
            render(<Header></Header>, container);
            const heading= container.querySelector('h1').textContent;
            expect(heading).toBe('Google Keep')
        })




    })
    it("To Test Header Login", () => {

    })
})

