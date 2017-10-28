let scoreView = document.getElementById('score');

let scoreClass = 'score-item';

Game.Players.forEach((player) => {
    let divScore = document.createElement('p');
    divScore.className = scoreClass + ' ' + (player.name + scoreClass);
    divScore.textContent = player.name + ': 0 wins';
    scoreView.appendChild(divScore);
});

let divScore = document.createElement('p');
divScore.className = scoreClass + ' ' + ('tie' + scoreClass);
divScore.textContent = '0 ties';
scoreView.appendChild(divScore);

BoardController.roundCompletedEvent.push((round) => {
    Game.Players.forEach((player) => {
        let divScore = document.getElementsByClassName(player.name + scoreClass)[0];
        divScore.textContent = player.name + ': ' + ScoreController.getPlayerScore(player) + ' wins';
    });

    let divScore = document.getElementsByClassName('tie' + scoreClass)[0];
    divScore.textContent = ScoreController.getTies() + ' ties';
});
