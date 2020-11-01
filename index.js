
// Show the question
function showQuestion() {
    /*
        Take argument 'questionNumber', the current question the user is viewing.
        Retrieve the 'question' object from the store. Use that object's values
        to populate the question HTML block. Return the block.
    */
    // let questionCount = STORE.questions.length;
    let maxQuestions = STORE.startingQuestion + 10;
    let questionNumber = STORE.currentQuestion;
    let displayQuestion = questionNumber + 1 - STORE.startingQuestion;
    let correctSoFar = STORE.currentScore;

    if (questionNumber < maxQuestions) {
        let question = STORE.questions[questionNumber].question;
        let options = STORE.questions[questionNumber].options;

        return `
            <section role="region">
                <h2>${question}</h2>
                <hr>
                <fieldset>
                    <form action="">
                        <input type="radio" name="answer" value="0" required>${options[0]}<br>
                        <input type="radio" name="answer" value="1">${options[1]}<br>
                        <input type="radio" name="answer" value="2">${options[2]}<br>
                        <input type="radio" name="answer" value="3">${options[3]}
                        <div class="btn-container"><button id="submit-answer">SUBMIT</button></div>
                    </form>
                </fieldset>
                <div class="status-bar">
                    <div class="current-question"><span>Q | ${displayQuestion}</span></div>    
                    <div class="current-status"><span>${correctSoFar}</span> / 10</div> 
                </div>
            </section>
        `;
    }
    else {
        assessScore();
    }
}

function startQuiz() {
    $('#start-page').on('click', '.start-quiz', event => {
        
        $('#start-page').remove();
        let randomStartingQuestion = Math.floor(Math.random() * 11);
        STORE.currentQuestion = randomStartingQuestion;
        STORE.startingQuestion = randomStartingQuestion;

        renderQuestion();
    })
}

function renderQuestion() {
    $('.generate-questions').html(showQuestion);
}

// Check for the answer
function checkAnswer() {
    $('.generate-questions').on('submit', event => {
        event.preventDefault();
        let chosenAnswer = $('input:checked');
        let value = parseInt(chosenAnswer.val());
        let questionNumber = STORE.currentQuestion;
        let correctAnswer = STORE.questions[questionNumber].correct;

        if (value === correctAnswer) {
            STORE.increaseScore();
            showAnswerCorrect();
        }
        else {
            showAnswerWrong(correctAnswer);
        }

    })
}

// Show that answer is correct
function showAnswerCorrect() {
    // show the answer...
    // If user is not on last question, 'next' button should advance user to next question
    STORE.increaseQuestion();
    let questionNumber = STORE.currentQuestion - STORE.startingQuestion;
    // let questionCount = STORE.questions.length;
    let correctSoFar = STORE.currentScore;
    let newHTML = `
        <section>
            <h2>Hooray!</h2>
            <h3>You answered that trivia question correctly!</h3>
            <div class="btn-container">
                <button id="next-question">NEXT</button>
            </div>
            <div class="status-bar">
                <div class="current-question"><span>Q | ${questionNumber}</span></div>    
                <div class="current-status"><span>${correctSoFar}</span> / 10</div> 
            </div>
        </section>
    `
        ;
    $('.generate-questions').html(newHTML);
}

// Show that answer is wrong
function showAnswerWrong() {
    // show the answer...
    // If user is not on last question, 'next' button should advance user to next question    
    
    let questionCount = 10;
    let correctSoFar = STORE.currentScore;
    let questionNumber = STORE.currentQuestion;
    let displayQuestion = questionNumber + 1 - STORE.startingQuestion;
    let correctAnswer = STORE.questions[questionNumber].correct;
    let newHTML =
        `
        <section>
            <h2> Uh oh!</h2>
            <h3>Wrong answer my friend! The correct answer was ${STORE.questions[questionNumber].options[correctAnswer]}</h3>
            <div class="btn-container">
                <button id="next-question">NEXT</button>
            </div>
            <div class="status-bar">
                <div class="current-question"><span>Q | ${displayQuestion}</span></div>    
                <div class="current-status"><span>${correctSoFar}</span> / ${questionCount}</div> 
            </div>
        </section>`;

    $('.generate-questions').html(newHTML);
    STORE.increaseQuestion();
}


// Show the final page with results
function showFinalPage(rating) {
    let score = STORE.currentScore;
    let questionCount = 10;
    let gameResult = '';

    switch (rating) {
        case 0:
        case 1:
            gameResult = "You have not achieved a winning score!";
            break;
        case 2:
            gameResult = "You did super duper!"
    }
    $('.generate-questions').html(`
            <section role="region">
                <h1>Game Over</h1> 
                <h2>${gameResult}</h2>
                <div><span>${score}</span> correct!</div>
                <div><span>${questionCount - score}</span> wrong!</div>
                <div class="btn-container">
                    <button id="restart-quiz">Play Again?</button>
                </div>
            </section>`);
}

function startNewQuiz() {
    $('.generate-questions').on('click', '#restart-quiz', event => {
        location.reload();
    })
}
function assessScore() {    // Assess user's score
    let score = STORE.currentScore;
    if (score < 4) {
        showFinalPage(0);
    } else if (score <= 6 && score >= 4) {
        showFinalPage(1);
    } else if (score >= 7) {
        showFinalPage(2);
    }
}

function renderNextQuestion() {
    $('.generate-questions').on('click', '#next-question', event => {
        event.preventDefault();
        renderQuestion();
        // checkAnswer();
    })
}

function updateQuestionNumber() {
    $('.current-question').text(STORE.currentQuestion);
}

function updateScoreNumber() {
    $('.current-score').text(STORE.currentScore);
}


function callQuizFunctions() {
    startQuiz();
    showQuestion();
    checkAnswer();
    renderNextQuestion();
    startNewQuiz();
}

$(callQuizFunctions);
