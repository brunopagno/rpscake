let logView = document.getElementById('roundlog');

let imagesPath = 'images/';
let imagesExtension = '.jpg';

let logClass = 'log-item';
let imgActionClass = 'action';

function appendNewLogElement(round) {
    let divLog = document.createElement('div');
    divLog.className = logClass;

    let imgActionA = document.createElement('img');
    imgActionA.className = imgActionClass;
    imgActionA.src = imagesPath + round.selectionList[0].name.toLowerCase() + imagesExtension;

    let imgActionB = document.createElement('img');
    imgActionB.className = imgActionClass;
    imgActionB.src = imagesPath + round.selectionList[1].name.toLowerCase() + imagesExtension;

    divLog.appendChild(imgActionA);
    divLog.appendChild(imgActionB);

    let resultText = round.winner ? round.winner.name + " won" : "tie";
    let pResult = document.createElement('p');
    pResult.className = 'clear';
    pResult.textContent =  resultText;
    divLog.appendChild(pResult);

    logView.appendChild(divLog);
    logView.scrollTop = logView.scrollHeight;
}

if (Game.Rounds) {
    Game.Rounds.forEach((round) => {
        appendNewLogElement(round);
    });
}

BoardController.roundCompletedEvent.push((round) => {
    appendNewLogElement(round);
});
