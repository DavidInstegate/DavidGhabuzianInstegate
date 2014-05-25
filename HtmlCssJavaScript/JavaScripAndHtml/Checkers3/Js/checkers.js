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

function Figure(i,j,figureColor) {
    this.mOcupatedFeild = new Feild(i,j);
    this.mFigureColor = figureColor || redColor;
    this.getFigureColor = getFigureColor;
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

var gameBoard; 
var selectedFigure = new Figure();

function GameBoard(boardSize) {
    alert("GameBoard");
    this.mBoardSize = boardSize || 8;
    boardSize = this.mBoardSize;
    this.mTable = document.getElementById(idBoard);
    this.putFigure = putFigure;
    this.moveFigure = moveFigure;
    gameBoard = new Array(boardSize);
    for(var i = 0; i < boardSize; ++i) {
        gameBoard[i] = new Array(boardSize);
        for (var j = 0; j < boardSize; ++j) {
            gameBoard[i][j] = 0;
        }
    }
    var endPoint = boardSize/2 - 2;
    for(var i = 0; i <= endPoint; ++i) {
        for(var j = i % 2; j < boardSize; j += 2) {
            var figure = new Figure(i,j,greenColor);
            gameBoard[i][j] = figure;
        }
        var redLine = boardSize - i - 1;
        for(var j = redLine % 2; j < boardSize; j += 2) {
            var figure = new Figure(i,j,redColor);
            gameBoard[redLine][j] = figure;
        }
    }
    this.clearTable = clearTable;
    this.printBoard = printBoard;
    alert("end GameBoard");
}
function moveFigure(toI,toJ) {
    if(selectedFigure != 0) {
        var ocupatedI = selectedFigure.getI();
        var ocupatedJ = selectedFigure.getJ();
        gameBoard[toI][toJ] = figure;
        gameBoard[ocupatedI][ocupatedJ] = 0;
    }
}
function clearTable(table) {
    while(table.rows.length > 0) {
        table.removeRow(0);
    }
}

//var selectedFeild = new Feild();
function putFigure(cell, figure) {
    if(figure != 0 && cell != 0) {
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.style.backgroundColor = figure.getFigureColor();
        button.onclick = function() {
            selectedFigure = this;
        }
        cell.appendChild(button);
    }
}
function printBoard() {
    var table = this.mTable;
    this.clearTable(table);
    var tableBody = document.createElement("tbody");
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
            var id = i * this.boardSize + j;
            columnElement.setAttribute("id",id);
            columnElement.onclick = function() {
                alert(this.cellIndex);
                alert(this.parentNode.rowIndex);
                moveFigure(this.parentNode.rowIndex, this.cellIndex);
                
            };
            if(gameBoard[i][j] != 0) {
                this.putFigure(columnElement,gameBoard[i][j]);
            }
            rowElement.appendChild(columnElement);
            tableBody.appendChild(rowElement);
        }
    }
    table.appendChild(tableBody);
}

function startGame() {
    alert("Start Game");
    var boardSize = document.getElementById(idBoardSize).value;
    var gameBoard = new GameBoard(boardSize);
    gameBoard.printBoard();
    gameBoard.printBoard();
}
