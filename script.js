document.addEventListener('DOMContentLoaded', () => {

  // Create a new XMLHttpRequest object
  var request = new XMLHttpRequest();

  // Call Dark Sky API for SEA Lang/Long
  request.open('GET', "https://api.darksky.net/forecast/d016bee6898e601140d4946423778c1f/47.606209,-122.332069", true);

  console.log("I made it this far.");

  request.onload = () => {
    console.log("I made it into the function.");
    // gather data from API call
    var data = JSON.parse(request.responseText);
    var contents = data['currently']['temperature'];

    // edit id temp span to be data response
    document.querySelector('#temp').innerHTML = contents;

    // image addresses
    var cold = "https://www.wpclipart.com/weather/ice_cold/ice_bolt.png";
    var hot = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sun_Symbol_of_the_National_Flag_of_the_Philippines.svg/200px-Sun_Symbol_of_the_National_Flag_of_the_Philippines.svg.png";
    var img_start = "<img src='";
    var img_end = "'>";

    // if too hot, say too hot
    if (contents >= 77) {
      document.querySelector("#temp_img").innerHTML = img_start + hot + img_end;
    } else {
      document.querySelector("#temp_img").innerHTML = img_start + cold + img_end;
    }
  };

  // send GET request
  request.send();
})
