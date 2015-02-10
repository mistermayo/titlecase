var titleCase = function(words) {

  var splitWords = words.toLowerCase().split(" ");

  for (var index = 0; index < splitWords.length; index++)
  {
      var newWord = splitWords[index].charAt(0).toUpperCase();
      splitWords[index] = newWord + splitWords[index].slice(1);

  }
  return splitWords.join(" ");

};
