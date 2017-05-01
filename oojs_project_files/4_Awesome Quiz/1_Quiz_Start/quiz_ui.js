var quizUI = {

  //function that displays the next question after an answer is selected
  displayNext: function() {
    if (quiz.hasEnded()) {    //if quiz has ended, the final score will be displayed
      this.displayScore();
    } else {
      this.displayQuestion(); //question will be displayed
      this.displayChoices(); //choices will be displayed
      this.displayProgress(); //progress will be displayed
    }

  },

  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text); //displays the question in HTML-element with Id "question"; the text is accessed by quiz.getCurrentQuestion().text)
  },

  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;

    for( var i = 0; i < choices.length; i++ ) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },

  displayScore: function() {
    var gameOverHTML = '<h1>Game Over</h1>'; //prints this text to the screen
    gameOverHTML += '<h2>Your score is: ' + quiz.score + '<h2>'; //prints the actual score to the screen
    this.populateIdWithHTML("quiz", gameOverHTML); //calls the function to give the actual content
  },

  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },

  guessHandler: function(id, guess) {
    var button = document.getElementById(id);

    button.onclick = function() {
      quiz.guess(guess);
      quizUI.displayNext();
    }
  },
  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1; //increments the indexnumber with 1 to get the number of the question

    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }

};
