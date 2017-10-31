// Store current game state
var Game = {
    Players: [],
    Actions: [],
    Rounds: []
};

// Read data from data import and populate new Game
data.Actions.forEach((action) => {
    Game.Actions.push(new Action(
        action.id,
        action.name,
        action.winsAgainst
    ));
});

var gameMode = window.localStorage.getItem("gameMode");

if (gameMode === 'eve') {
    Game.Players.push(new Player(PlayerType.AI, "AI - Zero"));
    Game.Players.push(new Player(PlayerType.AI, "AI - One"));

    setInterval(AIController.automaticPlay, 1000);
} else {
    Game.Players.push(new Player(PlayerType.HUMAN, "Player"));
    Game.Players.push(new Player(PlayerType.AI, "AI - Zero"));
}
