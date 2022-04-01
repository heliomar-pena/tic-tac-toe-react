import { render } from '@testing-library/react';
import Board from './index';
import '@testing-library/jest-dom/extend-expect';

describe('Board component', () => {
    test('Board is rendering', () => {
        const view = render(<Board />);
        expect(view).toBeDefined();
    });

    test('Board box is rendering correctly squares', () => {
        const squares = Array(9).fill(null);

        const view = render(<Board squares={squares} lineWinner={[]} />)

        const buttons = view.container.getElementsByClassName('square');

        expect(buttons.length).toBe(squares.length);
    });

    test('Board box is highlighting the winner line', () => {
        const squares = ['X', 'X', 'X', ...Array(6).fill(null)];

        const view = render(<Board squares={squares} lineWinner={[0, 1, 2]} />);

        const highlightedBoxes = view.container.getElementsByClassName('box-winner');

        expect(highlightedBoxes.length).toBe(3);
    });
})