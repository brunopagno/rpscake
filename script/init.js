console.log("* Starting RPScake");

// Store current game info
var Game = {
    Players: [],
    Actions: []
};

// Store game actions that should be used in frontend
var Board = {
    SelectAction: (index) => {
        console.log("Selected action " + index);
    }
};

// Reads data from data import and populates new Game
function init() {
    dataimport.Actions.forEach((action) => {
        Game.Actions.push(new Action(action.name));
    });

    Game.Players.push(new Player(PlayerType.human));
    Game.Players.push(new Player(PlayerType.ai));
}
console.log("initializing game");
init();

console.log(Game);

console.log("done!");
