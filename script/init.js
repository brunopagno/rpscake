console.log("* Starting RPScake");

// Store current game info
var Game = {
    Players: [],
    Actions: []
};

// Store game actions that should be used in frontend
var Board = {
    SelectAction: (action) => {
        console.log("Selected action " + action.name);
    }
};

console.log("initializing game");
// Read data from data import and populate new Game
dataimport.Actions.forEach((action) => {
    Game.Actions.push(new Action(action.name));
});

Game.Players.push(new Player(PlayerType.HUMAN));
Game.Players.push(new Player(PlayerType.AI));

console.log(Game);

console.log("done!");
