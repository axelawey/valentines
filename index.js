$(document).ready(function(){
    alert("Try clicking the card!")

    if (window.innerHeight <=768) {
        $('.love-button').css('height', '70px')
    }
    
    $(".container").mouseenter(function(){
        $('.card').stop().animate({
            top:'-90px'
        },"slow");
    }).mouseleave(function(){
        $('.card').stop().animate({
            top:'0px'
        }, "slow");
    });
    });