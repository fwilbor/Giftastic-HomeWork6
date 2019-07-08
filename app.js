//Compile Dog Breed Array that will be used to Populate  Initial Breed Buttons
var dogBreeds = ["Labrador", "Rottweiler", "Golden Retriever", "French Bulldog", "Pug", "German Sherperd", "Bull Dog", "Pit Bull", "Cane Corso", "Yorkshire Terrier"];


$("button").on("click", function () {
    //Grabbing and storing the data-breed property value from the button
    var breed = $(this).attr("data-breed");
    console.log(this);
    console.log("I've been clicked!");



    //Construct a queryURL using the breed name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        breed + "&api_key= WGWBBzegrcwH4GtMFyGfNU52gepxhpL2&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            //Looping through each result item
            for (var i = 0; i < results.length; i++) {


                // Creating and storing a div tag
                var breedDiv = $("<div>");

                //Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);


                //Creating and storing an Image Tag

                var breedImage = $("<img>");

                //Setting the src attribute of the image to a property pulled off the result item
                breedImage.attr("src", results.images.fixed_height.url);

                //Appeding the paragraph and image tag to the breedDiv
                breedDiv.append(p);
                breedDiv.append(breedImage);

                //Prepending the breedDivto the HTML page in the "#imageGoHere" div
                $("#imagesGoHere").prepend(breedDiv);



            }
        });

});





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