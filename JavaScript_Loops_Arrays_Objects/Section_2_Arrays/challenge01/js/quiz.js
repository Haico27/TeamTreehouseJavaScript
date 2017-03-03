var questions = [
  [ 'What is the capital of Australia?', 'canberra' ],
  [ 'Where do you find the Red Square?', 'moscow' ],
  [ 'What is the capital of Thailand?', 'bangkok' ]
];

var question;
var answer;
var numCorrect = 0;
var response;
var html;
var questionsCorrect = [ ];
var questionsWrong = [ ];


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function printList(array) {
  var listHTML = '<ol>';
  for (var i = 0; i < array.length; i += 1) {
    listHTML += '<li>' + array[i] + '</li>'
  }
  listHTML += '</ol>';
  return listHTML
}

for ( var i = 0; i < questions.length; i += 1 ) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question);

    if ( response.toLowerCase() === answer ) {
        numCorrect += 1;
        questionsCorrect.push(question);
      } else {
        questionsWrong.push(question);
      }
  }

html = "You got " + numCorrect + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += printList(questionsCorrect);
html += '<h2>You got these questions wrong:</h2>';
html += printList(questionsWrong);
print(html);





// create a two-dimensial array with arrays of questions with their answers in it
// set the variable answer
// evaluate if the given answer is correct
// keep track of the number of correct answers
// print the correct answered questions
// print the incorrect answered questions
