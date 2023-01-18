import './square.css';

const Square = ({ value, onSquareClick }) => {
    return (
        <button className="square" onClick={onSquareClick} disabled={value !== null}>{value}</button>
    )
}

export default Square;