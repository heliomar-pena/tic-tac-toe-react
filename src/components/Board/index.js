import Square from "../Square";
import './Board.css'

const Board = ({ squares = Array(9).fill(null), lineWinner = [], onClick }) => {
    return (
        <div className="board">
            {squares.map((item, index) => (
                <Square
                    className={lineWinner.includes(index) ? 'box-winner' : ''}
                    key={index} 
                    value={squares[index]}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
}

export default Board;