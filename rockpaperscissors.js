/**
 * Created by emddutton on 2/5/2015.
 */
$(document).ready(function() {
    var duration = 250;
    var shake = $(".handshake");
    var counter = $(".choose h2");
    var rock = "rock.png";
    var paper = "paper.png";
    var scissors = "scissors.png";


    $("button").on('click', function(){

        function handshake(){
            for(var i = 0; i < 3; i++) {
            shake.animate({top: "50px"}, duration);
            shake.animate({top: "0"}, duration);
            }
        }

        function countdown() {
            counter.remove();

        }
        handshake(duration);
        countdown(duration);

        var thisClick = this;
        setTimeout(function() {
            shake.hide();
            if((thisClick.id) == 'rockbutton'){
                console.log("rock clicked");
                $(".you > .rock").show();
            }
            else if(this.id == 'paperbutton'){
                console.log("paper clicked");

            }
            else if(this.id == 'scissorsbutton'){
                console.log("scissors clicked");

            }
        }, 1000);





    });

});