import { render, screen } from '@testing-library/react';
import Size from "./index";
import {SIZE_SHARES, SIZES} from "../../variables";

const ORDER_SIZE = 100;

describe('test size visible', () => {
    SIZES.forEach((size) => {
        test(`renders ${size} size`, () => {
            render(<Size size={size} total={ORDER_SIZE} />);
            const sizeElement = screen.getByText(size);
            expect(sizeElement).toBeInTheDocument();
        });
    });
});

describe('test size share is correct', () => {
    SIZES.forEach((size) => {
        const share = SIZE_SHARES.get(size);
        test(`renders ${size} size`, () => {
            render(<Size size={size} total={ORDER_SIZE} />);
            const targetShare = Math.floor(share * ORDER_SIZE);
            const shareElement = screen.getByDisplayValue(targetShare);
            expect(shareElement).toBeInTheDocument();
        });
    });
});
