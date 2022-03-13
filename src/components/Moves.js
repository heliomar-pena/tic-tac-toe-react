const Moves = ({history, selected, onClick}) => history.map((value, index) => {
    const { move } = value;
    const desc = index ? 
        `${move.currentPlayer} play on column ${move.col}, row ${move.row}` :
        `Go to game start`;

    const className = selected === index ? 'border' : undefined;

    return (
        <li key={index} className={className}>
            <button onClick={() => onClick(index)}>{desc}</button>
        </li>
    )
})

export default Moves;