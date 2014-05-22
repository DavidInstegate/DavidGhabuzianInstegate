var idBoard="idBoard"
function startGame() {
    var table = document.getElementById(idBoard);
    alert("Start Game");
    var row = table.rows[2];
    var cell = row.cells[3];
    cell.innerHTML = '<input id="Button" type="button" value="ClickHere" />';
}

