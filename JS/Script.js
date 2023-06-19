function validateForm() {
  let naam = document.forms["myForm"]["naam"].value;
  if (naam == "") {
    alert("Naam moet ingevuld worden");
    return false;
  }
  else{
    alert('Je blog is succesvol toegevoegd.')
  };
};


$(document).ready(function(){
    $('#sidemenu').menu();
});


$(document).ready(function(){
  $('.hover').mouseenter(function(){
    $('.hover').css('background-color', '#FF7900');
  });
  $('.hover').mouseleave(function(){
    $('.hover').css('background-color', 'white');
  });
});


$.ajax({
  url: 'message.html',
  success: function(date){
    $('#message').html(data);
  },
  error: function(){
    $('#message').append('Er is iets fout gegaan')
  } 
});
