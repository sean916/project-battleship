import { render } from '../render/render.js';
import { player } from '../player/player.js';
import { gameboard } from '../gameboard/gameboard.js';
import { coordConversion } from '../coordConversion/coordConversion.js';

let turn;
const P1 = player();
const P2 = player();
function gameflow(a, b, c) {
    turn = c;
    if (turn % 2 == 0) {
        if (a.cpu == false) {
            render(a, b);
        } else if (a.cpu == true) {
            let Atk = a.sendAttack();
            let thisAtk = checkAtk(Atk, b, a);
            b.board.receiveAttack(thisAtk);
            turn += 1;
            let y = a;
            let z = b;
            let turnVar = turn;
            gameflow(y, z, turnVar);
        };

    } else if (turn % 2 == 1) {
        if (b.cpu == false) {
            render(b, a);
        } else if (b.cpu == true) {
            let Atk = b.sendAttack();
            let thisAtk = checkAtk(Atk, a, b);
            a.board.receiveAttack(thisAtk);
            turn += 1;
            let y = a;
            let z = b;
            let turnVar = turn;
            gameflow(y, z, turnVar);
        }
    };
    return {
        turn
    };
};

function checkAtk(x, y, z) {
    if (y.board.hits.includes(x) || y.board.misses.includes(x)) {
        let thisAtk = z.sendAttack();
        checkAtk(thisAtk, y, z);
    }  else {
        let thisAtk = x;
        return thisAtk;
    }
};

function handleClick() {
    console.log("handleClick 1")
    if (this.innerHTML != " ") {
        return;
    } else {
        console.log(this);
        console.log(this.parentElement);
        let coordinate = this.parentElement.dataset.row.toString() + this.dataset.column.toString();
        let coordNum = Number(coordinate);
        let atk = coordConversion(coordNum);
        if (turn % 2 == 0) {
            P2.board.receiveAttack(atk);
        } else if (turn % 2 == 1) {
            P1.board.receiveAttack(atk);
        }
        turn += 1;
        let turnVar = turn;
        gameflow(P1, P2, turnVar);     
    }
}

function handleSubmit() {
    console.log('hello handle submit 1');
    console.log('hello handle submit 2');
    P1.name = "Player 1";
    P2.name = "Player 2";
    let p1CPU = document.getElementById('pOneInput').checked;
    let p2CPU = document.getElementById('pTwoInput').checked;
    P1.cpu = p1CPU;
    P2.cpu = p2CPU;
    console.log('hello handle submit 2');
    gameflow(P1, P2, 0);
};

export { handleSubmit, gameflow, handleClick };