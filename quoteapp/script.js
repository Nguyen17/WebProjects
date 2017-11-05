// Creating api http request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json", false );
xhr.send();

// Console output api status and response
console.log(xhr.status);
console.log(xhr.response)

// Convert response into json object
var result = xhr.responseText;
var jsonData = "" + result;
var jsonObject = JSON.parse(jsonData);

// Get quote from api response
document.getElementById("quote").innerHTML = "<p>&ldquo;" + jsonObject.quote + "&rdquo;</p>";




var permaLink = jsonObject.permalink;
var authorInfo = jsonObject.author;

var linkAddress = '<a href="'+ permaLink + '" target="_blank" rel="noopener noreferrer"> ' + authorInfo + "</a>";

document.getElementById("author").innerHTML = "<p>" + linkAddress + "</p>";
// Get author from api resonse




