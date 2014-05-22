var idBoard="idBoard";
var idBoardSize="idBoardSize";
var gameBoard = {
     createGameBoard : function () {
        alert('createGameBoard');
        var table = document.getElementById(idBoard);
        var boardSize = document.getElementById(idBoardSize).value;
        for(var i = 0; i < boardSize; ++i) {
            alert("for I");
            var rowElement = document.createElement("tr");
            for(var j = 0; j < boardSize; ++j) {
                var columeElement = document.createElement("td");
                columeElement.innerHTML ="<p>j + 1</p>";
                rowElement.appendChild(columeElement);
            }
            table.appendChild(rowElement);

        }

    }
};
function startGame() {
 //   var table = document.getElementById(idBoard);
    alert("Start Game");
    gameBoard.createGameBoard();
  //  var row = table.rows[2];
  //  var cell = row.cells[3];
  //  cell.innerHTML = '<input id="Button" type="button" value="ClickHere" />';
}

