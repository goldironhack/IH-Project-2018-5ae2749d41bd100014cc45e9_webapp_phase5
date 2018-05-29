
  function initMap() {
        var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative.province',
                elementType: 'geometry.stroke',
                stylers: [{color: '#3333CC'}]
              },
             
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#000000'}]
              },
               {
                featureType: 'administrative.neighborhood',
                elementType: 'labels.text.fill',
                stylers: [{color: '#990000'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#3333CC'}]
              }
             
            ],
            {name: 'Styled Map'});

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 40.7127753, lng: -74.0059728}
        });
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
        

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
       var locations = [
        {lat: 40.8447819, lng: -73.8648268},
        {lat: 40.6781784, lng: -73.9441579},
        {lat: 40.7830603, lng: -73.9712488},
        {lat: 40.7282239, lng: -73.7948516},
        {lat: 40.5795317, lng: -74.1502007},
      ]