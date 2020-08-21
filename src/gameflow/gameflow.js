// import { player } from './player/player.js';
// import { gameSetup } from './gameSetup/gameSetup.js';
// import { handleSubmit } from './handleSubmit/handleSubmit.js';
// import { ship } from './ship/ship.js';
// import { gameboard } from './gameboard/gameboard.js';

// const gameflow = (a, b) => {
//     let turn = 0;
//     if (turn % 2 == 0) {
//         console.log("gameflow 1")
//         render(a, b);
//         let thisAtk = a.sendAttack();
//         checkAtkP1(thisAtk, a, b);
//         b.board.receiveAttack(thisAtk);
//         turn += 1;
//         let y = a;
//         let z = b;
//         gameflow(y, z);
//     } else if (turn % 2 == 1) {
//         render(b, a);
//         let thisAtk = b.sendAttack();
//         checkAtkP2(thisAtk, a, b);
//         a.board.receiveAttack(thisAtk);
//         turn += 1;
//         let y = a;
//         let z = b;
//         gameflow(y, z);
//     };


//     function checkAtkP1(x, y, z) {
//         if (z.board.hits.includes(x) || z.board.misses.includes(x)) {
//             let thisAtk = y.sendAttack();
//             checkAtkP1(thisAtk, y, z);
//         } else {
//             let thisAtk = x;
//             return thisAtk;
//         }
//     }

//     function checkAtkP2(x, y, z) {
//         if (y.board.hits.includes(x) || y.board.misses.includes(x)) {
//             let thisAtk = z.sendAttack();
//             checkAtkP2(thisAtk, y, z);
//         }  else {
//             let thisAtk = x;
//             return thisAtk;
//         }
//     }
//     return {
//         turn,
//         checkAtkP1,
//         checkAtkP2,
//         thisAtk
//     };
// };

// export { gameflow };
