describe("Candies shop stock", function () {
    
    var stock;

    beforeEach(function() {
        candyStock = new CandyStock();
    });

    describe("Someone buys candies", function() {
        it("Its purchase must be deducted from the candy jar", function() {
            take("Tagadas", 20);
            expect(candyStock['Tagadas']).toEqual(490);
        });
    });

    describe("Someone fills candy jar", function () {
        it("The candy jar stock must be correctly increase.", function () {
            add("Dragibus", 600);
            expect(candyStock['Dragibus']).toEqual(604);
        });
    });
});