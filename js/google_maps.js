function myMap() {
    var myCenter = new google.maps.LatLng(28.108285, -15.421433);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    
    var contentString = '<div id="content">'+
            '<h1>Academia Gustavo</h1>'+
            '<div id="bodyContent">'+
            '<p>Calle Ing. José Bosch y Sintes, 7</p>'+
            '<p>35003 Las Palmas de Gran Canaria</p>'+
            '<p>Las Palmas</p>'+
            '<p>España</p>'+
            '<p><a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=28.108338,-15.421402&amp;z=19&amp;t=m&amp;hl=es-ES&amp;gl=US&amp;mapclient=apiv3&amp;cid=14056050323785433313"> <span>Ver en Google Maps</span> </a></p>'+
            '</div>'+
            '</div>';
    
    var infowindow = new google.maps.InfoWindow({content:contentString});

    google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});
    marker.setMap(map);
}
