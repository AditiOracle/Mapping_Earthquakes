// Add console.log to check to see if our code is working.
console.log("working");

//create the map object witha center and zoom level
let map=L.map("mapid").setView([34.0522, -118.2437],4);

//This method is useful when we need to add multiple tile layers, or a background image of our map(s)


// let map=L.map("mapid",{
//     center:[40.7,-94.5],
//     zoom:4
// });

// We create the tile layer that will be the background of our map.
// Get data from cities.js
let cityData = cities;


  // Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city);
    L.circleMarker(city.location,{
        radius:city.population/100000,
        color:"orange",
        fillColor:"orange"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
   });


// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);


// L.circleMarker([34.0522, -118.2437], {
//     color:"black",
//     radius: 300,
//     fillColor:"#ffffa1"
//  }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);