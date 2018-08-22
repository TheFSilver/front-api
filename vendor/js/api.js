var parameters = location.search.substring(1).split("&");

if (parameters[1] === undefined) {
  var $latidude = 0;
} else {
var $latitude = parameters[0].split("=")[1];
var $longitude = parameters[1].split("=")[1];
var $message = parameters[2].split("=")[1];
}

function myMap() {
  if ($latidude === 0 ) {
    var myCenter = new google.maps.LatLng(51.508742,-0.120850);
    var infowindow = new google.maps.InfoWindow({
    content:"Londres"
    });
  } else {
    var myCenter = new google.maps.LatLng($latitude,$longitude);
    var infowindow = new google.maps.InfoWindow({
    content:$message
    });
  }
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position:myCenter,
    animation:google.maps.Animation.BOUNCE
    });

  marker.setMap(map);

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });

}
