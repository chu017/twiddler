$(document).ready(function(){

  jQuery("time.timeago").timeago();


  // Select already exsiting elements
  var $app = $('#app');
  // console.log('tweets container', $app)
  $app.html('');


  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $button = $('<button id="button">Update Feed</button>');
  var $tweets = $('<div id="tweets"></div>');


  // Appdend new HTML elements to the DOM
  $title.appendTo($app);
  $button.appendTo($app);
  $tweets.appendTo($app);
  updateFeed();


  // Create event handler functions
  var handleTitleClick = function(event) {
    alert('The title of this page is: ' + event.target.innerText);
  }

  var handleUsernameClick = function(event) {
    document.querySelector('#button').innerHTML = 'Back';
  }


  function updateFeed() {

    // console.log('running updateFeed')
    // clear and populate the #feed
    var $tweets = $('#tweets');
    // console.log('tweets container', $tweets)
    $tweets.html("");

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="container"></div>');

      var $image = $('<img class="profile-photo", src="assets/img/mracus.png"></img>');

      var $user = $('<span class="username"></span>');
      var $message = $('<div class="message"></div>');
      var $time = $('<span class="timestamp"></span>');
      var $icon1 = $('<span class="icon"></span>');
      var $icon2 = $('<span class="icon"></span>');
      var $icon3 = $('<span class="icon"></span>');
      var $icon4 = $('<span class="icon"></span>');
      // $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $user.text("@" + tweet.user);
      $message.text(tweet.message);
      $time.append(jQuery.timeago(new Date()));

      $icon1.append('<i class="fas fa-bowling-ball"></i>');
      $icon2.append('<i class="fas fa-bowling-ball"></i>');
      $icon3.append('<i class="fas fa-bowling-ball"></i>');
      $icon4.append('<i class="fas fa-bowling-ball"></i>');
      $tweet.append($image, $user, $message, $time, $icon1, $icon2, $icon3, $icon4);
      $tweet.appendTo($tweets);
      index -= 1;

      var username = tweet.user;
      $user.on("click", function() {
        renderUserTweets(username);
      });

    }

  }

  function renderUserTweets(name) {
    var $tweets = $('#tweets');
    // console.log('tweets container', $tweets)
    $tweets.html("");
    var $name = $("<div class='username'></div>");
    $name.append("@" + name);
    $tweets.append($name);

    var index = streams.users[name].length - 1;
    while(index >= 0){
      var userTweet = streams.users[name][index];

      var $tweet = $('<div class="container"></div>');
      var $image = $('<img class="profile-photo", src="assets/img/mracus.png"></img>');
      var $user = $('<span class="username"></span>');
      var $message = $('<div class="message"></div>');
      var $time = $('<span class="timestamp"></span>');
      var $icon1 = $('<span class="icon"></span>');
      var $icon2 = $('<span class="icon"></span>');
      var $icon3 = $('<span class="icon"></span>');
      var $icon4 = $('<span class="icon"></span>');
      // $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $user.text("@" + userTweet.user);
      $message.text(userTweet.message);

      $time.append(jQuery.timeago(new Date()));
      $icon1.append('<i class="fas fa-bowling-ball"></i>');
      $icon2.append('<i class="fas fa-bowling-ball"></i>');
      $icon3.append('<i class="fas fa-bowling-ball"></i>');
      $icon4.append('<i class="fas fa-bowling-ball"></i>');
      $tweet.append($image, $user, $message, $time, $icon1, $icon2, $icon3, $icon4);
      $tweet.appendTo($tweets);
      index -= 1;

    }

  }


  // Set event listeners (providing appropriate handlers as input)
  $title.on("click", handleTitleClick);
  $button.on("click", function todo() {
    handleUsernameClick(); updateFeed();
  });


  // var index = streams.home.length - 1;
  // while(index >= 0){
  //   var tweet = streams.home[index];
  //   var $tweet = $('<div class="container"></div>');
  //   var $image = $('<img class="profile-photo", src="assets/img/mracus.png"></img>');
  //   var $user = $('<span class="username"></span>');
  //   var $message = $('<div class="message"></div>');
  //   var $time = $('<span class="timestamp"></span>');
  //   var $icon1 = $('<span class="icon"></span>');
  //   var $icon2 = $('<span class="icon"></span>');
  //   var $icon3 = $('<span class="icon"></span>');
  //   var $icon4 = $('<span class="icon"></span>');
  //   // $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //   $user.text("@" + tweet.user);
  //   $message.text(tweet.message);
  //   $time.append(jQuery.timeago(new Date()));
  //   $icon1.append('<i class="fas fa-bowling-ball"></i>');
  //   $icon2.append('<i class="fas fa-bowling-ball"></i>');
  //   $icon3.append('<i class="fas fa-bowling-ball"></i>');
  //   $icon4.append('<i class="fas fa-bowling-ball"></i>');
  //   $tweet.append($image, $user, $message, $time, $icon1, $icon2, $icon3, $icon4);
  //   $tweet.appendTo($tweets);
  //   index -= 1;

  //   let username = tweet.user;
  //   $user.on("click", function() {
  //     renderUserTweets(username);
  //   });

  // }


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