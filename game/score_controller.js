var ScoreController = {
    getPlayerScore: (player) => {
        let amount = 0;
        Game.Rounds.forEach((round) => {
            if (round.winner == player) {
                amount += 1;
            }
        });
        return amount;
    },

    getTies: () => {
        let amount = 0;
        Game.Rounds.forEach((round) => {
            if (!round.winner) {
                amount += 1;
            }
        });
        return amount;
    }
}
