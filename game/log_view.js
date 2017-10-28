let logView = document.getElementById('roundlog');

let logClass = 'log-item';

function appendNewLogElement(round) {
    let divLog = document.createElement('p');
    divLog.className = logClass;
    divLog.textContent = round.winner ? round.winner.name + " won" : "tie";
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
