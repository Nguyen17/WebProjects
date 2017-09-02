var xhr = new XMLHttpRequest();
var api_key = "uvej-2xux8WGR72JuKfw";
var latitude_ = prompt("Enter latitude: ");
var longitude_ = prompt("Enter longitude: ");
xhr.open("GET", "https://api.onwater.io/api/v1/results/" + latitude_ + "," + longitude_ + "?" + "access_token=" + api_key,false);
// xhr.open("GET","https://api.onwater.io/api/v1/results/10,30?access_token=uvej-2xux8WGR72JuKfw", false);



// xhr.send(null);

// console.log(xhr.status);
// console.log(xhr.statusText);
// console.log(xhr.response);
// Console.log(xhr.responseText);
// var result = xhr.responseText;
// document.getElementsByClassName("response").innerHTML = result;

// xhr.send();


// xhr.open("GET", "https://api.onwater.io/api/v1/results/" + latitude_ + "," + longitude_ , false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);
console.log(xhr.responseText);

var result = xhr.responseText;
// document.getElementById("response").innerHTML = result;
var jsonData = "" + result;
var jsObject = JSON.parse(jsonData);
// document.write("is it? " + jsObject.water);

if (jsObject.water == false){
    document.getElementById("response").innerHTML = "Nope... :c";
    // document.write("Nope... :c");
}
else{
    document.getElementById("response").innerHTML = "WTFFF HOLY SHIT ITS ON WATER!";

}

function initMap() {
    var uluru = {lat: jsObject.lat , lng: jsObject.lon};
    var map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
// alert(result);
