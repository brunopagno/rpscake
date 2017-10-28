var BoardController = {
    selectAction: (player, action) => {
        player.inputSelect(action);

        if (player.type == PlayerType.HUMAN) {
            BoardController._verifyAi();
        }

        if (BoardController._verifySelection(Game.Players)) {
            BoardController._evaluateRound();
        }
    },

    _verifyAi: () => {
        let humans = Game.Players.filter((player) => player.type == PlayerType.HUMAN);
        if (BoardController._verifySelection(humans)) {
            let ais = Game.Players.filter((player) => player.type == PlayerType.AI);
            ais.forEach((ai) => {
                if (!ai.hasSelection()) {
                    ai.aiSelect(Game.Actions);
                }
            });
        }
    },

    _verifySelection: (playerList) => {
        for (let i = 0; i < playerList.length; i++) {
            if (!playerList[i].hasSelection()) {
                return false;
            }
        }
        return true;
    },

    _evaluateRound: () => {
        // verify if one player's action wins from every other player
        let winner = null;
        for (let i = 0; i < Game.Players.length; i++) {
            playerWin = true;

            let player = Game.Players[i];
            let playerAction = player.selection;
            for (let j = 0; j < Game.Players.length; j++) {
                let other = Game.Players[j];
                if (other == player) {
                    continue;
                }
                if (!playerAction.winsAgainst.includes(other.selection.id)) {
                    playerWin = false;
                    break;
                }
            };

            if (playerWin) {
                winner = player;
                break;
            }
        };
        let selections = Game.Players.map((player) => player.selection);
        Game.Rounds.push(new Round(selections, winner));

        if (winner) {
            console.log(winner.name + " won");
        } else {
            console.log("tie");
        }

        BoardController._clearBoard();
    },

    _clearBoard: () => {
        Game.Players.forEach((player) => {
            player.clearSelection();
        })
    }
};
