/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// sample ------ var $tweet = $("<article>").addClass("tweet");  --------

// failed drop example - entry 5
// successful drop example - entry 15
// failed dump example -


$(document).ready(() => {
  var $rink = $("<div class='rink'></div>");
  var $blueLines = $("<div class='blueLines'></div>");
  var $player = $("<div class='player'></div>'");
  var $button = $("<button class='my-button'>Start</button>")
  $rink.append($blueLines);
  $(".entry").append($player);
  $(".entry").append($rink);
  $(".entry").append($button);
  $.get( "http://localhost:8080/attempts", function( data ) {
    var attemptNumber = 39;
    var $playType = $(`<p>${data[attemptNumber][`Entry ${attemptNumber}`].style.toUpperCase()} type entry</p>
    `);
    var $success = $(`<p>Successful: ${data[attemptNumber][`Entry ${attemptNumber}`].success.toString()}</p>`)
    $(".textbox").append($playType);
    $(".textbox").append($success);
    var coordinates = data[attemptNumber][`Entry ${attemptNumber}`]['coords'].map(xy => [xy[0]*4, xy[1]*4]);
    console.log(coordinates)
    var origin = [-4, 4]
    var startingPos = [
      `${(coordinates[0][0] + origin[0]).toString()}px`,
      `${(coordinates[0][1] + origin[1]).toString()}px`
    ];
    $(".player").css({"left": startingPos[0], "top": startingPos[1]});

    $(".my-button").click(function() {
      // find the difference in xy between each point
    	var movements = coordinates.slice(1).map((val, index, array) => {
        var deltaX = val[0] - coordinates[index][0];
        var deltaY = val[1] - coordinates[index][1];
        return [deltaX, deltaY]
      });
      movements.forEach(function(xy) {
      	$(".player").animate({
      		left: "+=" + xy[0],
        	top: "+=" + xy[1]
      	}, 2000, function() {})
      })
    })
  });
});
