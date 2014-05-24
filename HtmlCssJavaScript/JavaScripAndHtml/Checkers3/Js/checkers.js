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
    for (var i = 0; i < this.mGameBoard.length; ++i) {
        this.mGameBoard[i] = new Array(boardSize);
        for (var j = 0; j < this.mGameBoard.length; ++j) {
            this.mGameBoard[i][j] = 5;
            alert(this.mGameBoard[i][j]);
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
            var columnElement = document.createElement("td");
            if((i+j) % 2 == 0) {
                columnElement.style.backgroundColor = whiteColor;
            } else {
                columnElement.style.backgroundColor = blackColor;
            }
            columnElement.align = "center";
            columnElement.innerHTML = this.mGameBoard[i][j]; 
            var id = i * this.boardSize + j;
            columnElement.setAttribute("id","id" + id);
            rowElement.appendChild(columnElement);
        }
        rowElement.appendChild(columnElement);
        table.appendChild(rowElement);
    }
    alert("end printBoard");
}
function startGame() {
    alert("Start Game");
    var boardSize = document.getElementById(idBoardSize).vlaue;
    var gameBoard = new GameBoard(boardSize);
    gameBoard.printBoard();
}
