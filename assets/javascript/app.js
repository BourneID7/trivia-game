// global variables
var correct = 0;
var wrong = 0;
var timeRemaining = 30;

// variable to hold question IDs
var questions = ["#question-0", "#question-1", "#question-2", "#question-3", "#question-4", "#question-5", "#question-6", "#question-7", "#question-8", "#question-9"];

// variable to hold correct answers
var correctAnswers = ["Santiago Calatrava", "The second largest four-faced clock", "That 70s Show", "Henry Maier", "Bastille Days", "1903", "St. Joan of Arc Chapel", "The color of brick", "Rock River", "Les Paul"];

// variable to hold user answers
var userAnswers = [];

// variable showQuestion holds the setInterval when game starts
var showQuestion;

// count keeps track of the index of the currently displaying question.
var count = 0;

//  Variable that holds setInterval that runs the countdown
var intervalId;

// variable to record total correct, incorrect or unanswered questions
var totalCorrect = 0;
var totalWrong = 0;
var totalTimeout = 0;

$(document).ready(function(){
    

    // function to start timer
    function startTimer() {
        
            intervalId = setInterval(function(){
            $("#timer").text("Time remaining: " + timeRemaining);
            timeRemaining -= 1;
            if(timeRemaining <= 0){
                clearInterval(intervalId);
                $("#timer").text("Time's up!");
                stopTimer();
                userAnswers.push("unanswered");
                nextQuestion();

            }
        }, 1000);
    }
    // function to stop timer
    function stopTimer() {
        clearInterval(intervalId);
        timeRemaining = 30;
    }
    
    // function to load next question
    function nextQuestion() {
        // hide last question
        $("#question-" + count).hide();

        // Increment the count by 1.
        count++;

        // show next question
        $("#question-" + count).show();

        // reset timer
        startTimer();
    }

    // function to delay next question long enough to display correct/wrong/unanswered message
    function delayNextQuestion() {
        setTimeout(nextQuestion, 5000);
    }

    // on click answer choice determine correct/incorrect
    function checkAnswer() {

        // if correct display correct message.

        if (userAnswers[count] === correctAnswers[count]) {
            $("#messageCorrect-" + count).text("You're right!");
            totalCorrect ++;
            console.log("total correct answers: " + totalCorrect)

        // else if incorrect display incorrect message, display correct answer.

        } else if (userAnswers[count] !== correctAnswers[count]) {
            $("#messageWrong-" + count).text("Sorry, wrong answer. The correct answer is " + correctAnswers[count]);
            totalWrong++;
            console.log("total wrong answers: " + totalWrong);

        // else if timeout display timeout message & correct answer.

        } else if (userAnswers[count] === "unanswered") {
            $("#messageTimeout-" + count).text("Sorry, you're out of time. The correct answer is " + correctAnswers[count]);
            totalTimeout++;
            console.log("total unanswered questions: " + totalTimeout);
        }
        //clearTimeout(delayNextQuestion, 5000);

    }

    // start game
    $("#start").on("click", function(startQuestions) {
        $("#startScreen").hide("#start");
        $("#question-1").hide();
        $("#question-2").hide();
        $("#question-3").hide();
        $("#question-4").hide();
        $("#question-5").hide();
        $("#question-6").hide();
        $("#question-7").hide();
        $("#question-8").hide();
        $("#question-9").hide();


        // function to load question & answer choices
        function startQuestions() {

        // Show the first question in #question-0 div.
        $("#question-" + count).show();

    }
        startQuestions();
        startTimer();
        
        
        // record user choices


            $(".question-0").click(function(){
                var radioValue0 = $("input[name='question-0']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue0);
                console.log(userAnswers[0]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
                
            })
            $(".question-1").click(function(){
                var radioValue1 = $("input[name='question-1']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue1);
                console.log(userAnswers[1]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-2").click(function(){
                var radioValue2 = $("input[name='question-2']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue2);
                console.log(userAnswers[2]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-3").click(function(){
                var radioValue3 = $("input[name='question-3']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue3);
                console.log(userAnswers[3]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-4").click(function(){
                var radioValue4 = $("input[name='question-4']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue4);
                console.log(userAnswers[4]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-5").click(function(){
                var radioValue5 = $("input[name='question-5']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue5);
                console.log(userAnswers[5]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-6").click(function(){
                var radioValue6 = $("input[name='question-6']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue6);
                console.log(userAnswers[6]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-7").click(function(){
                var radioValue7 = $("input[name='question-7']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue7);
                console.log(userAnswers[7]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-8").click(function(){
                var radioValue8 = $("input[name='question-8']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue8);
                console.log(userAnswers[8]);
                stopTimer();
                checkAnswer();
                delayNextQuestion();
                //nextQuestion();
            })
            $(".question-9").click(function(){
                var radioValue9 = $("input[name='question-9']:checked").val();

                userAnswers.push($(this).val());
                console.log("user choice is " + radioValue9);
                console.log(userAnswers[9]);
                stopTimer();
                checkAnswer();
                stopTimer();

            })
        


    })



    
        // setTimeout to run displayQuestion after 30 second.
        //setTimeout(showQuestion, 30000);
    
        // If the count is the same as the length of the questions array, display end of game screen.
       
    






    // when all questions answered display total correct/incorrect. Display play again button.
})