'use strict'

var Twitter = require('twitter');
var request = process.argv[3];

var client = new Twitter({
  consumer_key: 'elE9WhvGMqjnduv5rvRo4vwmD',
  consumer_secret: '4XU4IflFwa0JJnDavVoKFU1AMajyGfdfYoZl1EeUN3JCdBNXVr',
  access_token_key: '890655275321044992-1XppRFQffBiLpfPwbEysqTGmLr2gzSz',
  access_token_secret: 'gxqumueGttfsK0bcQToGxRwn2DuSwU1QI7zSxs885sk3I'
});
 
var params = {screen_name: 'PinkLady_z', text: "======="};


function myTweets(){
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          for (var i = 0, i < tweets.statuses.length; i++){
              var tweetText= tweets.statuses[i].text;
              var tweetTime = tweets.statuses[i].created_at;
              console.log('==============================');
              console.log(tweetText);
              console.log(tweetTime);
              console.log(tweets);
            }
           }
         }
      });



var OMDB = require('request');
var request = process.argv[2];
 request.get('http://www.omdbapi.com', function (error, response, body) {
   console.log('error:', error); 
   console.log('')
   //console.log('statusCode:', response && response.statusCode);  
   //console.log('body:', body);  
 });


 var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
 



  switch (request){
  case "my-tweets",
  myTweets(),
  break;

  case "movie-this",
  movieInfo(),
  break;
 }

 myTweets();
 movieInfo();
     

// movieYear 
// movieRatingIMDB 
// movieCountry 
// movieLanguage 
// moviePlot 
// movie Actors 
// movieRatingRotten 



// for (var i = 2; i < movies.length; i++) {

//  if (i > 2 && i < movies.length) {

//     movieName = movieName + "+" + movieArgs[i];

//   }

//   else {

//     movieName += movieArgs[i];

//   }
// }

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   if (!error && response.statusCode === 200) {

//    console.log("Release Year: " + JSON.parse(body).Year);
//    console.log("IMDB Rating: " + JSON.parse(body).Rating);
//    console.log("Country: " + JSON.parse(body).Country);
//    console.log("Language: " + JSON.parse(body).Language);
//    console.log("Plot: " + JSON.parse(body).Plot);
//    console.log("Actors: " + JSON.parse(body).Actors);
//    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).);
//   }
// });





