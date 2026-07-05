const pawnBtn = document.getElementById("pawn");
const kingBtn = document.getElementById("king");
const queenBtn = document.getElementById("queen");
const knightBtn = document.getElementById("knight");

let attack = 0;

function startFighting() {

    const randomAttack = Math.floor(Math.random() * 4);

    console.log("Random Attack:", randomAttack);

    switch (randomAttack) {
        case 0:
            step();
            break;
        case 1:
            pawnAttack();
            break;
        case 2:
            kingAttack();
            break;
        case 3:
            queenAttack();
            break;
    }
}

function step() {
    console.log("Did nothing");
    document.body.style.backgroundColor = "gray";
}

function pawnAttack() {
    attack += 10;
    console.log("Pawn Attack");
    console.log("Attack:", attack);

    document.body.style.backgroundColor = "green";
}

function kingAttack() {
    attack += 100;
    console.log("King Attack");
    console.log("Attack:", attack);

    document.body.style.backgroundColor = "red";
}

function queenAttack() {
    attack += 50;
    console.log("Queen Attack");
    console.log("Attack:", attack);

    document.body.style.backgroundColor = "blue";
}

pawnBtn.addEventListener("click", pawnAttack);
kingBtn.addEventListener("click", kingAttack);
queenBtn.addEventListener("click", queenAttack);
knightBtn.addEventListener("click", startFighting);