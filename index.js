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
    var userDate = "date" + number;
    let date = moment().format("dddd, Do MMMM");

    if (userResponse === "") {
        $("#questionPrompt").text(
            "Hold up! You didn't type anything in... Seriously... what do you want?"
        );
        $("#userInput").show();
        $("#nextButton").show();
    } else {
        localStorage.setItem(userKey, JSON.stringify(userResponse));
        localStorage.setItem("questionNumber", JSON.stringify(number));
        localStorage.setItem(userDate, JSON.stringify(date));

        $("#questionPrompt").text(
            userResponse + "?! wait hold up. Does this benefit others?"
        );
        $("#yesButton").show();
        $("#noButton").show();
    }
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

$("#instructionsButtonRight").on("click", instructions2);

function instructions2() {
    $("#instructionsHeader").text("Here's how it works");

    $("#lead1").text(
        "Step 1: Tell Dennis what your kid want's by typing it into the textbox"
    );

    $("#lead2").show();
    $("#lead2").text("Step 2: Answer the follow up prompts");

    $("#lead3").show();
    $("#lead3").text(
        "Step 3: Sit back and let Dennis determine if the product is worth buying!"
    );

    $("#lead4").show();
    $("#lead4").text(
        "PS there is a 5% chance that Dennis says yes to keep it interesting. That being said, I wouldn't let Dennis decide on anything expensive"
    );

    var beginButton = $("<button>");
    beginButton.attr("id", "getStarted1");
    beginButton.text("Get Started!");
    $("#conversation").append(beginButton);
    beginButton.attr("onClick", "location.href='index.html'");

    $("#instructionsButtonLeft").hide();
    $("#instructionsButtonRight").hide();
    $("#lead5").hide();
    $("#lead6").hide();
    $("#lead7").hide();
}