//Compile Dog Breed Array that will be used to Populate  Initial Breed Buttons
var dogBreeds = ["Labrador", "Rottweiler", "Golden Retriever", "French Bulldog", "Pug", "German Sherperd", "Bull Dog", "Pit Bull", "Cane Corso", "Yorkshire Terrier"];

function renderButtons() {

    $("#buttonRow").empty();
    for (var i = 0; i < dogBreeds.length; i++) {
        var a = $("<button>");
        a.addClass("dogs");
        a.attr("data-breed", dogBreeds[i]);
        a.text(dogBreeds[i]);
        $("#buttonRow").append(a);


    }

}

$("#add-breed").on("click", function (event) {

    event.preventDefault();
    var breed = $("#breed-input").val().trim();
    dogBreeds.push(breed);
    renderButtons();



});

renderButtons();


console.log("Hello World");