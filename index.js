var input = document.getElementById("textInput");
var charCount = document.getElementById("charCount");
var wordCount = document.getElementById("wordCount");
var senCount = document.getElementById("senCount");
var mathCount = document.getElementById("mathWordCount");
var paraCount = document.getElementById("paraCount");
var readCount = document.getElementById("readCount");

input.onkeydown = function () {
  // Char Count
  var inputLength = input.value.length;
  charCount.innerHTML = inputLength;
  // Math Count
  mathCount.innerHTML = inputLength / 5;
  // Word Count
  var wordC = input.value.split(" ").length;
  wordCount.innerHTML = wordC;
  // Sentence Count
  var senC = input.value.split(/[.?!]+/).length;
  senCount.innerHTML = senC;
  // Para Count
  var paraC = input.value.split(/\r\n|\n|\r/).length;
  paraCount.innerHTML = paraC;
  // Reading Time
  readCount.innerHTML = wordC / 200;
};
