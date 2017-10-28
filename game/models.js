var PlayerType = {
    AI: 0,
    HUMAN: 1
}

class Player {
    constructor(playerType, name) {
        this.name = name;
        this.type = playerType;
        this.selection = null;
    }

    hasSelection() {
        return Boolean(this.selection);
    }

    inputSelect(action) {
        this.selection = action;
    }

    aiSelect(actionList) {
        let selectionIndex = Math.floor(Math.random() * actionList.length);
        this.selection = actionList[selectionIndex];
    }

    clearSelection() {
        this.selection = null;
    }
}

class Action {
    constructor(id, name, winsAgainst) {
        this.id = id;
        this.name = name;
        this.winsAgainst = winsAgainst;
    }
}

class Selection {
    constructor(player, action) {
        this.player = player;
        this.action = action;
    }
}

class Round {
    constructor(selectionList, winner) {
        this.selectionList = selectionList;
        this.winner = winner;
    }
}
