import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Moves from './';

describe('Moves component', () => {
    test('Moves is rendering correctly', () => {
        const view = render(<Moves />);
        expect(view).toBeDefined();
    })

    test('Moves is redering the histories correctly', () => {
        const history = [
            {
                "squares": Array(9).fill(null),
            },
            {
                "squares": [
                    ...Array(2).fill(null),
                    "X",
                    ...Array(6).fill(null),
                ],
                "move": {
                    "row": 1,
                    "col": 3,
                    "currentPlayer": "X"
                }
            }
        ];

        render(<Moves history={history} selected={0} />);
        
        screen.getByText('Go to game start');
        screen.getByText('X play on column 3, row 1');
    });
    
    test('Moves showing boldered the selected history', () => {
        const history = [
            {
                "squares": Array(9).fill(null),
            },
            {
                "squares": [
                    ...Array(2).fill(null),
                    "X",
                    ...Array(6).fill(null),
                ],
                "move": {
                    "row": 1,
                    "col": 3,
                    "currentPlayer": "X"
                }
            }
        ];

        const view = render(<Moves history={history} selected={1} />)

        expect(view.container.getElementsByClassName('bolder').length).toBe(1);

        const boldered = view.container.getElementsByClassName('bolder')[0];
        
        expect(boldered.innerHTML.includes('X play on column 3, row 1')).toBe(true);
    });
})