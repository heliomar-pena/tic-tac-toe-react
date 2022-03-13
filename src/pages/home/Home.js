import './Home.css';
import Board from '../../components/Board';
import Moves from '../../components/Moves';
import { useState } from 'react';

const App = () => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }]);
  const [xIsNext, setXIsNext] = useState(true); 
  const [stepNumber, setStepNumber] = useState(0); 

  const currentPlayer = xIsNext ? 'X' : 'O';

  let currentHistory = history[stepNumber];

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }


  const handleClick = (i) => {
    if (calculateWinner(currentHistory.squares) || currentHistory.squares[i]) return;
    const newSquares = currentHistory.squares.slice();
    newSquares[i] = currentPlayer;

    const row = Math.ceil((i + 1) / 3);
    const col = (i + 1) - ((row - 1) * 3);
    
    setHistory(history.concat([{
      squares: newSquares,
      move: {
        row,
        col,
        currentPlayer
      },
    }]));
    setStepNumber(history.length)
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(currentHistory.squares);

  const status = winner ? `Winner: ${xIsNext ? 'O' : 'X'}` : `Next player: ${currentPlayer}`;

  return (
    <div className="App">
      <div className="game">
        <div className="game-board">
          <Board onClick={handleClick} squares={currentHistory.squares}/>
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>
            <Moves selected={stepNumber} history={history} onClick={jumpTo}/>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
