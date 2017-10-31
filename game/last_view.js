let lastView = document.getElementById('last');

function updateLastView(round) {
    lastView.textContent = "";

    let imgActionA = document.createElement('img');
    imgActionA.className = imgActionClass;
    imgActionA.src = imagesPath + round.selectionList[0].name.toLowerCase() + imagesExtension;

    let imgActionB = document.createElement('img');
    imgActionB.className = imgActionClass;
    imgActionB.src = imagesPath + round.selectionList[1].name.toLowerCase() + imagesExtension;

    lastView.appendChild(imgActionA);
    lastView.appendChild(imgActionB);

    let resultText = round.winner ? round.winner.name + " won" : "tie";
    let pResult = document.createElement('p');
    
    pResult.className = round.winner ? "win-" + round.winner.type : "round-tie";
    pResult.textContent =  resultText;
    lastView.appendChild(pResult);
}

BoardController.roundCompletedEvent.push((round) => {
    updateLastView(round);
});
