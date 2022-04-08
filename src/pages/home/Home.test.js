import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from './Home';

describe('Home view', () => {
  beforeEach(() => {
    localStorage.clear();
  })

  test('Home is rendering', () => {
    const view = render(<Home />);
    expect(view).toBeDefined();
  });

  test('Home is showing modal when someone won', () => {
    const view = render(<Home />);

    const buttons = view.container.getElementsByClassName('square');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[2]);

    view.getByText('Winner: Player 1');
  });

  test('Home game history is empty when game start', () => {
    render(<Home />);

    expect(screen.queryByText(/(x|o) play on column ([0-9]), row ([0-9])/gi)).toEqual(null);
  });

  test('Home is showing a new history item each time that user play', () => {
    const view = render(<Home />);

    const buttons = view.container.getElementsByClassName('square');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[4]);

    expect(screen.queryAllByText(/(x|o) play on column ([0-9]), row ([0-9])/gi).length).toEqual(2);

    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[5]);

    expect(screen.queryAllByText(/(x|o) play on column ([0-9]), row ([0-9])/gi).length).toEqual(4);
  });

  test('When all squares are filled but anyone have winned, the game is draw', () => {
    const view = render(<Home />);

    const buttons = view.container.getElementsByClassName('square');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[8]);
    fireEvent.click(buttons[6]);
    fireEvent.click(buttons[7]);
    fireEvent.click(buttons[5]);

    screen.getByText(/Draw game/i);
  });

  test('When a box is already filled, can not be changed', () => {
    const view = render(<Home />);

    const buttons = view.container.getElementsByClassName('square');

    fireEvent.click(buttons[0]);

    expect(buttons[0].innerHTML).toMatch(/X/i);

    fireEvent.click(buttons[0]);

    expect(buttons[0].innerHTML).toMatch(/X/i);
  });

  test('When someone won, the box are locked', async () => {
    const view = render(<Home />);

    const buttons = view.container.getElementsByClassName('square');
    
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[2]);

    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[6]);
    fireEvent.click(buttons[7]);
    fireEvent.click(buttons[8]);

    expect(buttons[3].innerHTML).toEqual("");  
    expect(buttons[6].innerHTML).toEqual("");  
    expect(buttons[7].innerHTML).toEqual("");  
    expect(buttons[8].innerHTML).toEqual("");  
  });
})