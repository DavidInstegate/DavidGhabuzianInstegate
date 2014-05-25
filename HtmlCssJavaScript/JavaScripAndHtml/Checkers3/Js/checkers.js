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
    this.mFigueColor = figureColor || redColor;
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
    alert("getFigureColor");
    return this.mFigureColor;
}

function GameBoard(boardSize) {
    alert("GameBoard");
    this.mBoardSize = boardSize || 8;
    this.mGameBoard = new Array(boardSize); 
    this.mTable = document.getElementById(idBoard);
    this.putFigure = putFigure;
    for(var i = 0; i < boardSize; ++i) {
        this.mGameBoard[i] = new Array(boardSize);
        for (var j = 0; j < boardSize; ++j) {
            this.mGameBoard[i][j] = 0;
        }
    }
    for(var i = 0; i < 3; ++i) {
        for(var j = i % 2; j < boardSize; j += 2) {
            var figure = new Figure(i,j,greenColor);
            this.mGameBoard[i][j] = figure;
        }
    }
    this.clearTable = clearTable;
    this.printBoard = printBoard;
    alert("end GameBoard");
}

function clearTable(table) {
    while(table.rows.length > 0) {
        table.removeRow(0);
    }
}

//var selectedFigure = new Figure();
//var selectedFeild = new Feild();
function putFigure(cell, figure) {
    alert("putFigure");
    alert("putFigure befor (figure != 0)");
        var button = document.createElement("input");
        button.setAttribute("type","button");
//        button.style.backgroundColor = figure.getFigureColor();
        cell.appendChild(button);
    alert("putFigure end");
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
            columnElement.innerHTML = this.mGameBoard[i][j]; 
            var id = i * this.boardSize + j;
            columnElement.setAttribute("id",id);
            columnElement.onclick = function() {
                alert(this.cellIndex);
                alert(this.parentNode.rowIndex);
            };
            if(this.mGameBoard[i][j] != 0) {
                this.putFigure(columnElement,this.mGameBoard[i][j]);
                alert("There is a figure.");
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
