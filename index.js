$("#startButton").on("click", startButton);
$(document).on("click", "#nextButton", nextButton);
$(".yesNoButton").on("click", yesNoButton);

$("#yesButton").hide();
$("#noButton").hide();
$("#userInput").hide();
$("#nextButton").hide();

var number = JSON.parse(localStorage.getItem("questionNumber")) || 0;

let random = [
    "No shot! Go eat a vegetable...",
    "Are you serious? Look at your bank account?",
    "That's going to be a no from me!",
    "lol... no",
    "No",
    "Nah",
    "Maybe get a job first?",
    "You know what... Yes, you deserve it!",
];

function startButton() {
    $("#questionPrompt").text("So what do you want to buy?");

    $("#userInput").val("");
    $("#nextButton").show();
    $("#userInput").show();
    $("#startButton").hide();
}

function nextButton() {
    number++;
    $("#nextButton").hide();
    $("#userInput").hide();
    let userResponse = $("#userInput").val();
    var userKey = "question" + number;
    localStorage.setItem(userKey, JSON.stringify(userResponse));
    localStorage.setItem("questionNumber", JSON.stringify(number));
    $("#questionPrompt").text(
        userResponse + "?! wait hold up. Does this benefit others?"
    );
    $("#yesButton").show();
    $("#noButton").show();
}

function yesNoButton() {
    $("#nextButton").hide();
    $("#userInput").hide();
    $("#yesButton").hide();
    $("#noButton").hide();

    let randomResponse = Math.floor(Math.random() * random.length);
    $("#questionPrompt").text(random[randomResponse]);

    if (random[randomResponse] === random[random.length - 1]) {
        var audio = new Audio("./sounds/youwin.mp3");
        audio.play();
    } else {
        var audio = new Audio("./sounds/fart1.wav");
        audio.play();
    }

    $("#startButton").show();
    $("#startButton").text("try again");
}