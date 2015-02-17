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
        userChoice = this.id;
        console.log(compChoice);
            setTimeout(function() {
                shake.hide();
                $(".computer > .left." + compChoice).show();
                $(".you > .right." + userChoice).show();
                
            }, 1000);


    });

});