document.addEventListener('DOMContentLoaded', startQuiz); 

const questions = [
    {
        question: "What is 10-4?",
        answers: [
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "7", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "What is 10+4?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "14", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "What is the capital city of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which animal is commonly associated with Canada?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Beaver", correct: true },
            { text: "Elephant", correct: false },
            { text: "Kangaroo", correct: false }
        ]
    },
    {
        question: "How many points are on the maple leaf of the Canadian flag?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "What is the basic unit of currency in Canada?",
        answers: [
            { text: "Dollar", correct: true },
            { text: "Euro", correct: false },
            { text: "Pound", correct: false },
            { text: "Peso", correct: false }
        ]
    },
    {
        question: "What is 2x4?",
        answers: [
            { text: "8", correct: true },
            { text: "20", correct: false },
            { text: "16", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the name of the famous Canadian mounted police?",
        answers: [
            { text: "Canadian Rangers", correct: false },
            { text: "National Guard", correct: false },
            { text: "Canadian Coast Guard (CCG)", correct: false },
            { text: "Royal Canadian Mounted Police (RCMP)", correct: true }
        ]
    },
    {
        question: "In the fraction 3/8, what is the numerator?",
        answers: [
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: true },
            { text: "3/8", correct: false }
        ]
    },
    {
        question: "Vet is the shortened form for what type of doctor that cares for animals?",
        answers: [
            { text: "Optometrist", correct: false },
            { text: "Pediatrician", correct: false },
            { text: "Dermatologist", correct: false },
            { text: "Veterinarian", correct: true }
        ]
    },
    {
        question: "Who is the head of government in Canada?",
        answers: [
            { text: "The Queen", correct: false },
            { text: "President", correct: false },
            { text: "Prime Minister", correct: true },
            { text: "The Governor General", correct: false }
        ]
    },
    {
        question: "What year did Canada become a country?",
        answers: [
            { text: "1867", correct: true },
            { text: "1783", correct: false },
            { text: "1901", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false },
            { text: "Vincent Van Gogh", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: true },
            { text: "Nile", correct: false },
            { text: "Mississippi", correct: false },
            { text: "Yangtze", correct: false }
        ]
    },
    {
        question: "How many sides does an octagon have?",
        answers: [
            { text: "6", correct: false },
            { text: "16", correct: false },
            { text: "9", correct: false },
            { text: "8", correct: true }
        ]
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Stephen Curry", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "James Harden", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Hiroshima", correct: false }
        ]
    },
    {
        question: "Which of these is a solid?",
        answers: [
            { text: "Water", correct: false },
            { text: "Ice", correct: true },
            { text: "Air", correct: false },
            { text: "Alcohol", correct: false }
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
            { text: "São Paulo", correct: false },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "What do you call a baby frog?",
        answers: [
            { text: "Puppy", correct: false },
            { text: "Joey", correct: false },
            { text: "Cub", correct: false },
            { text: "Tadpole", correct: true }
        ]
    },
    {
        question: "Which of these is NOT a primary color?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: false },
            { text: "Green", correct: true },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic", correct: false },
            { text: "Pacific", correct: true },
            { text: "Arctic", correct: false },
            { text: "Indian", correct: false }
        ]
    },
    {
        question: "What do bees collect and use to make honey?",
        answers: [
            { text: "Leaves", correct: false },
            { text: "Water", correct: false },
            { text: "Nectar", correct: true },
            { text: "Pollen", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Krypton", correct: false },
            { text: "Venus", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const feedbackElement = document.getElementById("feedback"); 
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionElement.innerText = '';
    feedbackElement.innerText = '';
    nextButton.innerText = "Next";
    nextButton.style.display = "none"; 
    answerButtons.style.display = ""; 
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    feedbackElement.innerText = ''; 
}

function selectAnswer(correct) {
    const correctAnswer = correct;
    if (correctAnswer) {
        score++;
        feedbackElement.innerText = "Correct!";
        feedbackElement.style.color = "#9aeabc"; 
    } else {
        feedbackElement.innerText = "Incorrect!";
        feedbackElement.style.color = "#ff9393"; 
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; 
    });
    if (currentQuestionIndex + 1 < questions.length) {
        nextButton.style.display = "block";
    } else {
        showScore();
    }
}

function handleNextButton() {
    if (currentQuestionIndex + 1 < questions.length) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerText = `Quiz completed! Your score: ${score}/${questions.length}.`;
    feedbackElement.innerText = `Click "Play Again" to restart.`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
    nextButton.onclick = () => { 
        currentQuestionIndex = 0; 
        score = 0; 
        startQuiz(); 
    };
    
}

nextButton.addEventListener("click", handleNextButton);