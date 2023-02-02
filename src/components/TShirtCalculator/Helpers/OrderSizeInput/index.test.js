import {render, screen} from '@testing-library/react';
import OrderSizeLabel from "./index";

test('renders order size label', () => {
    render(<OrderSizeLabel />);
    const nodeElement = screen.getByDisplayValue(0);
    expect(nodeElement).toBeInTheDocument();
});

test('renders "Remove" icon', () => {
    render(<OrderSizeLabel />);
    const nodeElement = screen.getByLabelText(/Remove/i);
    expect(nodeElement).toBeInTheDocument();
});

test('renders "Add" icon', () => {
    render(<OrderSizeLabel />);
    const nodeElement = screen.getByLabelText(/Add/i);
    expect(nodeElement).toBeInTheDocument();
});
