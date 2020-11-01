
## Tandem Code Challenge

### Assumptions
* A user can view questions.
* Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round

### Acceptance Criteria
* A round of trivia has 10 Questions
* All questions are multiple-choice questions
* Your score does not need to update in real time
* Results can update on form submit, button click, or any interaction you choose
* We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Choices Made
I decided to use a very simple set up of a HTML, CSS, JavaScript, and jQuery. I normally enjoy writing React code, but utilizing React for a simple single page app would have been overkill and unnecessary. 

Since the requirements did not specifically say to parse the JSON file, I made the decision to not parse the JSON file and instead just add it into a static file called store.js. The rationale was not to over optimize and not make the app accept additional JSON files that can be parsed. I enjoyed writing this simple app and thanks for your time!

