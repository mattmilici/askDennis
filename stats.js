for (let i = 0; i <= JSON.parse(localStorage.getItem("questionNumber")); i++) {
    var userKey = "question" + i;
    var userDatePicked = "date" + i;

    var lastNumber = JSON.parse(localStorage.getItem("questionNumber"));
    var lastDateInput = "date" + lastNumber;

    var lastDate = JSON.parse(localStorage.getItem(lastDateInput));
    let date = moment().format("dddd, Do MMMM");

    if (date === lastDate) {
        $("#firstDay").text(date);

        var listItem = $("<ol>");
        listItem.addClass("listItem");
        listItem.text(JSON.parse(localStorage.getItem(userKey)));
        $("#firstDayDiv").append(listItem);
    } else {
        var divItem = $("<div>");
        divItem.addClass("divItem");
        $("#listResponses").prepend(divItem);

        var listItem = $("<ol>");
        listItem.addClass("listItem");
        listItem.text(JSON.parse(localStorage.getItem(userKey)));
        $("#listResponses").prepend(listItem);

        var dateItem = $("<h2>");
        listItem.addClass("listItem");
        dateItem.text(JSON.parse(localStorage.getItem(date)));
        $("#listResponses").prepend(dateItem);
    }
}