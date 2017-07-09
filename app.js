/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// sample ------ var $tweet = $("<article>").addClass("tweet");  --------


$(document).ready(() => {
  var $rink = $("<div class='rink'></div>");
  var $blueLines = $("<div class='blueLines'></div>");
  var $player = $("<div class='player'></div>'");
  var $button = $("<button class='my-button'>Start</button>")
  $rink.append($blueLines);
  $(".entry").append($player);
  $(".entry").append($rink);
  $(".entry").append($button);
  $.get( "http://localhost:8080/data", function( data ) {
    var first5Points = data['2KLH-JA72'].slice(0, 5);
    var startingPos = [`${first5Points[0][2]}px`, `${first5Points[0][3]}px`]
    $(".player").css({"top": startingPos[0], "left": startingPos[1]});
    $(".my-button").click(function() {
    	var coords = first5Points.slice(1).map(val => [val[2], val[3]]);
      console.log(coords)
      coords.forEach(function(xy) {
      	$(".player").animate({
      		left: "+=" + xy[0],
        	bottom: "+=" + xy[1]
      	}, 2000, function() {})
      })
    })
  });
});
