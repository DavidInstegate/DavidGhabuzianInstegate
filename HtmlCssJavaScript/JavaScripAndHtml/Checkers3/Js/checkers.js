var idBoard="idBoard";
var idBoardSize="idBoardSize";
var blackColor = "black";
var whiteColor = "white";
var greenColor = "green";
var redColor = "red";

function GameBoard(boardSize) {
    alert("GameBoard");
    this.mBoardSize = boardSize || 8;
    this.mGameBoard = new Array(boardSize);
    this.mTable = document.getElementById(idBoard);
    for (var i = 0; i < boardSize; ++i) {
        this.mGameBoard[i] = new Array(boardSize);
        for (var j = 0; j < boardSize; ++j) {
            this.mGameBoard[i][j] = boardSize * i + j;
        }
    }
    this.printBoard = printBoard;
    alert("endGameBoar");
}
function printBoard() {
    alert("printBoard");
    var table = this.mTable; 
    boardSize = this.mBoardSize;
    for(var i = 0; i < boardSize; ++i) {
        var rowElement = document.createElement("tr");
        for(var j = 0; j < boardSize; ++j) {
            var columeElement = document.createElement("td");
            if((i+j) % 2 == 0) {
                columeElement.style.backgroundColor = whiteColor;
            } else {
                columeElement.style.backgroundColor = blackColor;
            }
            columeElement.align = "center";
            var id = i * this.boardSize + j;
            columeElement.setAttribute("id","id" + id);
        }
        rowElement.appendChild(columeElement);
        table.appendChild(rowElement);
    }
    alert("end printBoard");
}
function startGame() {
    alert("Start Game");
    var boardSize = document.getElementById(idBoardSize);
    var gameBoard = new GameBoard(boardSize);
    gameBoard.printBoard();
}
