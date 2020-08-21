import { gameboard } from '../gameboard/gameboard.js';
import { ship } from '../ship/ship.js';
import { coordConversion } from '../coordConversion/coordConversion.js';

const player = () => {
    const name = "";

    var cpu = false;
    const board = gameboard();

    const sendAttack = () => {
        console.log("S.A 0");
        if (cpu == true) {
            let randomNumber = Math.floor(Math.random() * (100));
            return coordConversion(randomNumber);
        } else if (cpu == false) {
            let coordinate = 'A1';
                return coordinate;

            // }
        }
        
    };


    return { 
        cpu,
        board,
        sendAttack
    };
};

export { player };