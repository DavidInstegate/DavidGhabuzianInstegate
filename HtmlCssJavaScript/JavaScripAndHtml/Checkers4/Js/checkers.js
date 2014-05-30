var idBoard = "idBoard";
var idBoardSize = "idBoardSize";
var idTurn = "idTurn";
var idTableBody = "idTableBody";
var blackColor = "black";
var whiteColor = "white";
var greenColor = "green";
var redColor = "red";
var turnColor = redColor;
var noColor = "noColor";

var gameBoardi = 0; 
var selectedFigure = 0; 
var board = 0;


function Figure(i,j,figureColor) {
    this.mFigureColor = figureColor || noColor;
    this.mI = i || -1;
    this.mJ = j || -1;
    this.getI = getI;
    this.setI = setI;
    this.getJ = getJ;
    this.setJ = setJ;
    this.getFigureColor = getFigureColor;
}

function Feild(i,j) {
    this.mI = i || -1;
    this.mJ = j || -1;
    this.getI = getI;
    this.setI = setI;
    this.getJ = getJ;
    this.setJ = setJ;
}

function setJ(j) {
    this.mJ = j;
}

function getJ() {
    return this.mJ;
}

function setI(i) {
    this.mI = i;
}

function getI() {
    return this.mI;
}

function getFigureColor() {
    return this.mFigureColor;
}

function startGame() {
    var boardSize = document.getElementById(idBoardSize).value;
    board= new GameBoard(boardSize);
    board.printBoard();
}

function GameBoard(boardSize) {
    this.mBoardSize = boardSize || 8;
    boardSize = this.mBoardSize;
    this.mTable = document.getElementById(idBoard);
    this.putFigure = putFigure;
    this.moveFigure = moveFigure;
    this.createFigure =createFigure;
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
            createFigure(i,j,greenColor);
        }
        var redLine = boardSize - i - 1;
        for(var j = redLine % 2; j < boardSize; j += 2) {
            this.createFigure(redLine,j,redColor);
        }
    }
    this.clearTable = clearTable;
    this.printBoard = printBoard;
}

function createFigure(i,j,figureColor) {
    var figure = new Figure(i,j,figureColor);
    figure.setI(i);
    figure.setJ(j);
    gameBoard[i][j] = figure;
}

function printBoard() {
    var table = this.mTable;
    this.clearTable(table);
    var tableBody = document.createElement("tbody");
    boardSize = this.mBoardSize;
    for(var i = 0; i < boardSize; ++i) {
        var row = document.createElement("tr");
        for(var j = 0; j < boardSize; ++j) {
            var cell = document.createElement("td");
            if((i+j) % 2 == 0) {
                cell.style.backgroundColor = whiteColor;
            } else {
                cell.style.backgroundColor = blackColor;
            }
            cell.align = "center";
            var id = i * this.boardSize + j;
            cell.setAttribute("id",id);
            cell.onclick = function() {
                moveFigure(this.parentNode.rowIndex,this.cellIndex);

            };
            if(gameBoard[i][j] != 0) {
                if(gameBoard[i][j].getFigureColor() != noColor) {
                    this.putFigure(cell,gameBoard[i][j]);
                }
            }
            row.appendChild(cell);
            tableBody.appendChild(row);
        }
    }
    var turn = document.getElementById(idTurn);
    turn.style.color = turnColor;
    turn.innerHTML = "Now turn of " + turnColor;
    table.appendChild(tableBody);
}

function replaceFigure(ocupatedI,ocupatedJ,toI,toJ) {
    if(gameBoard[toI][toJ] == 0) {
        if(turnColor == redColor) {
            turnColor = greenColor;
        } else {
            turnColor = redColor;
        }
        gameBoard[toI][toJ] = selectedFigure;
        gameBoard[toI][toJ].setI(toI);
        gameBoard[toI][toJ].setJ(toJ);
        gameBoard[ocupatedI][ocupatedJ] = 0;
        selectedFigure = 0;
        board.printBoard();
    } else {
        alert("You are trying to put selected figure on other figure.");
        return;
    }
}

function moveFigure(toI,toJ) {
    if(selectedFigure != 0) {
        var ocupatedI = selectedFigure.getI();
        var ocupatedJ = selectedFigure.getJ();
        var selectedFigureColor = selectedFigure.getFigureColor();
        if (ocupatedI == toI && ocupatedJ == toJ) {
            return;
        }
        if(selectedFigureColor == redColor && ocupatedI - toI == 1
                && (ocupatedJ - toJ == 1
                    || ocupatedJ - toJ == -1)) {
                        replaceFigure(ocupatedI,ocupatedJ,toI,toJ);
                    } else if(selectedFigureColor == greenColor && ocupatedI - toI == -1
                            && (ocupatedJ - toJ == 1
                                || ocupatedJ - toJ == -1)) {
                                    replaceFigure(ocupatedI,ocupatedJ,toI,toJ);
                                } else {
                                    alert("You have selected incorect feild.");
                                }

    }
}

function clearTable(table) {
    if(table != 0){
        while(table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }
    }
}

function putFigure(cell, figure) {
    if(figure != 0 && cell != 0) {
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.style.backgroundColor = figure.getFigureColor();
        button.onclick = function() {
            var cell = this.parentNode;
            var j = cell.cellIndex;
            var i = cell.parentNode.rowIndex;
            if(turnColor == gameBoard[i][j].getFigureColor()) {
                selectedFigure = gameBoard[i][j];
            } else {
                alert("Now is not turn of " + turnColor); 
                return;
            }
        }
        cell.appendChild(button);
    }
}
