console.log("* Starting RPScake");

// Store current game info
var Game = {
    Players: [],
    Actions: []
};

// Reads data from data import and populates new Game
function setupData() {
    dataimport.Actions.forEach((action) => {
        Game.Actions.push(new Action(action.name));
    });

    Game.Players.push(new Player(PlayerType.human));
    Game.Players.push(new Player(PlayerType.ai));
}
console.log("setting up game");
setupData();

console.log(Game);

console.log("done!");
