let dotenv = require("dotenv").config();
let keys = require("./keys.js");
let request = require('request');
let Spotify = require('node-spotify-api');
let userInput = process.argv[2];
let searchAction = process.argv[3];

// Logic
switch (userInput) {
    case 'track':
        spot(searchAction);
        break;

    case 'band':
        concertInfo(searchAction);
        break;

    default: 'movie';
        movieInfo(searchAction);
        break;
}
 
// Spotify Function
function spot(song) {

    var spotify = new Spotify(keys.spotify);
    var songName = song;

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //console.log(data.tracks.items[0].album.name)
        for (var i = 0; i < data.tracks.items.length; i++) {
            var songsInfo = data.tracks.items[i];

            //console.log(songsInfo);

            console.log("Artist Name: " + songsInfo.album.artists[0].name);
            console.log("Song Name: " + songsInfo.track);
            console.log("Album Name: " + songsInfo.album.name);
            //console.log(); 

        }
    });
}
 
// Movie Function
function movieInfo(title) {
    let urlOMDB =
        "http://www.omdbapi.com/?t=" + title + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(urlOMDB, function (error, response, body) {
        let info = JSON.parse(body);
        let title = info.Title;
        let year = info.Year;
        let rating = info.Rated;
        let cast = info.Actors;
        let plot = info.Plot;
        let lang = info.Language;
        let origin = info.Country;
        let IMDBrate = info.imdbRating;
        let rotTom = info.Ratings[2].Value;
        
        let movieResponse = `The movie ${title} came out in ${year}. ${title}, had a star studded cast consisting ${cast}.
        
The plot film goes a little something like this... ${plot} 
        
${title}, is available in ${lang} language(s). The film's country of origin is ${origin}. 

The film recieved an IMDB User Rating of: ${IMDBrate} and a Rotten Tomates Rating of: ${rotTom}`;

        if (!error) {
            console.log(`${movieResponse}`);
        } else {
            console.log(error)
        }

       
    });
};
 
// Bands in Town Function
function concertInfo(artist) {
    let urlBand =
        "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    request(urlBand, function (error, response, body) {
        let musicInfo = JSON.stringify(body);
        console.log(musicInfo);
    });
};


