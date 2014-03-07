var events = require('events');
var EventEmitter = events.EventEmitter;

var bet = new EventEmitter();

bet.on('betting', function(betSlip){
	console.log(betSlip);

});

function submitBets(){
	currentBetSlip = function(){createBetSlip();}
	eventEmitter.emit('betting', currentBetSlip);
}

function createBetSlip(){
		var betSlip = {
	    userId: "zakir2k",
	    table: "8",
	    timeStamp: "18/02/14 15:37:45",
	    big: 300,
	    small: 400,
	    total: [5, 100],
	    twoDice: [2, 6, 100],
	    anyTriple: 400,
	    specTriple: [1,300]
		}
	return betSlip;
}