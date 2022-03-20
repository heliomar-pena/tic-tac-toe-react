import HomeLayout from './Home.layout';
import { useState } from 'react';
import { calculateWinner } from '../../utils/game';

const Home = () => {
  const storagedHistory = JSON.parse(localStorage.getItem('history'));

  const [history, setHistory] = useState(storagedHistory || [{
    squares: Array(9).fill(null)
  }]);

  const [stepNumber, setStepNumber] = useState(history.length - 1);
  const [xIsNext, setXIsNext] = useState((stepNumber % 2) === 0); 
  const [reverseMoves, setReverseMoves] = useState(false);
  const [lineWinner, setLineWinner] = useState(calculateWinner(history[stepNumber].squares));
  const [isModalOpen, setIsModalOpen] = useState(!!lineWinner.length);

  const currentPlayer = xIsNext ? 'X' : 'O';

  const currentHistory = history[stepNumber];

  const jumpTo = (step) => {
    const newLineWinner = calculateWinner(history[step].squares);

    setStepNumber(step);
    setXIsNext((step % 2) === 0);
    setLineWinner(newLineWinner);
    setIsModalOpen(!!newLineWinner.length);
  }

  const handleClick = (i) => {
    if (calculateWinner(currentHistory.squares).length || currentHistory.squares[i]) return;

    const newSquares = currentHistory.squares.slice();
    newSquares[i] = currentPlayer;
    
    const row = Math.ceil((i + 1) / 3);
    const col = (i + 1) - ((row - 1) * 3);

    const newHistory = history.slice(0, stepNumber + 1).concat([{
      squares: newSquares,
      move: {
        row,
        col,
        currentPlayer
      },
    }]);

    const newLineWinner = calculateWinner(newSquares);

    setHistory(newHistory);
    setStepNumber(newHistory.length - 1)
    setXIsNext(!xIsNext);
    setLineWinner(newLineWinner);
    setIsModalOpen(!!newLineWinner.length);
    localStorage.setItem('history', JSON.stringify(newHistory));
  }

  const winner = calculateWinner(currentHistory.squares);

  let status;

  if (winner.length) {
    status = `Winner: ${xIsNext ? 'Player 2' : 'Player 1'}`;
  } else if (stepNumber === 9) {
    status = `Draw game`
  } else {
    status = `Current player: ${xIsNext ? 'Player 1' : 'Player 2'}`
  }

  return (
    <HomeLayout 
        handleClick={handleClick} 
        currentHistory={currentHistory}
        lineWinner={lineWinner} 
        status={status} 
        reverseMoves={reverseMoves} 
        stepNumber={stepNumber} 
        history={history} 
        jumpTo={jumpTo} 
        setReverseMoves={setReverseMoves}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
    />
  );
}

export default Home;
