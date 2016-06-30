$(document).ready(function() {
  $("form#Pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#userinput").val());
    var output = numbers(number);//
    var display = "";
      output.forEach(function(items){
        $("#output").append("<p>"+items+" <p>");
      });
  });
});


    function numbers(number) {
      var input = [];
      for (var i = 1; i <= number;i++) {//dwfewfrfrere
        if (i % 15 === 0) {
          input.push("ping pong");
        } else if (i % 3 === 0){
          input.push("ping");
        } else if (i % 5 === 0) {
          input.push("pong");
        } else {
          input.push(i);
        }
      }
        return input;
      };
