function Quiz() {
  this.questions = [];
  this.currentQuestionIndex = 0;
};

Quiz.prototype.add = function(question) {
  this.questions.push(question);
}

Quiz.prototype.next = function() {
  
}

Quiz.prototype.renderInElement = function() {

};
