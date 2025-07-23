const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Machine Language", "None of these"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Node", "React", "Django", "Vue"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    document.getElementById("next-btn").style.display = "none";
  } else {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  loadQuestion();
  document.getElementById("next-btn").style.display = "none";
}

window.onload = () => {
  loadQuestion();
  document.getElementById("next-btn").style.display = "none";
};