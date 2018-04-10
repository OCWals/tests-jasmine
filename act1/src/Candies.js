var CandyStock = function () {
	// this.CarambarsCaramel = 0;
	// this.Chamallows = 0;
	this.Dragibus = 4;
	// this.Oursons = 0;
	this.Tagadas = 510;
	// this.TetesBrulées = 0;
}

function take (candyType, n) {
	candyStock[candyType] -= n;
}

function add (candyType, n) {
	candyStock[candyType] += n;
}