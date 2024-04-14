import { useState } from "react";

export default function Player({ name, symbol, isActive, onPlayerNameChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditing() {
        setIsEditing((editing) => !editing);
        if(isEditing){
            onPlayerNameChange(symbol, playerName);
        }
        
    }

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameObj = <span className="player-name">{playerName}</span>

    if(isEditing) {
        playerNameObj = <input type="text" required value={playerName} onChange={handlePlayerNameChange} />
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerNameObj}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}