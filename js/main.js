
let barWidth = $('#sideSec').innerWidth();
let homeWidth = $('.sec-1').innerWidth();



$('#closeIcon').click(function () {
    $('#sideSec').animate({ 'left': - barWidth }, 1000);
    $('#openIcon').animate({ 'left': 0 }, 1000);
    $('.caption').animate({  'margin-left': 0 }, 1000);

})

$('#openIcon').click(function () {
    $('#sideSec').animate({ 'left': 0 }, 1000);
    $('#openIcon').animate({ 'left': barWidth }, 1000);
    $('.caption').animate({  'margin-left': barWidth }, 1000);

   
})
$('#singer1').click(function () {
    $('#about1').slideToggle(500);
    $('#about2').slideUp(500);
    $('#about3').slideUp(500);
    $('#about4').slideUp(500);


})

$('#singer2').click(function () {
    $('#about2').slideToggle(500);
    $('#about1').slideUp(500);
    $('#about3').slideUp(500);
    $('#about4').slideUp(500);


})
$('#singer3').click(function () {
    $('#about3').slideToggle(500);
    $('#about1').slideUp(500);
    $('#about2').slideUp(500);
    $('#about4').slideUp(500);

})
$('#singer4').click(function () {
    $('#about4').slideToggle(500);
    $('#about1').slideUp(500);
    $('#about2').slideUp(500);
    $('#about3').slideUp(500);

})




function countdown() {
    let date = new Date();
    let eventDate = date.getTime();
  //  console.log(eventDate)
    document.getElementById('secs').innerHTML = `0-${date.getSeconds()} s`;
    document.getElementById('mins').innerHTML = `0-${date.getMinutes()} m`;
    document.getElementById('hrs').innerHTML = `0-${date.getHours()} h`;
    document.getElementById('days').innerHTML = `0-${date.getDay()} D`;
    setInterval(countdown, 1000);
}
countdown();

$('textarea').keyup(function () {

    var max = 100;
    var charLength = $(this).val().length;
    var character = max - charLength;



    if (character<=0) {
        $('#char').text("your available characters are finished");


    }
    else {
        $('#char').text(character);

    }
    })
