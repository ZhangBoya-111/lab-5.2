   // let x = document.getElementById('geolocation');
    function getGeolocation() {
    var x = document.getElementById('geolocation'); // Get the paragraph element
     if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showGeolocation);
     } else {
     x.innerHTML = "Geolocation is not supported by this browser.";
     }
    }
    
    function showGeolocation(position) {
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     document.getElementById('geolocation').innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    }
   