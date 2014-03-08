$(document).ready(function() {

    var selector = 'bet';
    var betplaced = false;

    $("#clearBet").on('click', function(event) {
        event.preventDefault();
        alert("ClearBet is pressed");
        selector = "clear";
    });

    $("#clearAll").on('click', function(event) {
        event.preventDefault();
        alert("ClearAll is pressed");
        $(".total, #big, #small, #odd, #even, #anyTriple, .twodice, .singledice, .triple, .double, .foursome").removeClass("highlight");
        selector = "bet";
    });

    
    $(".total, .twodice, .singledice, .double, .triple, .foursome, #anyTriple, #big, #small, #odd, #even").on('click', function(event) {
    	event.preventDefault();
        if (selector == 'bet') { 
            if (betplaced) {
                updateArea($(this), selector);
            } else if (selector == 'clear') {
                updateArea($(this), selector);
                }
            else {
                placeBet($(this));
                }
        }
    });

    var placeBet = function(area) {
        $(area).removeClass("start");
        $(area).addClass("highlight");
    }

    var updateArea = function(area, selector){
        if(selector == "clear"){
            $(area).removeClass("highlight");
        }
        else if(selector == "bet"){
            $(area).addClass("highlight");
        }   
    }

    var clearBet = function(area){
        $(area).removeClass("highlight");
    }

    $("#diceRoll").on('click', function(){
        alert("Roll has been clicked")
        currentRoll = getRandom();
        return currentRoll; 
    });

});