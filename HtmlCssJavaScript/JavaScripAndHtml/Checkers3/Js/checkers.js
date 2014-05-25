var idBoard="idBoard";
var idBoardSize="idBoardSize";
var blackColor = "black";
var whiteColor = "white";
var greenColor = "green";
var redColor = "red";
function Feild(i,j) {
    this.mI = i || -1;
    this.mJ = j || -1;
    this.setI = setI;
    this.setJ = setJ;
    this.getI = getI;
    this.getJ = getJ;
}
function setI(i) {
    this.mI = i;
}

function setJ(j) {
    this.mJ = j;
}

function getJ() {
    return this.mJ;
}

function getI() {
    return this.mI;
}

function Figure(feild,figureColor) {
    this.mOcupatedFeild = new Feild(feild.i,feild.j);
    this.mFigueColor = figureColor || redColor;
    this.getFigureColor = getColor;
    this.getOcupatedFeild = getOcupatedFeild;
    this.setOcupatedFeild = setOcupatedFeild;
}

function setOcupatedFeild(i,j) {
    this.mOcupatedFeild.setI(i);
    this.mOcupatedFeild.setJ(j);
}

function getOcupatedFeild() {
    return this.mOcupatedFeild;
}

function getFigureColor() {
    return this.mFigureColor;
}

function GameBoard(boardSize) {
    alert("GameBoard");
    this.mBoardSize = boardSize || 8;
    this.mGameBoard = new Array(boardSize); 
    this.mTable = document.getElementById(idBoard);
    for(var i = 0; i < boardSize; ++i) {
        this.mGameBoard[i] = new Array(boardSize);
        for (var j = 0; j < boardSize; ++j) {
            this.mGameBoard[i][j] = 0;
        }
    }
    for(var i = 0; i < 3; ++i) {
        for(var j = i % 2; j < boardSize; j += 2) {
            var figure = new Figure(i,j,greenCollor);
        }
    }
    this.clearTable = clearTable;
    this.printBoard = printBoard;
    alert("endGameBoar");
}

function clearTable(table) {
    while(table.rows.length > 0) {
        table.removeRow(0);
    }
}

function printBoard() {
    alert("printBoard");
    var table = this.mTable; 
    boardSize = this.mBoardSize;
    this.clearTable(table);
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
            columnElement.setAttribute("id",id);
            columnElement.onclick = function() {
                alert(this.cellIndex);
                var tr = this.parentNode; 
                alert(tr.rowIndex);
            };
            rowElement.appendChild(columnElement);
        }
        rowElement.appendChild(columnElement);
        table.appendChild(rowElement);
    }
    alert("end printBoard");
}

function startGame() {
    alert("Start Game");
    var boardSize = document.getElementById(idBoardSize).value;
    var gameBoard = new GameBoard(boardSize);
    gameBoard.printBoard();
    gameBoard.printBoard();
}
