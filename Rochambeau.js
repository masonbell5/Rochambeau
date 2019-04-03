class Rochambeau {
    constructor () {
        this.player = new Player();
        this.computer = new Player();
        this.scoreboard =  new Scoreboard();
        this.ROCK = 1;
        this.PAPER = 2;
        this.SCISSORS = 3;
    }

    storePlayerChoice(choice) {
        this.player.choice = choice;
        this.storeComputerChoice();
    }

    storeComputerChoice() {
        this.computer.choice = Math.ceil(Math.random()*3);
}

    determineOutcome() {
        let pc = this.player.choice;
        let cc =  this.computer.choice;

        if (pc == cc){
            return "TIE!";
        } else if (pc == this.ROCK && cc == this.PAPER) {
            return "L";
        } else if (pc == this.PAPER && cc == this.SCISSORS) {
            return "L";
        } else if (pc == this.SCISSORS && cc == this.ROCK) {
            return "L";
        } else {
            return "DUB";
        }
    }

    updateScoreBoard() {

    }

    displayScoreBoard() {

    }

}

class Player {
    constructor () {
        this.choice = "";
    }
}

class Scoreboard {
    constructor () {

    }
}

