import { useEffect } from "react";

const Header = ({handleNewGame, wins}) => {

    useEffect(() => {document.title = `${wins} wins`});

    return (
        <header>
            <h4>{wins} wins</h4>
            <h3>Neger</h3>
            <button onClick={handleNewGame}>New Game</button>
        </header>
    );
};

export default Header;