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
});