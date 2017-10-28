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

Game.Players.push(new Player(PlayerType.HUMAN, "Player"));
Game.Players.push(new Player(PlayerType.AI, "AI - Zero"));
