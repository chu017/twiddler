$(document).ready(function(){

  $("time.timeago").timeago();

  // Select already exsiting elements
  var $app = $('#app');
  // console.log('tweets container', $app)
  $app.html('');
  // renderFeed();


  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $button = $('<button>Update Feed</button>');
  var $tweets = $('<div id="tweets"></div>');


  // Create event handler functions
  var handleTitleClick = function(event) {
    alert('The title of this page is: ' + event.target.innerText);
  }

  var updateFeed = function() {
    console.log('running updateFeed')
    // clear and populate the #feed
    var $tweets = $('#tweets');
    console.log('tweets container', $tweets)
    $tweets.html("");


    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="container"></div>');
      var $image = $('<img class="profile-photo", src="assets/img/mracus.png"></img>');
      var $user = $('<span class="username"></span>');
      var $message = $('<div class="message"></div>');
      var $time =  $('<span class="timestamp"></span>');
      var $icon1 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
      var $icon2 = $('<i class="icon", class="fas fa-baseball-ball"></i>');
      var $icon3 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
      var $icon4 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
      // $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $user.text("@" + tweet.user);
      $message.text(tweet.message);
      $time.append(tweet.created_at);
      $tweet.append($image, $user, $message, $time, $icon1, $icon2, $icon3, $icon4);
      $tweet.appendTo($tweets);
      index -= 1;

    }

  }


  // Set event listeners (providing appropriate handlers as input)
  $title.on("click", handleTitleClick);
  $button.on("click", updateFeed);


  // Appdend new HTML elements to the DOM
  $title.appendTo($app);
  $button.appendTo($app);
  $tweets.appendTo($app);


  // var renderFeed = function() {
  //   var $tweets = $('#tweets');
  //   $tweets.html("");


  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="container"></div>');
    var $image = $('<img class="profile-photo", src="assets/img/mracus.png"></img>');
    var $user = $('<span class="username"></span>');
    var $message = $('<div class="message"></div>');
    var $time =  $('<span class="timestamp"></span>');
    var $icon1 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
    var $icon2 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
    var $icon3 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
    var $icon4 = $('<img class="icon", src="assets/icons/placeholder.png"></img>');
    // $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $user.text("@" + tweet.user);
    $message.text(tweet.message);
    $time.append(tweet.created_at);
    $tweet.append($image, $user, $message, $time, $icon1, $icon2, $icon3, $icon4);
    $tweet.appendTo($tweets);
    index -= 1;

  }



  //   var index = streams.home.length - 1;
  //   while(index >= 0){
  //     var tweet = streams.home[index];
  //     var $tweet = $('<div class="tweet-box"></div>');
  //     $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //     $tweet.appendTo($tweets);
  //     index -= 1;

  //   }
  // }


});