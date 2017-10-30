let logView = document.getElementById('roundlog');

let logClass = 'log-item';

function appendNewLogElement(round) {
    let divLog = document.createElement('p');
    divLog.className = logClass;
    let resultText = round.winner ? round.winner.name + " won" : "tie";
    divLog.textContent = round.selectionList[0].name + " x " + round.selectionList[1].name + " => " + resultText;
    logView.appendChild(divLog);
}

if (Game.Rounds) {
    Game.Rounds.forEach((round) => {
        appendNewLogElement(round);
    });
}

BoardController.roundCompletedEvent.push((round) => {
    appendNewLogElement(round);
});
