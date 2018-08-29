let dotenv = require("dotenv").config();
let keys = require("./keys.js");
console.log(keys);
/* let request = require('request');
let spotify = require('spotify');
let userInput = process.argv[2];
let searchAction = process.argv[3];

// Logic
switch (userInput) {
    case 'track':
        spot(song);
        break;

    case 'band':
        concertInfo(artist);
        break;

    default: 'movie';
        movieInfo('title');
        break;
}


// Spotify Function
function spot() {
    let client = new Spotify(keys.spotify)

    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        console.log(data);
        // Do something with 'data'
    });
}

// Movie Function
function movieInfo() {
    let urlOMDB =
        "http://www.omdbapi.com/?t=" + "snatch" + "&y=&plot=full&tomatoes=true&apikey=";

    request(urlOMDB, function (error, response, body) {

        console.log('error:', error); // Print the error if one occurred

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        console.log('body:', body); // Print the HTML for the Google homepage.
    });
};
movieInfo();

// Bands in Town Function
function concertInfo() {
    let urlBand =
        "http://rest.bandsintown.com" //apiKey;

    request(urlBand, function (error, response, body) {

        console.log('error:', error); // Print the error if one occurred

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        console.log('body:', body); // Print the HTML for the Google homepage.
    });
};
concertInfo();
 */
