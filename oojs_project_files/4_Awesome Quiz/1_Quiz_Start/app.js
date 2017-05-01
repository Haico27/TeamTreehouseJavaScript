var quiz = new Quiz();

var question1 = new Question("What is the capital city of Iceland?", "" , "Reykjavik");
var question2 = new Question("In which city in Thailand is the White Temple located?", "", "Chiang Rai");

quiz.add(question1);
quiz.add(question2);

var questionElement = document.getElementById('question');

 
