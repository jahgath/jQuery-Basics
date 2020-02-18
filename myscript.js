//EVENTS
$('h1').click(function(){
  console.log('There was a click.');
})

$('li').click(function(){
  console.log('any li was clicked');
})

$('h1').click(function(){
  $(this).text('I was changed')
})

//KEY PRESS
$('input').eq(0).keypress(function(event){
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue');
  }
  console.log(event);
})

//on()
$('h1').on('dblclick',function(){
  $(this).toggleClass('turnBlue');
})

//Events and Animations
$('input').eq(1).on('click',function(){
  $('.container').slideUp(3000)
})
