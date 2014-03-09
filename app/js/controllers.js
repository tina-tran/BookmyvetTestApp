'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('MyCtrl1', [function() {

    $(document).ready( function() {
        $('.nav-menu').smint({
            'scrollSpeed' : 1000
        });
    });
    
    var map;
    var autocomplete;

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(51.2, 10.4),
            zoom: 6,
            streetViewControl: false
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var input = document.getElementById('search-term');
        //map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

        autocomplete = new google.maps.places.Autocomplete(input,
              {
                componentRestrictions: { country: 'de' }
              });   

        // When the user selects a place, mark it with a marker and 
        // move to the place and zoom the map in.
        google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
    }


    function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            // move to the place and zoom in
            map.panTo(place.geometry.location);
            map.setZoom(15);

            // mark the place
            var placeMarker = new google.maps.Marker({
                position: place.geometry.location,
                animation: google.maps.Animation.DROP,
                icon: 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green.png'
            });

            placeMarker.setMap(map);
        } 
    }

    google.maps.event.addDomListener(window, 'load', initialize);
                        
}]);