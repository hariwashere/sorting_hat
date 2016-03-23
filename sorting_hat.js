var teamNumber = 0;

var option = {
    speed : 10,
    duration : 2,
    stopImageNumber : 0,

    stopCallback : function($stopElm) {
        teamCounts[teamNumber]++;
        var divId = "#" + teamNumber + "_count";
        $(divId).text(teamCounts[teamNumber]);
    }
}

$(document).ready(function() {
    var rouletter = $('div.roulette');
    rouletter.roulette("option", option);

    $("#sorting-hat").on("click", function(){
        teamNumber = sort();
        option['stopImageNumber'] = teamNumber;
        rouletter.roulette("option", option);
        rouletter.roulette('start');
    });
});

var teams = {
    0: "Gryffindor",
    1: "Slytherin",
    2: "Ravenclaw",
    3: "Hufflepuff",
    // 4: "Beauxbatons",
    // 5: "Durmstrang",
}

var teamCounts = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
}

var sort = function() {
    var teamNumber = Math.floor(Math.random()*100)%6;
    return adjustTeamNumber(teamNumber);
}

var adjustTeamNumber = function(teamNumber) {
    // Make sure that the difference in team member counts
    //never exceeds 2
    var newCount = teamCounts[teamNumber] + 1;
    for (var key in teamCounts) {
        if(key == teamNumber) {
            continue;
        }
        if(newCount > teamCounts[key] + 2){
            return key;
        }
    }
    return teamNumber
}
