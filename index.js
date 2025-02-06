$(document).ready(function() {
    alert("Try clicking the card!");

    if (window.innerHeight <= 768) {
        $('.love-button').css('height', '70px');
    }

    $(".container").mouseenter(function() {
        $('.card').stop().animate({
            top: '-90px'
        }, "slow");
    }).mouseleave(function() {
        $('.card').stop().animate({
            top: '0px'
        }, "slow");
    });

    const leftButton = document.getElementById('left-button');
    const centerButton = document.getElementById('center-button');
    const rightButton = document.getElementById('right-button');

    const leftPopup = document.getElementById('left-popup');
    const centerPopup = document.getElementById('center-popup');
    const rightPopup = document.getElementById('right-popup');

    function togglePopup(button, popup) {
        
        leftPopup.style.display = 'none';
        centerPopup.style.display = 'none';
        rightPopup.style.display = 'none';


        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    }

    leftButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        togglePopup(leftButton, leftPopup);
    });

    centerButton.addEventListener('click', function(event) {
        event.preventDefault();
        togglePopup(centerButton, centerPopup);
    });

    rightButton.addEventListener('click', function(event) {
        event.preventDefault();
        togglePopup(rightButton, rightPopup);
    });
});
