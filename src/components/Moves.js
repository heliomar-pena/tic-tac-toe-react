const Moves = ({history, selected, onClick}) => history.map((value, index) => {
    const { move } = value;
    const desc = index ? 
        `${move.currentPlayer} play on column ${move.col}, row ${move.row}` :
        `Go to game start`;

    return (
        <li key={index} className={selected === index && 'bolder'}>
            <button onClick={() => onClick(index)}>{desc}</button>
        </li>
    )
})

export default Moves;