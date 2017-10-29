// api key = nPLTtz4SXluAI0szfDChVWR6cBsPL0lV
var api_key = "nPLTtz4SXluAI0szfDChVWR6cBsPL0lV";



// Variables
var img = document.querySelector("#anime-img")

/*
    SEARCH BAR INPUT
    
    @return user input
 */
$('#search-input').keydown(function (event) {
    if (event.keyCode == 13) {
        // alert(document.getElementById("search-input").value);
        var tag_ = document.getElementById("search-input").value;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response_ = JSON.parse(xhr.responseText)
                console.log(response_)
                // var url = response_.data[0].images.original.url;
                var url = response_.data.image_url;
                img.src = url;
            }
    
        }
    
        xhr.open("GET", "http://api.giphy.com/v1/gifs/random?api_key=" + api_key + "&tag=" + tag_ +"&limit=1");
        xhr.send();
    }




});

// Button 
$('#btn').click(function (event) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response_ = JSON.parse(xhr.responseText)
            console.log(response_)
            // var url = response_.data[0].images.original.url;
            var url = response_.data.image_url;
            img.src = url;
        }

    }

    xhr.open("GET", "http://api.giphy.com/v1/gifs/random?api_key=" + api_key + "&tag=anime&limit=1");
    xhr.send();
});



