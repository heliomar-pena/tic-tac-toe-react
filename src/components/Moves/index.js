const Moves = ({history = [{squares: Array(9).fill(null)}], selected = 0, onClick = () => {}}) => history.map((currentHistory, index) => {
    const { move } = currentHistory;
    const desc = index ? 
        `${move.currentPlayer} play on column ${move.col}, row ${move.row}` :
        `Go to game start`;

    const className = selected === index ? 'bolder' : undefined;

    return (
        <li key={index} className={className}>
            <button onClick={() => onClick(index)}>{desc}</button>
        </li>
    )
})

export default Moves;