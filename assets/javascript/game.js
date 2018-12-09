var computerChoices =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessChoices = [];

//var winsText = document.getElementById("wins-text");
//var lossesText = document.getElementById("losses-text");
//var guessesText = document.getElementById("guesses-text");
//var yourLettersText = document.getElementById("yourletters-text")

document.onkeyup = function(event){

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


    if (options.indexOf(userGuess) > -1){
        if (userGuess === computerGuess){
            wins++;
            guesses = 9;
            guessChoices = [];
        }
    if (userGuess != computerGuess) {
        guesses --;
        guessChoices.push(userGuess);
    }    
    if (guesses === 0){
        guesses = 9;
        losses ++;
        guessChoices = [];
    }

    }

    var html =
    "<h1> The Psychic Game </h1>" +
    "<p> Guess what letter I'm thinking of</p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses:" + losses + "</p>" +
    "<p> Guess Left:" + guesses + "</p>" +
    "<p> Your Guesses:" + guessChoices.join(",") + "</p>";

    document.querySelector("wins-text", "losses-text", "guesses-text", "yourletters-text" ).innerHTML = html;
};
