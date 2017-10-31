var AIController = {
    automaticPlay: () => {
        Game.Players.forEach((ai) => {
            ai.aiSelect(Game.Actions);
        });
        BoardController._evaluateRound();
    }
}
