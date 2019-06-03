$(function() {
  var map = L.map('map');
  var latlngs = [];
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFtYmxlIiwiYSI6ImFOcDVnYTgifQ.00k-bZT-tSHnCDFW7VdptA'
  }).addTo(map);

  fetch('/modules/apostrophe-blog/latlng')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      if (myJson.length) {
        myJson.forEach(function(location) {
          latlngs.push([location.lng, location.lat])
          L.circle([location.lng, location.lat], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 20
          }).addTo(map);
        })
        var bounds = new L.LatLngBounds(latlngs);
        map.fitBounds(bounds);
        var ll = [
          [
            [45.51, -122.68],
            [37.77, -122.43],
            [34.04, -118.2]
          ],
          [
            [40.78, -73.91],
            [41.83, -87.62],
            [32.76, -96.72]
          ]
        ];
        var firstpolyline = new L.Polyline(ll, {
          color: 'blue',
          weight: 3,
          opacity: 0.5,
          smoothFactor: 1
        });
        firstpolyline.addTo(map);
        map.scrollWheelZoom.disable()
      }
    });
})