var BowlingGame = function() {

    this.rolls = [];
    this.currentRoll = 0;

    this.roll = function(pins) {
    	this.rolls[this.currentRoll++] = pins;
    	console.log("rolls : " + this.rolls);
    	console.log("longueur : " + this.rolls.length);
	    console.log("currentRoll : " + this.currentRoll);
	};

	this.score = function() {
	    function sumOfBallsInFrame() {
	    	frameScore = self.rolls[frameIndex] + self.rolls[frameIndex + 1];
	    	if (self.rolls[frameIndex] == 10) {
	    		frameScore += self.rolls[frameIndex + 2];
	    	}

	    	return frameScore;
	    }

	    function frameOrGame() {
	    	if (self.rolls.length > 2) {
	    		return 10;
	    	} else {
	    		return 1;
	    	}
	    }

	    var score = 0;
	    var frameIndex = 0;
	    var self = this;

	    console.log("frameOrGame [1] : " + frameOrGame());
	    for (var i = 0; i < frameOrGame(); i++) {
	        score += sumOfBallsInFrame();
		    frameIndex += 2;
			console.log('i : ' + i + " / frameIndex : " + frameIndex + " / score : " + score);
	    }

	    console.log("frameOrGame [2] : " + frameOrGame());
	    return score;
	};
};