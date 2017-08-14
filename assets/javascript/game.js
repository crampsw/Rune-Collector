var runeGame = {
    
    // Set some variables
    targetScore: 0,
    currentScore: 0,
    winCount: 0,
    lossCount: 0,
    
    runeVal: [],

    scoreUpdate: function() {
        
                $("#win-count").text(this.winCount);
                $("#loss-count").text(this.lossCount);
                $("#current-score").text(this.currentScore)
                $("#target-score").text(this.targetScore)
    },

    gameStart: function() {

        this.currentScore = 0;
        this.targetScore = (Math.floor(Math.random() * 101) + 19);
        // console.log("Target Score Set to " + this.targetScore);
        this.runeVal = [];
        for(i = 0; i < 4; i++){
            this.runeVal[i] = (Math.floor(Math.random() * 11) + 1);
            // console.log("Rune value " + i + " is set to " + this.runeVal[i]);
        }
        this.scoreUpdate();
    },
    gameLogic: function(val) {

        this.currentScore += this.runeVal[val]

        //Loss condition
        if(this.currentScore > this.targetScore) {
            this.lossCount++;
            this.gameStart();
            alert("You lose! New game starting.")
        }
        //Win condition
        if(this.currentScore === this.targetScore) {
            this.winCount++;
            this.gameStart();
            alert("You win! New game starting.")
        }
        this.scoreUpdate();
    },

};
$(document).ready(function() {   
    runeGame.gameStart()
    $(".btn-default").on("click", function() {
        runeGame.gameLogic(this.value);
        // console.log(this.value);
    });
});