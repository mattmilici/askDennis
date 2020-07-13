function myFunction() {
    let random = ["No shot! Go eat a vegetable...", "Are you serious? Look at your bank account?", "That's going to be a no from me!", "lol... no", "No", "Nah", "Maybe get a job first?"];
    let randomResponse = Math.floor(Math.random() * random.length);
    document.getElementById("test").innerHTML = random[randomResponse];
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}