const quiz = [
  {
    question: "What should you do first if you notice a small fire at home?",
    choices: ["Call emergency services immediately", "Try to extinguish it if safe", "Ignore it"],
    correct: 1
  },
  {
    question: "When crossing a busy street, what is the safest action?",
    choices: ["Look both ways before crossing", "Cross quickly without looking", "Run across"],
    correct: 0
  },
  {
    question: "Which number should you call for ambulance in an emergency?",
    choices: ["112", "999", "123"],
    correct: 0
  },
  {
    question: "If a friend is injured but conscious, what should you do?",
    choices: ["Move them immediately", "Keep them calm and call for help", "Give them food"],
    correct: 1
  },
  {
    question: "In case of a flood, what is the safest step?",
    choices: ["Stay in low areas", "Move to higher ground", "Go near rivers"],
    correct: 1
  }
];

let currentQuestion = 0;

function showQuestion() {
  const container = document.getElementById("quiz-container");
  const q = quiz[currentQuestion];
  
  container.innerHTML = `<h3>${q.question}</h3>`;
  q.choices.forEach((choice, index) => {
    container.innerHTML += `<button onclick="checkAnswer(${index})">${choice}</button><br><br>`;
  });
}

function checkAnswer(choice) {
  const result = document.getElementById("result");
  if (choice === quiz[currentQuestion].correct) {
    result.textContent = "✅ Correct!";
  } else {
    result.textContent = "❌ Wrong!";
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  const result = document.getElementById("result");
  result.textContent = "";
  currentQuestion++;
  if(currentQuestion >= quiz.length){
    document.getElementById("quiz-container").innerHTML = "<h3>🎉 You finished the quiz!</h3>";
    document.getElementById("next-btn").style.display = "none";
  } else {
    showQuestion();
  }
});

// Show first question
showQuestion();