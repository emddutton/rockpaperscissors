/**
 * Created by emddutton on 2/5/2015.
 */
$(document).ready(function() {
    var duration = 250;
    var shake = $(".handshake");
    var counter = $(".choose h2");

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