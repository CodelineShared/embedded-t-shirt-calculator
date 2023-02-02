import {render, screen} from '@testing-library/react';
import TShirtCalculator from './index';

test('renders learn react link', async () => {
    render(<TShirtCalculator />);
    const nodeElement = screen.getByText(/Order size/i);
    expect(nodeElement).toBeInTheDocument();
});
