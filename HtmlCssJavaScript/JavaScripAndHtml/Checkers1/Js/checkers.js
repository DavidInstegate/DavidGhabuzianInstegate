var idBoard="idBoard"
var idBoardSize="idBoardSize"
var gameBoard{
    color : "black";
}

function createGameBoard() {
    alert("createGameBoard");
    var table = document.getElementById(idBoard);
    var boardSize = document.getElementById(idBoardSize);
    for(var i =0; i < boardSize; ++i) {
        var rowElement = document.createElement("tr");
        for(var j = 0; j < boardSize; ++j) {
            var columeElement = document.createElement("td");
            columeElement = document.appendChild(document.createTextNode(j+1));
            rowElement.appendChild(collumeElement);
        }
        table.appendChild(rowElement);

    }

}
function startGame() {
    var table = document.getElementById(idBoard);
    alert("Start Game");
    createGameBoard();
    var row = table.rows[2];
    var cell = row.cells[3];
    cell.innerHTML = '<input id="Button" type="button" value="ClickHere" />';
}

