let currjerryTile;
let currtomTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setjerry, 1000); 
    setInterval(settom, 2000); 
}

function getRandomTile() {
    
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setjerry() {
    if (gameOver) {
        return;
    }
    if (currjerryTile) {
        currjerryTile.innerHTML = "";
    }
    let jerry = document.createElement("img");
    jerry.src = "./jerry.png";

    let num = getRandomTile();
    if (currtomTile && currtomTile.id == num) {
        return;
    }
    currjerryTile = document.getElementById(num);
    currjerryTile.appendChild(jerry);
}

function settom() {
    if (gameOver) {
        return;
    }
    if (currtomTile) {
        currtomTile.innerHTML = "";
    }
    let tom = document.createElement("img");
    tom.src = "./tom-remove.png";

    let num = getRandomTile();
    if (currjerryTile && currjerryTile.id == num) {
        return;
    }
    currtomTile = document.getElementById(num);
    currtomTile.appendChild(tom);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currjerryTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currtomTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}
