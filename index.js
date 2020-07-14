function myFunction() {
    // changes response
    let random = ["No shot! Go eat a vegetable...", "Are you serious? Look at your bank account?", "That's going to be a no from me!", "lol... no", "No", "Nah", "Maybe get a job first?", "You know what... Yes, you deserve it!"];
    let randomResponse = Math.floor(Math.random() * random.length);
    document.getElementById('test').innerHTML = random[randomResponse];

    // adds sound
    if (random[randomResponse] === random[random.length - 1]) {
        var audio = new Audio('./sounds/youwin.mp3');
        audio.play();
    } else {
        var audio = new Audio('./sounds/fart1.wav');
        audio.play();
    }
    return;
}