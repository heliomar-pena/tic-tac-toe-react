const Square = ({value, className, onClick}) => {
    return (
        <button 
            className={`square ${className}`} 
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;