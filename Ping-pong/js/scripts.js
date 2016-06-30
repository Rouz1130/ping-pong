$(document).ready(function) {
  $("form#Pong").submit(function(event) {
    event.preventDefault();

    var number = pareInt($("input#number").val());
    var output = countNumber (countNumber);
    var display = "";

  });
});


    fucntion numbers(number) {
      var input = [];
      for (var i = 1; i <= number, i += 1){
        if (i % 15 === 0) {
          input.push("ping pong");
        } else if (i % 3 === 0){
          input.push("ping");
        } else if (i % 5 === 0) {
          input.push("pong")
        } else {
          input.push(i);
        }
      }
        return input;
      };
