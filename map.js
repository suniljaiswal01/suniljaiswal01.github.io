

/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
    var mumbaiMarker = new H.map.Marker({lat:19.0760, lng:72.8777});
    map.addObject(mumbaiMarker);

    var delhiMarker = new H.map.Marker({lat:28.70, lng: 77.10});
    map.addObject(delhiMarker);

    var bangloreMarker = new H.map.Marker({lat:12.9716, lng:77.5946});
    map.addObject(bangloreMarker);

    var hyderabadMarker = new H.map.Marker({lat:17.3850, lng: 78.4867});
    map.addObject(hyderabadMarker);

    var ahmedabadMarker = new H.map.Marker({lat:23.0225, lng:72.5714});
    map.addObject(ahmedabadMarker);
	
	var chennaiMarker = new H.map.Marker({lat:13.0827, lng:80.2707});
    map.addObject(chennaiMarker);
	
	var kolkataMarker = new H.map.Marker({lat:22.5726, lng:88.3639});
    map.addObject(kolkataMarker);
	
	var jaipurMarker = new H.map.Marker({lat:26.9124, lng:75.7873});
    map.addObject(jaipurMarker);
	
	var lucknowMarker = new H.map.Marker({lat:26.8467, lng:80.9462});
    map.addObject(lucknowMarker);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "NaWfGZToci7fWUA8l9FL"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:20.5937, lng:78.9629},
  zoom: 4.5,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  addMarkersToMap(map);
}