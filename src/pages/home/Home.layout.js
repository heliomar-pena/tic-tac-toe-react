import './Home.css';
import Board from '../../components/Board';
import Moves from '../../components/Moves';
import Modal from '../../components/Modal';

const HomeLayout = ({ handleClick, currentHistory, lineWinner, status, reverseMoves, stepNumber, history, jumpTo, setReverseMoves, isModalOpen, setIsModalOpen }) => {
  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={handleClick} squares={currentHistory.squares} lineWinner={lineWinner} />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol className={reverseMoves ? 'flex-reverse' : undefined}>
          <Moves selected={stepNumber} history={history} onClick={jumpTo}/>
        </ol>
        <div>
          <button onClick={() => setReverseMoves(!reverseMoves)} type="button">
            Reverse moves
          </button>
        </div>
      </div>
      {true && <Modal timeout={1200} setIsOpen={setIsModalOpen} isOpen={isModalOpen}><span className="status__winner">🥳 { status } 🥳</span></Modal>}
    </div>
  );
}

export default HomeLayout;