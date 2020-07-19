var startButton = document.querySelector("#startButton");

function console() {
    var para = document.createElement("p");
    var node = document.createTextNode("So what do you want to buy?");
    para.appendChild(node);
    para.setAttribute("class", "text-center row-item row-items");
    para.setAttribute("id", "questions");
    var element = document.getElementById("buttonAction");
    element.insertBefore(para, element.childNodes[0]);

    var input = document.createElement("input");
    var inputNode = document.createTextNode("");
    input.appendChild(inputNode);
    input.setAttribute("class", "text-center row-item row-items");
    input.setAttribute("id", "userInput");
    var inputElement = document.getElementById("buttonAction");
    inputElement.insertBefore(input, inputElement.childNodes[1]);

    document.getElementById("test").innerHTML = "";

    startButton.innerHTML = "Next";

    startButton.setAttribute("onClick", "whoBenefits()");
}

function whoBenefits() {
    var elem = document.getElementById("userInput");
    elem.parentNode.removeChild(elem);
    document.getElementById("questions").innerHTML = "Does this benefit others?";

    var noButton = document.createElement("button");
    var inputButton = document.createTextNode("No");
    noButton.appendChild(inputButton);
    noButton.setAttribute("id", "no-button");
    noButton.setAttribute("class", "btn btn-light");
    var buttonElement = document.getElementById("buttonAction");
    buttonElement.insertBefore(noButton, buttonElement.childNodes[2]);

    startButton.setAttribute("onClick", "dennisResponse()");
    startButton.innerHTML = "Yes";
}

function dennisResponse() {
    var no_button = document.getElementById("no-button");
    no_button.parentNode.removeChild(no_button);

    // changes responses
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
    let randomResponse = Math.floor(Math.random() * random.length);
    document.getElementById("test").innerHTML = random[randomResponse];

    // adds sound
    if (random[randomResponse] === random[random.length - 1]) {
        var audio = new Audio("./sounds/youwin.mp3");
        audio.play();
    } else {
        var audio = new Audio("./sounds/fart1.wav");
        audio.play();
    }
}

// ---------------- nightmode --------------

var container = document.querySelector("body");
var mode = "body";

function nightMode() {
    if (mode === "dark") {
        mode = "light";
        container.setAttribute("class", "light");
    } else {
        mode = "dark";
        container.setAttribute("class", "dark");
    }
}
// ---------------- nightmode --------------