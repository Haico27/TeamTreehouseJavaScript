var quiz = [
  [ 'What is the capital of Australia?', 'canberra' ],
  [ 'Where do you find the Red Square?', 'moscow' ],
  [ 'What is the capital of Thailand?', 'bangkok' ]
];


function print(message) {
  document.write(message);
}

function printList(questions) {
  var htmlCorrect = 'You answered these questions correct: <ol>';
  var htmlWrong = 'You answered these questions wrong: <ol>';
  var numCorrect = 0;

  for ( var i = 0; i < questions.length; i += 1 ) {

    var answer = prompt(questions[i][0]);

      if ( answer.toLowerCase() === questions[i][1] ) {
        htmlCorrect += '<li>' + questions[i][0] + '</li>';
        numCorrect += 1;
      } else {
        htmlWrong += '<li>' + questions[i][0] + '</li>';
      }
  }

  htmlCorrect += '</ol>';
  htmlWrong += '</ol>';

  print("<div>You answered " + numCorrect + " questions correct!</div>");
  print(htmlCorrect);
  print(htmlWrong);

}

printList(quiz);





// create a two-dimensial array with arrays of questions with their answers in it
// set the variable answer
// evaluate if the given answer is correct
// keep track of the number of correct answers
// print the correct answered questions
// print the incorrect answered questions
