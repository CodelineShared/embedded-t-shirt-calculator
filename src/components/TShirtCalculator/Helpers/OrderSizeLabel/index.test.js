import { render, screen } from '@testing-library/react';
import OrderSizeLabel from "./index";

test('renders order size label', () => {
    render(<OrderSizeLabel />);
    const nodeElement = screen.getByText(/Order size/i);
    expect(nodeElement).toBeInTheDocument();
});
