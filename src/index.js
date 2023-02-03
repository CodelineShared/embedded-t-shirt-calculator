import React from 'react';
import ReactDOM from 'react-dom/client';
import TShirtCalculator from "./components/TShirtCalculator";

export const ROOT_ELEMENT_ID = 't-shirt-calculator';
export const ROOT_ELEMENT = document.getElementById(ROOT_ELEMENT_ID);
export const ROOT_ELEMENT_DEFAULT_MAX_WIDTH = '600px';

const ROOT_ELEMENT_MAX_WIDTH = ROOT_ELEMENT.getAttribute('data-max-width') || ROOT_ELEMENT_DEFAULT_MAX_WIDTH;
const root = ReactDOM.createRoot(ROOT_ELEMENT);

root.render(
    <React.StrictMode>
        <TShirtCalculator maxWidth={ROOT_ELEMENT_MAX_WIDTH} />
    </React.StrictMode>
);
