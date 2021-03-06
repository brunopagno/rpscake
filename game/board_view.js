let boardView = document.getElementById('board');

let actionClass = 'action';
let selectedClass = 'selected';

if (Game.Players.some((player) => player.type == PlayerType.HUMAN))
{
    function onActionSelected(player, action) {
        BoardController.selectAction(player, action);
    
        let actionElements = document.getElementsByClassName(actionClass);
        [].forEach.call(actionElements, (actionElement) => {
            actionElement.classList.remove(selectedClass);
        });
    
        let divAction = document.getElementsByClassName(action.name)[0];
        divAction.classList.add(selectedClass);
    }
    
    let humanPlayer = Game.Players.find((player) => player.type == PlayerType.HUMAN);
    
    Game.Actions.forEach((action) => {
        let divAction = document.createElement('div');
        divAction.className = actionClass + ' ' + action.name;
        divAction.onmousedown = () => onActionSelected(humanPlayer, action);
        divAction.textContent = action.name;
        boardView.appendChild(divAction);
    });
}
