var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "In the film, \"The Matrix\", What was Neo's name when he was living in the Matrix?",
  answers: ["Alex A. Anderson", "John A. Anderson", "Thomas A. Anderson", "Nathan A. Anderson"],
  correctAnswer: "Thomas A. Anderson"
}, {
  question: "Which of these is NOT a name of one of the planets in the Star Wars Universe?",
  answers: ["Tatooine", "Hoth", "Volcanis", "Endor"],
  correctAnswer: "Volcanis"
}, {
  question: "What is the name of the alien species in the movie,\"Avatar\"?",
  answers: ["Navi", "Ivy", "Navahee", "Vanmi"],
  correctAnswer: "Navi"
}, {
  question: "Which of the following choices is NOT one of the playable races in the game StarCraft?",
  answers: ["Terran", "Protoss", "Buggers", "Zerg"],
  correctAnswer: "Buggers"
}, {
  question: "Which of the following choices is NOT a name of a Star Trek Captain?",
  answers: ["Parker", "Janeway", "Kirk", "Picard"],
  correctAnswer: "Parker"
}, {
  question: "What is the name of the Artificial Intelligence antagonist in the Termincator films?",
  answers: ["Alpha", "Cortana", "Siri", "SkyNet"],
  correctAnswer: "SkyNet"
}, {
  question: "In the film, \"2001: A Space Odyssey?\", what is the name of the Artificial Intelligence assistant aboard the spacecraft",
  answers: ["HAL", "MAL", "ZAL", "FAL"],
  correctAnswer: "HAL"
}, {
  question: "What is the speed of light?",
  answers: ["299,792,458 m/s", "340.29 m/s", "186,000 m/s", "300,000 k/s"],
  correctAnswer: "299,792,458 m/s"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});