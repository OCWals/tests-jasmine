describe("BowlingGame", function() {
    var game;
    beforeEach(function(){
        game = new BowlingGame();
    });

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }
    
    it("should properly calculate an absolute perfect game", function () {
        rollMany(22, 10);
        expect(game.score()).toEqual(300);
    });

    it("should handle a gutter game", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });
    
    it("should properly calculate a strike", function () {
        game.roll(10);
        expect(game.rolls[0]).toEqual(10);
    });
    
    it("should properly calculate a spare", function () {
    	rollMany(2, 5);
    	expect(game.score()).toEqual(10);
    });
});