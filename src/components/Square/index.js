import './Square.css';

const Square = ({value, className, onClick}) => {
    return (
        <button 
            className={`square ${className} ${value === 'X' ? 'x-color':'o-color'}`} 
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Square;