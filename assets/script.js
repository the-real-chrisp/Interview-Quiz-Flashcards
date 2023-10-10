var startButton = document.getElementById("Start-Page")
var quizContents = document.getElementById("quiz")
var quizQuestions = [{
    q1: "What's the first letter of the alphabet?",
    a1: [{ text: "A", isCorrect: true },
    {text: "B", isCorrect: false },
    {text: "C", isCorrect: false },
    {text: "D", isCorrect: false}
    ]
},
{
    q2: "What is the best cookie flavor?",
    a2: [{ text: "Chocolate", isCorrect: true },
    {text: "White chocolate", isCorrect: false},
    {text: "Oatmeal", isCorrect: false },
    {text: "Snickerdoodle", isCorrect: false },
    ]
}
]

startButton.addEventListener("click", function () {
    startButton.style.display = "none"
})

var currentQuestion = 0
var score = 0

