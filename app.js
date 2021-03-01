$(document).ready(function(){


  // Select already exsiting elements
  var $app = $('#app');
  $app.html('');
  // renderFeed();

  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $button = $('<button>Update Feed</button>');
  // var $tweets = $('<div id="tweets"></div>');


  // Create event handler functions
  var handleTitleClick = function(event) {
    alert('The title of this page is: ' + event.target.innerText);
  }


  // Set event listeners (providing appropriate handlers as input)
  $title.on("click", handleTitleClick);
  $button.on("click", handleTitleClick);

  // Appdend new HTML elements to the DOM
  $title.appendTo($app);
  $button.appendTo($app);
  // $tweets.appendTo($app);

  // var renderFeed = function() {
  //   // clear and populate the #feed
  //   var $tweets = $('#tweets');
  //   $tweets.html("");

  //   var index = streams.home.length - 1;
  //   while(index >= 0){
  //     var tweet = streams.home[index];
  //     var $tweet = $('<div class="tweet-box"></div>');
  //     $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //     $tweet.appendTo($tweets);
  //     index -= 1;

  //   }
  // }

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet-box"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($app);
    index -= 1;
  }

  // var updateFeed = function() {
  //   // clear and populate the #feed
  //   var $tweets = $('#tweets');
  //   $tweets.html("");

  //   var index = streams.home.length - 1;
  //   while(index >= 0){
  //     var tweet = streams.home[index];
  //     var $tweet = $('<div class="tweet"></div>');
  //     $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //     $tweet.appendTo($tweets);
  //     index -= 1;
  //   }
  // }

});