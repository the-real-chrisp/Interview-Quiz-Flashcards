var startButton = document.getElementById("Start-Page");
var quizQuestions = [{
    q: "What's the first letter of the alphabet?",
    a: [{ text: "A", isCorrect: true },
    {text: "B", isCorrect: false },
    {text: "C", isCorrect: false },
    {text: "D", isCorrect: false}
    ]
},
{
    q: "What is the best cookie flavor?",
    a: [{ text: "Chocolate", isCorrect: true },
    {text: "White chocolate", isCorrect: false},
    {text: "Oatmeal", isCorrect: false },
    {text: "Snickerdoodle", isCorrect: false },
    ]
}
];

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var question = document.getElementById("question");
    var answer = document.getElementById("answers");

    question.textContent = quizQuestions[currentQuestion].q;
    answer.innerHTML = ""

    for(var i = 0; i < quizQuestions[currentQuestion].a.length; i++) {
        var choicesDiv = document.createElement("div");
        var choice = document.createElement("input");
        var choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = quizQuestions[currentQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        answer.appendChild(choicesDiv);
    }
}

function loadScore () {
    var totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${quizQuestions.length}`;
}

function nextQuestion () {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("answers").remove();
        document.getElementById("question").remove();
        document.getElementById("button").remove();
        loadScore();
    }
}

function checkAns() {
    var userAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value)

    if (quizQuestions[currentQuestion].a[userAnswer].isCorrect) {
        score++;
        nextQuestion();
    } else {
        nextQuestion();
    }
}

startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    loadQuestion();
})
