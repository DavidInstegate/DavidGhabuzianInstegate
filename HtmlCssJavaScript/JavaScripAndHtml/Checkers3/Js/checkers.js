var idBoard = "idBoard";
var idBoardSize = "idBoardSize";
var idTableBody = "idTableBody";
var blackColor = "black";
var whiteColor = "white";
var greenColor = "green";
var redColor = "red";

function Figure(i,j,figureColor) {
    this.mFigureColor = figureColor || redColor;
    this.mI = i || -1;
    this.mJ = j || -1;
    this.getI = getI;
    this.setI = setI;
    this.getJ = getJ;
    this.setJ = setJ;
    this.getFigureColor = getFigureColor;
}

function setJ(j) {
    this.mJ = j;
}

function getJ() {
    alert("getJ");
    return this.mJ;
}

function setI(i) {
    this.mI = i;
}

function getI() {
    alert("getI");
    return this.mI;
}

function getFigureColor() {
    return this.mFigureColor;
}

var gameBoard; 
var selectedFigure = new Figure();
var board;

function startGame() {
    alert("Start Game");
    var boardSize = document.getElementById(idBoardSize).value;
    board= new GameBoard(boardSize);
    board.printBoard();
}

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

function printBoard() {
    alert("printBoard");
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
                moveFigure(this.parentNode.rowIndex,this.cellIndex);
                
            };
            if(gameBoard[i][j] != 0) {
                this.putFigure(columnElement,gameBoard[i][j]);
            }
            rowElement.appendChild(columnElement);
            tableBody.appendChild(rowElement);
        }
    }
    table.appendChild(tableBody);
    alert("printBoard end");
}

function moveFigure(toI,toJ) {
    alert("moveFigure");
    if(selectedFigure != 0) {
        alert("moveFigure inside if");
        alert("toI: " + toI + " toJ " + toJ);
        var ocupatedI = selectedFigure.getI();
        var ocupatedJ = selectedFigure.getJ();
        gameBoard[toI][toJ] = selectedFigure;
        gameBoard[ocupatedI][ocupatedJ] = 0;
        board.printBoard();
    }
    alert("moveFigure end");
}

function clearTable(table) {
    alert("clearTable");
    if(table != 0){
        while(table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }
     }
    alert("clearTable end");
}

function putFigure(cell, figure) {
    if(figure != 0 && cell != 0) {
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.style.backgroundColor = figure.getFigureColor();
        button.onclick = function() {
            
            var cell = this.parentNode;
            var i = cell.cellIndex;
            var j = cell.parentNode.rowIndex;
         //   selectedFigure = gameBoard[i][j];
            alert("slected figure color is: " + selectedFigure.getFigureColor());

        }
        cell.appendChild(button);
    }
}
