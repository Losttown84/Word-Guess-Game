var computerChoices =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessChoices = [];

//placeholder for wins, losses, guess and letter guesses
// "<p> Wins: " + wins + "</p>" +
// "<p> Losses: " + losses + "</p>" +
// "<p> Guess Left: " + guesses + "</p>" +
// "<p> Your Guesses: " + guessChoices.join(",") + "</p>";

//on keyup is when the letter the user has chosen will show up under guess Choices
document.onkeyup = function(event){

    //user guess for letters and telling computer what options are available for letters
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    //if user guess equals to computer guess, wins go up by 1
    if (options.indexOf(userGuess) > -1){
        if (userGuess === computerGuess){
            wins++;
            guesses = 9;
            guessChoices = [];
        }
    //duplicate letters will not affect guesses left    
        // else{
        //    if (guessChoices.includes(userGuess){
        //    })
        //     else {
        //        userGuess--;
        //         guessChoices.push(userGuess);
        //     }
        // }
    //if user guess does not equal computer guess, guess left goes down by 1    
    if (userGuess != computerGuess) {
        guesses --;
        guessChoices.push(userGuess);
    }
    //if user guesses has gotten to 9, losses goes up by 1    
    if (guesses === 0){
        guesses = 9;
        losses ++;
        guessChoices = [];
    }

    }
//variable that will change as the logic 
    var html =
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guess Left: " + guesses + "</p>" +
    "<p> Your Guesses: " + guessChoices.join(",") + "</p>";

    //document.querySelector("wins-text", "losses-text", "guesses-text", "yourletters-text" ).innerHTML = html
    document.querySelector("#wins-text", "#losses-text", "#guesses-text", "#yourletters-text").innerHTML = html;
};
