$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const text = $("input").val().toUpperCase();
    
  $("p").text(text);
  });
});