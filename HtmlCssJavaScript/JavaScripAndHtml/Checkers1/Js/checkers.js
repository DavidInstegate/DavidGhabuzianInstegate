var idBoard="idBoard";
var idBoardSize="idBoardSize";
var blackColor = "black";
var whiteColor = "white";
var greenColor = "green";
var redColor = "red";
var gameBoard = {
    boardSize : 8,
    createGameBoard : function () {
        var table = document.getElementById(idBoard);
        this.boardSize = document.getElementById(idBoardSize).value;
        for(var i = 0; i < this.boardSize; ++i) {
            var rowElement = document.createElement("tr");
            for(var j = 0; j < this.boardSize; ++j) {
                var columeElement = document.createElement("td");
                if((i+j)%2 == 0) {
                    columeElement.style.backgroundColor = whiteColor;
                } else {
                    columeElement.style.backgroundColor = blackColor;
                }
                columeElement.align = "center";
                columeElement.setAttribute("onclick","moveFigure()");
                rowElement.appendChild(columeElement);
            }
            table.appendChild(rowElement);
        }
     },
     putFigure : function (positionI, positionJ, figureColor) {
         var table = document.getElementById(idBoard);
         var row = table.rows[positionI];
         var cell = row.cells[positionJ];
         cell.innerHTML = '<input style="background-color:' + figureColor + '" type="button" />';
     }
};
function moveFigure(cell) {
    alert("moveFigure");
    var cell = $(this);
    alert(cell.cellIndex);
}
function startGame() {
    gameBoard.createGameBoard();
    for(var i = 0; i < 3; ++i) {
        var size = gameBoard.boardSize;
        for(var j = i % 2; j < size; j += 2) {
            gameBoard.putFigure(i,j,greenColor);
        }
        var redLine = size - i -1;
        for(var j = redLine % 2; j < size; j += 2) {
            gameBoard.putFigure(redLine,j,redColor);
        }
    }

}
