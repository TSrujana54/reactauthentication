import React from 'react'

import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";

import NoteTaker from "../components/NoteTaker/notetaker";

let container: any = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})


afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

describe('Test my Note Taker Component', () => {
    it('Test H3 in rendered', () => {
        act(() => {
            render(<NoteTaker msg="Hello"></NoteTaker>, container);
            const msg = container.querySelector('h3').textContent;
            console.log(msg)
            expect(msg).toBe('Hello');
        })
    })

    
})
