import Square from "./square";
import './board.css';
import { useState } from "react";
import { calcWinner } from "../services/helperFunc";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calcWinner(squares);


    const handleClick = (i) => {
        if (squares[i] || winner) {
            return;
        }
        const nextSquare = [...squares];
        if (xIsNext) {
            nextSquare[i] = "X";
        }
        else {
            nextSquare[i] = "O";
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }


    return (
        <>
            {winner && <div className="status">The winner is {winner} player<br></br>
                Congrats!</div>}
            <div className="board-row">
                <div className="board">
                    <div className="board-row">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div className="board-row">
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div className="board-row">
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Board;