import arrowDown from '../../assets/icons/arrowDown.svg';
import MovesItem from '../../components/Moves/MoveItem';
import './Moves.css';

const Moves = ({setReverseMoves, reverseMoves, jumpTo, history, stepNumber}) => (
    <div className="game-info">
      <div 
        onClick={() => setReverseMoves(!reverseMoves)}
        className={`game-info__header ${reverseMoves ? 'reverse--active' : ""}`}
      >
        <span className="game-info__title">
          History
        </span>
        <img className="game-info__arrow game-info__arrowDown" src={arrowDown} />
      </div>
      <ol className={`${reverseMoves ? 'flex-reverse' : undefined} moves`}>
        <MovesItem selected={stepNumber} history={history} onClick={jumpTo}/>
      </ol>
    </div>
)

export default Moves;
