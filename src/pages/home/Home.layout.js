import './Home.css';
import Board from '../../components/Board';
import Moves from '../../components/Moves';
import Modal from '../../components/Modal';

const HomeLayout = ({ currentPlayer, handleClick, currentHistory, lineWinner, status, reverseMoves, stepNumber, history, jumpTo, setReverseMoves, isModalOpen, setIsModalOpen }) => {
  const player_names = {
    x: 'Player 1',
    o: 'Player 2'
  }

  return (
    <div className="game">
      <div />
      <div className="game-board">
        <div className="status">
          <span className={`status__playerOne ${currentPlayer === 'X' ? 'status--active' : 'status--inactive'}`}>
            {
              player_names['x'] 
            }
          </span>
          <span className={`status__playerTwo  ${currentPlayer === 'O' ? 'status--active' : 'status--inactive'}`}>
            {
              player_names['o']
            }
          </span>
        </div>
        <Board onClick={handleClick} squares={currentHistory.squares} lineWinner={lineWinner} />
      </div>
      <Moves 
        setReverseMoves={setReverseMoves} 
        reverseMoves={reverseMoves} 
        jumpTo={jumpTo}
        history={history} 
        stepNumber={stepNumber} 
      />
      {
        true && 
          <Modal 
            timeout={1200}
            setIsOpen={setIsModalOpen} 
            isOpen={isModalOpen}
          >
            <span className="status__winner">🥳 { status } 🥳</span>
          </Modal>
      }
    </div>
  );
}

export default HomeLayout;