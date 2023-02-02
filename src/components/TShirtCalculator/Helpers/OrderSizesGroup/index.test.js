import {render, screen} from '@testing-library/react';
import OrderSizesGroup from "./index";
import {SIZES} from "../../variables";

test('renders order sizes group', () => {
    render(<OrderSizesGroup />);
    const sizeElement = screen.getByText(SIZES[0]);
    expect(sizeElement).toBeInTheDocument();
});
