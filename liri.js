

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'elE9WhvGMqjnduv5rvRo4vwmD',
  consumer_secret: '4XU4IflFwa0JJnDavVoKFU1AMajyGfdfYoZl1EeUN3JCdBNXVr',
  access_token_key: '890655275321044992-1XppRFQffBiLpfPwbEysqTGmLr2gzSz',
  access_token_secret: 'gxqumueGttfsK0bcQToGxRwn2DuSwU1QI7zSxs885sk3I'
});
 
var params = {screen_name: 'PinkLady_z'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }

  for (var index = 0, index < tweets.statuses.length; index++){
  	var tweet-text= tweets.statuses[index].text;
  	var tweet-time = tweets.statuses[index].created_at;
  	console.log('==============================');
  	console.log(tweet-text);
  	console.log(tweet-time);
  }
});

// var request = process.argv[3];

// switch (request){
// 	case "my-tweets",
// 	myTweets(),
// 	break;

// 	case "spotify-this-song",
// 	mySongs();
// 	break;

// 	case "movie-this",
// 	movieThis();
// 	break;

// }

