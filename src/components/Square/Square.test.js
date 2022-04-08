import { fireEvent, render, screen } from '@testing-library/react';
import Square from './';
import '@testing-library/jest-dom/extend-expect';

describe('Square component', () => {
    test('Square is rendering', () => {
        const view = render(<Square />);
        expect(view).toBeDefined();
    })

    test('Square is calling callback when is clicked', () => {       
        const mockHandler = jest.fn();

        const view = render(<Square onClick={mockHandler} />);

        const buttons = view.container.getElementsByClassName('square')[0];

        fireEvent.click(buttons);

        expect(mockHandler).toBeCalledTimes(1);
    });

    test('Square is showing the value correctly', () => {
        const text = 'Test value';

        render(<Square value={text} />);

        screen.getByText(text);
    });

    test('Square is adding the className correctly', () => {
        const className = 'box-winner';

        const view = render(<Square className={className} />);

        expect(view.container.getElementsByClassName(className).length).toBe(1);
    })
});