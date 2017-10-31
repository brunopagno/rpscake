describe("Test Game state", () => {
    it("Game has two players", () => {
        expect(Game.Players.length).to.be.equal(2);
    });

    it("Game has actions", () => {
        expect(Game.Actions.length).to.be.greaterThan(0);
    });

    it("Game has HUMAN player", () => {
        expect(Game.Players.some(
            (player) => player.type == PlayerType.HUMAN)
        ).to.be.true;
    });

    it("Game has AI player", () => {
        expect(Game.Players.some(
            (player) => player.type == PlayerType.AI)
        ).to.be.true;
    });

    it("All actions have 'wins against' info", () => {
        expect(Game.Actions.every(
            (action) => action.winsAgainst.length > 0)
        ).to.be.true;
    });
});

describe("Test Player", () => {
    it("Player type and name are set correctly", () => {
        let ai = new Player(PlayerType.AI, 'ai');
        let human = new Player(PlayerType.HUMAN, 'human');

        expect(ai.type).to.be.equal(PlayerType.AI);
        expect(ai.name).to.be.equal('ai');
        
        expect(human.type).to.be.equal(PlayerType.HUMAN);
        expect(human.name).to.be.equal('human');
    });

    it("hasSelection should be false when there is no selection", () => {
        let player = new Player(PlayerType.AI, 'ai');

        expect(player.hasSelection()).to.be.false;
    });

    it("hasSelection should be true when there is a selection", () => {
        let player = new Player(PlayerType.AI, 'ai');

        player.aiSelect(Game.Actions);
        expect(player.hasSelection()).to.be.true;
    });

    it("aiSelect should select one of the given values", () => {
        let player = new Player(PlayerType.AI, 'ai');

        player.aiSelect(Game.Actions);
        expect(Game.Actions).to.include(player.selection);
    });

    it("clearSelection removes selected value", () => {
        let player = new Player(PlayerType.AI, 'ai');
        
        player.aiSelect(Game.Actions);
        player.clearSelection();
        expect(player.hasSelection()).to.be.false;
    });

    it("inputSelect selects exactly the given value", () => {
        let player = new Player(PlayerType.AI, 'ai');
        
        player.inputSelect(Game.Actions[0]);
        expect(player.selection).to.be.equal(Game.Actions[0]);

        player.inputSelect(Game.Actions[1]);
        expect(player.selection).to.be.equal(Game.Actions[1]);
    });
});

describe("Test board controller", () => {
    it("lets player select action", () => {
        let rounds = Game.Rounds.length;
        
        let human = Game.Players.find((p) => p.type == PlayerType.HUMAN);
        BoardController.selectAction(human, Game.Actions[0]);

        expect(Game.Rounds.length).to.be.greaterThan(rounds);
        expect(human.hasSelection()).to.be.false;
    });
});

describe("Test score controller", () => {
    it("Gets player score", () => {
        let human = Game.Players.find((p) => p.type == PlayerType.HUMAN);
        for (let i = 0; i < 10; i++) {
            BoardController.selectAction(human, Game.Actions[0]);
        }

        let total = 0;
        Game.Players.forEach((p) => {
            total += ScoreController.getPlayerScore(p);
        });

        expect(total + ScoreController.getTies()).to.be.equal(Game.Rounds.length);
    });
});
