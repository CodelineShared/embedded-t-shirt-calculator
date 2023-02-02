import {render, screen} from '@testing-library/react';
import OrderSizeInputGroup from "./index";

test('renders order size group', () => {
    render(<OrderSizeInputGroup />);
    const nodeElement = screen.getByText(/Order size/i);
    expect(nodeElement).toBeInTheDocument();

    const removeIconElement = screen.getByLabelText(/Remove/i);
    expect(removeIconElement).toBeInTheDocument();

    const addIconElement = screen.getByLabelText(/Add/i);
    expect(addIconElement).toBeInTheDocument();
});
