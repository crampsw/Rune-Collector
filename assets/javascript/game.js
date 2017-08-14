var runeGame = {
    targetScore: 0,
    currentScore: 0,
    winCount: 0,
    lossCount: 0,
    runeVal: [],
    scoreUpdate: function() {
        $("#win-count").text(this.winCount);
        $("#loss-count").text(this.lossCount);
        $("#current-score").text(this.currentScore);
        $("#target-score").text(this.targetScore);
    },
    gameStart: function() {
        this.currentScore = 0;
        this.targetScore = (Math.floor(Math.random() * 102) + 19);
        this.runeVal = [];
        for(i = 0; i < 4; i++){
            this.runeVal[i] = (Math.floor(Math.random() * 12) + 1);
        }
        this.scoreUpdate();
    },
    gameLogic: function(val) {
        this.currentScore += this.runeVal[val]
        this.scoreUpdate();
        if(this.currentScore > this.targetScore) {
            this.lossCount++;
            this.gameStart();
            alert("You lose! New game starting.")
        }
        if(this.currentScore === this.targetScore) {
            this.winCount++;
            this.gameStart();
            alert("You win! New game starting.")
        }
    },
};
$(document).ready(function() {   
    runeGame.gameStart();
    $(".btn-default").on("click", function() {
        runeGame.gameLogic(this.value);
    });
});