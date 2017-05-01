
//create the questions for the quiz
var questions = [
      new Question("What is the capital city of Iceland?", ["Reykjavik", "Bangkok"] , "Reykjavik"),
      new Question("In which city in Thailand is the White Temple located?", ["Chiang Mai", "Chiang Rai"], "Chiang Rai");
];

//create the quiz
var quiz = new Quiz();


//add the questions to the quiz
quiz.add(questions);


var questionElement = document.getElementById('question');
