var PlayerType = {
    ai: 0,
    human: 1
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
