import { gameflow } from '../gameflow/gameflow.js';
import { player } from '../player/player.js';
import { gameSetup } from '../gameSetup/gameSetup.js';
import { handleSubmit } from '../handleSubmit/handleSubmit.js';
import { ship } from '../ship/ship.js';
import { gameboard } from '../gameboard/gameboard.js';
import { P1, P2 } from '../index.js';
import { handleClick } from '../handleSubmit/handleSubmit.js'
import { coordConversion } from '../coordConversion/coordConversion.js';

function render(c, d) {

    //Clear current page
    let container = document.querySelector(".container");
    container.innerHTML = "";

    //Create header displaying player turn etc
    let h1 = document.createElement("h1");
    h1.innerHTML = `It is ${c.name}'s turn! Select a coordinate to attack on the enemy's board below `;
    container.appendChild(h1);
    console.log("render 1");

    //Create the grid for enemy's board
    let enemyBoard = document.createElement("div")

    let enemyLabel = document.createElement("h3");
    enemyLabel.innerHTML = "Enemy's board";
    enemyBoard.appendChild(enemyLabel);

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement("tr");
            tr.dataset.row = i;
            console.log("render 2")
            for (let j = 0; j < 10; j++) {
                let td = document.createElement("td");
                td.dataset.column = j;
                let coordinates = i.toString() + j.toString();
                let coordNum = Number(coordinates);
                let tdCoord = coordConversion(coordNum);
                td.id = `${tdCoord}-${d.name}`;
                td.innerHTML = " ";
                td.addEventListener("click", handleClick);
                tr.appendChild(td);
                
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        enemyBoard.appendChild(table);
        container.appendChild(enemyBoard);
        console.log("render 3")

    //Render hits on enemy board
    if (d.board.hits.length >= 1) {
        for (let i = 0; i < d.board.hits.length; i++) {
            let id = d.board.hits[i];
            console.log(id);
            let hit = document.getElementById(`${id}-${d.name}`);
            hit.innerHTML = "HIT";
            };
    }
    //Render misses on enemy board
    if (d.board.misses.length >= 1) {
        for (let i = 0; i < d.board.misses.length; i++) {
            let id = d.board.misses[i];
            let miss = document.getElementById(`${id}-${d.name}`);
            miss.innerHTML = "MISS";
        }
    }

   
    console.log("render 4")
        //Render player's board
        let ownBoard = document.createElement("div");

        let ownLabel = document.createElement("h3");
        ownLabel.innerHTML = "Your board";
        ownBoard.appendChild(ownLabel);

        let ownTable = document.createElement("table");
        let ownBody = document.createElement("tbody");
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement("tr");
            tr.dataset.row = i;
            for (let j = 0; j < 10; j++) {
                let td = document.createElement("td");
                td.dataset.column = j;
                let coordinates = i.toString() + j.toString();
                let coordNum = Number(coordinates);
                let tdCoord = coordConversion(coordNum);
                td.id = `${tdCoord}-${c.name}`;
                td.innerHTML = " ";
                tr.appendChild(td);
            };
            ownBody.appendChild(tr);
        };
        ownTable.appendChild(ownBody);
        ownBoard.appendChild(ownTable);
        container.appendChild(ownBoard);
        console.log("render 5");

        //Render ships on player's board
        for (let i = 0; i < c.board.ships.length; i++) {
            let thisShip = c.board.ships[i];
            console.log(thisShip);
            for (let j = 0; j < thisShip.coordinates.length; j++) {
                let id = thisShip.coordinates[j];
                let hp = document.getElementById(`${id}-${c.name}`);
                hp.innerHTML = "(SHIP)";
            }
        }
        console.log("render 6")

        //render hits on player board
        if (c.board.hits.length >= 1) {
            for (let i = 0; i < c.board.hits.length; i++) {
                let id = c.board.hits[i];
                let hit = document.getElementById(`${id}-${c.name}`);
                hit.innerHTML = "HIT";
                }
            };

        //render misses on play board
        if (c.board.misses.length >= 1) {
            for (let i = 0; i < c.board.misses.length; i++) {
                let id = c.board.misses[i];
                let miss = document.getElementById(`${id}-${c.name}`);
                miss.innerHTML = "MISS";
                }
            };

};

export { render };