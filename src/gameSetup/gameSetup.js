import { gameflow } from '../gameflow/gameflow.js';
import { player } from '../player/player.js';
import { handleSubmit } from '../handleSubmit/handleSubmit.js';
import { gameboard } from '../gameboard/gameboard.js';
import { P1, P2 } from '../index.js';

function gameSetup() {
    console.log('hello gameSetup')
    let container = document.querySelector('.container');

    let form = document.createElement("form");

    let pOneLabel = document.createElement("label");
    pOneLabel.for = "pOneInput";
    pOneLabel.innerHTML = "Player One: Human or CPU (check the box for CPU)"
    let pOneInput = document.createElement("input");
    pOneInput.type = "checkbox";
    pOneInput.id = "pOneInput";
    form.appendChild(pOneLabel);
    form.appendChild(pOneInput);

    let br = document.createElement("br");
    let br2 = document.createElement("br");
    form.appendChild(br);
    form.appendChild(br2);

    let pTwoLabel = document.createElement("label");
    pTwoLabel.for = "pTwoInput";
    pTwoLabel.innerHTML = "Player Two: Human or CPU (check the box for CPU)";
    let pTwoInput = document.createElement("input");
    pTwoInput.type = "checkbox";
    pTwoInput.id = "pTwoInput";
    form.appendChild(pTwoLabel);
    form.appendChild(pTwoInput);

    let submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn1"
    submitBtn.innerHTML = "Submit"
    
    container.appendChild(form);
    container.appendChild(submitBtn);
    submitBtn.addEventListener("click", handleSubmit);
    
};

export { gameSetup };