// global variables
var correct = 0;
var wrong = 0;
var timeRemaining = 30;

// variable to hold question IDs
var questions = ["#question-1", "#question-2", "#question-3", "#question-4", "#question-5", "#question-6", "#question-7", "#question-8", "#question-9", "#question-10"];

// variable to hold correct answers
var correctAnswers = ["calatrava", "clock2", "70sShow", "maier", "bastille", "1903", "joanArc", "brickColor", "rock", "lesPaul"];

// variable to hold user answers
var userAnswers = [];

// variable showQuestion holds the setInterval when game starts
var showQuestion;

// count keeps track of the index of the currently displaying question.
var count;

//  Variable that holds setInterval that runs the countdown
var intervalId;

// variable to record total correct, incorrect or unanswered questions
var totalCorrect = 0;
var totalWrong = 0;
var totalTimeout = 0;

$(document).ready(function(){

    var myTimer = setInterval(startTimer, 30000);

    // function to start timer
    function startTimer() {
        var intervalId = setInterval(function(){
            $("#timer").text("Time remaining: " + timeRemaining);
            timeRemaining -= 1;
            if(timeRemaining <= 0){
                clearInterval(intervalId);
                $("#timer").text("Time's up! Next question.");
            }
        }, 1000);
    }
    // function to stop timer
    function stopTimer() {
        clearInterval(myTimer);
    }
    

    // start game
    $("#start").on("click", function(startQuestions) {
        $("#startScreen").hide("#start");

        // function to load question & answer choices
        function startQuestions() {

        // Show the first question in #question-1 div.
        $("#question-1").addClass(".show");

        }
        startQuestions();
        startTimer();
        function userChoice() {
            $("input[type='radio']").click(function(){
                var radioValue = $("input[name='question-1']:checked").val();
                stopTimer();

                if(radioValue){
                    userAnswers.push(radioValue);
                    console.log("user choice is " + radioValue);
                    console.log(userAnswers);
                }
            })
        }
        userChoice();
        // on click answer choice determine correct/incorrect
        // if (userAnswers[count] === correctAnswers[count]) {
        //     $("#messageCorrect").text("You're right!");
        //     totalCorrect++;
        //     console.log("total correct answers: " + totalCorrect)

        // } else if (userAnswers[count] !== correctAnswers[count]) {
        //     $("#messageWrong").text("Sorry, wrong answer. The correct answer is " + correctAnswers[count]);
        //     totalWrong++;
        //     console.log("total wrong answers: " + totalWrong);
        // } else if (timeRemaining === 0) {
        //     $("#messageTimeout").text("Sorry, you're out of time. The correct answer is " + correctAnswers[count]);
        //     totalTimeout++;
        //     console.log("total unanswered questions: " + totalTimeout);
        // }
        

    })


    function nextQuestion() {
        //  Increment the count by 1.
        count++;
    
    
        // setTimeout to run displayQuestion after 30 second.
        setTimeout(showQuestion, 30000);
    
        // If the count is the same as the length of the image array, display end of game screen.
       
    }



    // if correct display correct message & load next question. Restart timer.

    // else if incorrect display incorrect message, display correct answer & load next question. Reset timer.

    // ele if timeout display timeout message & correct answer. Load next question. Reset timer.

    // when all questions answered display total correct/incorrect. Display play again button.
})