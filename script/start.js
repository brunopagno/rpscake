console.log("let's play!");

var board = document.getElementById("board");

Game.Actions.forEach((action) => {
    var divAction = document.createElement('div');
    divAction.className = "action";
    divAction.onmousedown = () => Board.SelectAction(action);
    divAction.textContent = action.name;
    board.appendChild(divAction);
});
