var idBoard="idBoard";
var idBoardSize="idBoardSize";
var blackColor = "black";
var whiteColor = "white"
var gameBoard = {
     createGameBoard : function () {
        var table = document.getElementById(idBoard);
        var boardSize = document.getElementById(idBoardSize).value;
        for(var i = 0; i < boardSize; ++i) {
            var rowElement = document.createElement("tr");
            for(var j = 0; j < boardSize; ++j) {
                var columeElement = document.createElement("td");
                if((i+j)%2 == 0) {
                    columeElement.style.backgroundColor = whiteColor;
                } else {
                    columeElement.style.backgroundColor = blackColor;
                }
                columeElement.align = "center";
                rowElement.appendChild(columeElement);
            }
            table.appendChild(rowElement);
        }
    }
};
function startGame() {
    gameBoard.createGameBoard();
    var table = document.getElementById(idBoard);
    var row = table.rows[2];
    var cell = row.cells[3];
    cell.innerHTML = '<input id="Button" style="background-color:green" type="button" />';
}

