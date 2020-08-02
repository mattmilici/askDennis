for (let i = 0; i <= JSON.parse(localStorage.getItem("questionNumber")); i++) {
    var userKey = "question" + i;

    var listItem = $("<ol>");
    listItem.attr("id", "listItem");
    listItem.text(JSON.parse(localStorage.getItem(userKey)));

    $("#listResponses").prepend(listItem);
}

$("#listResponses");