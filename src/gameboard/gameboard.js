import { ship } from '../ship/ship.js';

const gameboard = () => {
    const ships = [];
    const hits = [];
    const misses = [];

    const battleship = ship(5);
    battleship.coordinates = ['A1', 'A2', 'A3', 'A4', 'A5'];
    ships.push(battleship);

    const destroyer = ship(3);
    destroyer.coordinates = ['B1', 'B2', 'B3']
    ships.push(destroyer);

    const patrol = ship(2);
    patrol.coordinates = ['C1', 'C2']
    ships.push(patrol);

    const receiveAttack = (coordinate) => {
        if (battleship.coordinates.includes(`${coordinate}`) || destroyer.coordinates.includes(`${coordinate}`) || patrol.coordinates.includes(`${coordinate}`)) {
            for (let i = 0; i < ships.length; i++) {
                if (ships[i].coordinates.includes(`${coordinate}`)) {
                    let index = ships[i].coordinates.indexOf(`${coordinate}`);
                    ships[i].hit(index);
                    hits.push(coordinate)
                    alert (`Hit at ${coordinate}`);
                    allSunk();
                    return ships[i].positions;
                };
            }
        } else {
                misses.push(coordinate);
                alert (`Miss at ${coordinate}`);
        }
    }

    const allSunk = () => {
        if (battleship.isSunk() && destroyer.isSunk() && patrol.isSunk()) {
            alert ('Game Over!');
            // return gameOver();
        } else {
            return "Next player's turn!"
        }
    }


    return {
        ship,
        battleship,
        destroyer,
        patrol,
        receiveAttack,
        allSunk,
        ships,
        hits,
        misses,
        gameboard

    };

};

export { gameboard };
