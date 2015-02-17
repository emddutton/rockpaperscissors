/**
 * Created by emddutton on 2/5/2015.
 */
$(document).ready(function() {
    var duration = 250;
    var shake = $(".handshake");
    var counter = $(".choose h2");
    var choices = ["rock", "paper", "scissors"];
    var userChoice, compChoice;

    $("button").on('click', function(){

        shake.addClass('shake');

           function countdown() {
                counter.remove();

            }

        countdown(duration);
        var thisClick = this;
        compChoice = choices[Math.floor(Math.random()*3)];
        console.log(compChoice);
            setTimeout(function() {
                shake.hide();
                $(".computer > .left." + compChoice).show();
                if((thisClick.id) == 'rockbutton'){
                    console.log("rock clicked");
                    $(".you > .rock").show();
                }
                else if(thisClick.id == 'paperbutton'){
                    console.log("paper clicked");
                    $(".you > .paper").show();
                }
                else if(thisClick.id == 'scissorsbutton'){
                    console.log("scissors clicked");
                    $(".you > .scissors").show();
                }
            }, 1000);


    });

});