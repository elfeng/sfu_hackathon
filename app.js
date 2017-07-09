/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// sample ------ var $tweet = $("<article>").addClass("tweet");  --------

require('data.json')

$(document).ready(() => {

  // $("button").slideUp("fast");

  var $rink = $("<div class='rink'></div>");
  var $blueLines = $("<div class='blueLines'></div>");
  var $player = $("<div class='player></div>'");
  $rink.append($blueLines);
  $(".entry").append($player);
  $(".entry").append($rink);
});






