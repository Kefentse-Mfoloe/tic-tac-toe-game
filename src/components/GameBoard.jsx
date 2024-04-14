export default function GameBoard({ onSelectPlayerSymbol, gameBoard }) {  
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button 
                                    onClick={() => onSelectPlayerSymbol(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                        {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}