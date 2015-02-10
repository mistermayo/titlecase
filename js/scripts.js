var titleCase = function(words) {

  var splitWords = words.toLowerCase().split(" ");

  var exceptions = ["if", "of", "and", "the", "but", "to"];


  for (var index = 0; index < splitWords.length; index++) {
    for (var ex_index = 0 ; ex_index < exceptions.length; ex_index++) {
      if (splitWords[index] == exceptions[ex_index] && splitWords[index] != splitWords[0]) {
        splitWords[index] = splitWords[index];
      } else {
          var newWord = splitWords[index].charAt(0).toUpperCase();
        splitWords[index] = newWord + splitWords[index].slice(1);
      }
    }
  }

  return splitWords.join(" ");

};

$(document).ready(function() {
  $("form#titleCase").submit(function(event) {
    var splitWords = $('input#words').val();
    var result = titleCase(words);

    $(".words").text(words);
    $("#result").show();
    event.preventDefault();
  })
})

//
// if (splitWords[index] === "and"){
//   splitWords[index] = splitWords[index];
// }
// else if (splitWords[index] === "the" && splitWords[index] != splitWords[0]){
//   splitWords[index] = splitWords[index];
// }
//
// else {
//   var newWord = splitWords[index].charAt(0).toUpperCase();
//   splitWords[index] = newWord + splitWords[index].slice(1);
// }
// }
// return splitWords.join(" ");
