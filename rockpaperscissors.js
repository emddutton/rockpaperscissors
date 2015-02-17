/**
 * Created by emddutton on 2/5/2015.
 */
$(document).ready(function() {
    var shake = $(".handshake");
    var counter = $(".choose h2");
    var choices = ["rock", "paper", "scissors"];
    var userChoice, compChoice;

    $("button").on('click', function(){

        shake.addClass('shake');

        counter.remove();

        compChoice = choices[Math.floor(Math.random()*3)];
        userChoice = this.id;
        console.log(compChoice);
            setTimeout(function() {
                shake.hide();
                $(".computer > .left." + compChoice).show();
                $(".you > .right." + userChoice).show();

                if(compChoice === userChoice){

                    console.log("tie");
                }
                else if((userChoice == 'rock' && compChoice == 'scissors')|| (userChoice == 'scissors' && compChoice == 'paper') || (userChoice == 'paper' && compChoice == 'rock')){
                    console.log("winner winner chicken dinner");
                }
                else if((userChoice == 'rock' && compChoice == 'paper') || (userChoice == 'scissors' && compChoice == 'rock') || (userChoice == 'paper' && compChoice == 'scissors') ){
                    console.log("loser");
                }

            }, 1000);


    });

});