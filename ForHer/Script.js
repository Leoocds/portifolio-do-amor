const questions = [
  {
    question: "Quando foi que nos conhecemos?",
    options: ["14 de novembro", "04 de novembro"],
    correctAnswer: "04 de novembro"
  },
  {
    question: "O que eu mais gosto em você?",
    options: ["Sorriso", "Cabelo", "Jeito", "Corpo"],
    correctAnswers: ["Sorriso", "Cabelo", "Jeito", "Corpo"]
  },
  {
    question: "Qual meu ídolo da mídia?",
    options: ["Kyan", "Neymar", "Chico Moedas", "Will Smith"],
    correctAnswer: "Kyan"
  },
  {
    question: "Qual meu carro dos sonhos?",
    options: ["Evoque", "Porsche", "Golf", "Bmw"],
    correctAnswer: "Golf"
  },
  {
    question: "Se fosse te levar pra um lugar que eu amo, onde iriamos?",
    options: ["Qualquer praia", "Santos", "São Paulo Capital", "Outro país"],
    correctAnswer: "Qualquer praia"
  },
  {
    question: "Qual meu maior sonho?",
    options: ["Família", "Viajar o mundo", "Casar", "Ser rico", "Ajudar o mundo"],
    correctAnswers: ["Viajar o mundo", "Ajudar o mundo"]
  },
  {
    question: "Qual foi minha maior demonstração de amor pra você?",
    options: ["Ingresso do show do Imagine Dragons", "Todos os poemas", "Fazer uma música", "Presentes"],
    correctAnswer: "Todos os poemas"
  },
  {
    question: "Você é a razão do meu sorriso?",
    options: ["Sim, com certeza sou", "Não, isso é muita responsabilidade..."],
    correctAnswer: "Sim, com certeza sou"
  },
  {
    question: "Você me ama?",
    options: ["Sim", "Não"],
    correctAnswer: "Sim"
  }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", checkAnswer);

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(button);
  });

  if (currentQuestionIndex === questions.length - 1) {
    const noButton = optionsElement.querySelector(`button[data-option="Não"]`);
    noButton.classList.add("no-hover");
  }

  questionElement.style.display = "block";
  optionsElement.style.display = "block";
  submitButton.disabled = true;
}

function selectOption(option) {
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.selectedOption = option;
  submitButton.disabled = false;
}

function animateButton() {
  const button = document.getElementById("movingButton");
  button.classList.add("clicked");
  button.onmouseup = function () {
    button.classList.remove("clicked");
  };
}

function startQuiz() {
  currentQuestionIndex = 0;
  startButton.style.display = "none";
  showQuestion();
}

function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion.selectedOption;

  if (Array.isArray(currentQuestion.correctAnswers)) {
    if (currentQuestion.correctAnswers.includes(selectedOption)) {
      alert("Resposta correta! 💕");
    } else {
      alert("Resposta incorreta! 😢");
    }
  } else {
    if (selectedOption === currentQuestion.correctAnswer) {
      alert("Resposta correta! 💕");
    } else {
      alert("Resposta incorreta! 😢");
    }
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";

    const finalContent = document.getElementById("finalContent");
    finalContent.style.display = "block";

    const finalMessage = document.getElementById("finalMessage");
    finalMessage.style.display = "block";

    submitButton.style.display = "none";

    const finalGif = document.getElementById("finalGif");
    finalGif.style.display = "block";

    const questionarioTitulo = document.getElementById("questionarioTitulo");
    questionarioTitulo.style.display = "none";
  }
}
