// 1. Quiz Questions Array
// Storing questions and answers as objects within an array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is President of Russia", answer: "Vladimir Putin" },
    { question: "Which language is used for web development?", answer: "JavaScript" }
];

// 2. Function to Run the Quiz
function runQuiz() {
    let score = 0; // Initialize score to zero [cite: 33]

    // 3. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        
        // 4. Prompt for User Input
        // Displays the question and waits for user input [cite: 37]
        let userAnswer = prompt(quizQuestions[i].question);

        // Check if user pressed Cancel (userAnswer would be null)
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return; 
        }

        // 5. Normalize Input & Check Answer
        // Convert input to lowercase and remove whitespace for accurate comparison 
        if (userAnswer.trim().toLowerCase() === quizQuestions[i].answer.trim().toLowerCase()) {
            
            // 6. Provide Immediate Feedback (Correct)
            alert("Correct!");
            score++; // Increase score by one [cite: 42]
            
        } else {
            // 7. Provide Immediate Feedback (Wrong)
            // Displays the correct answer if the user is wrong [cite: 45]
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // 8. Display Final Score
    // Shows total score out of the total number of questions [cite: 46]
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

// Run the function to start the game
runQuiz();