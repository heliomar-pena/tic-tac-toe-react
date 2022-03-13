import Square from "./Square";

const Board = ({ squares, onClick }) => {
    return (
        <div className="board">
            {squares.map((item, index) => (
                <Square
                    key={index} 
                    value={squares[index]}
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
}

export default Board;