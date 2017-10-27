var PlayerType = {
    AI: 0,
    HUMAN: 1
}

class Player {
    constructor(playerType) {
        this.type = playerType;
    }
}

class Action {
    constructor(name) {
        this.name = name;
    }
}
