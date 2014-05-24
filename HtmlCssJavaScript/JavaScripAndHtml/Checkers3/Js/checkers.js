var idBoard="idBoard";
var idBoardSize="idBoardSize";
var blackColor = "black";
var whiteColor = "white";
var greenColor = "green";
var redColor = "red";

function GameBoard(boardSize) {
    this.mBoardSize = boardSize || 8;
    this.mGameBoard = [];
    for (var i = 0; i < boardSize; ++i) {
        this.mGameBoard[i] = [];
        for (var j = 0; j < boardSize; ++j) {
            this.mGameBoard[i][j] = boardSize * i + j;
        }
    }
    this.printBoard = printBoard;
}
function printBoard() {
    var table = getElementById(idBoard);
    
}
function startGame() {
    alert("Start Game");
    var boardSize = document.getElementById("idBoardSize");
    var gameBoard = new GameBoard(boardSize);
    gameBoard.printBoard();
}
