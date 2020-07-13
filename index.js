function myFunction() {
    let random = ["No shot! Go eat some vegetable...", "Are you serious? Have you seen your savings accoumnt?", "That's going to be a no from me!", "lol... no", "No", "Nah"];
    let randomResponse = Math.floor(Math.random() * random.length);
    document.getElementById("test").innerHTML = random[randomResponse];
}