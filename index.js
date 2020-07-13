function myFunction() {
    let random = ["1", "2", "3", "4", "5", "6"];
    let randomResponse = Math.floor(Math.random() * random.length);
    document.getElementById("test").innerHTML = random[randomResponse];
}