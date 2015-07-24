window.onload = function() {
    var map = L.map('map').setView([23, 10], 2);
    
    L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4'],
    	minZoom: 0,
    	maxZoom: 20,
    	ext: 'png',
    }).addTo(map);
    
    var worldmaptitle = L.control({position: 'topright'});
    worldmaptitle.onAdd = function (map) {
        var div = L.DomUtil.create('h1', 'worldmaptitle');
        div.innerHTML = 'Lynnette\'s World Map';
        return div;
    };
    worldmaptitle.addTo(map);
    
    var circleRadius = 100000;
    var colours = {'travelled': '#ff1493', 'wishlist': '#9932cc'};
  
   $.getJSON("places.json", function(data) {
       console.log("Data");
        for (var i=0; i<data.length; i++) {
            var place = data[i];
            
            var col; 
            
            if (place.travel_type == "travelled") {
                col = colours.travelled;
            } else if (place.travel_type == "wishlist") {
                col = colours.wishlist;
            }
            
            var circle = L.circle([place.lat, place.long], circleRadius, {
                color: col,
                weight: 2,
                opacity: 1,
                fillColor: col,
                fillOpacity: 0.70
            });
          
            var popupContent = formatPopup(place);
            circle.bindPopup(popupContent);
            circle.addTo(map);
        }
    });  
}

function formatPopup(country) {
    var popup = "<div class=\"popup\">"; 
    popup += "<div class=\"popup-name\">" + country.name + "</div>";
    
    if (country.travel_type == "travelled" ) {
        popup += "<div class=\"popup-date\">" + country.date + "</div>";
    } else if (country.travel_type == "wishlist") {
        popup += "<div class=\"popup-date\">" + "Bring Me There Someday! :)" + "</div>";
    }

    popup += "<div class=\"popup-desc\">" + country.desc + "</div>";   
    
    if (country.url != "") {
        popup += "<div class=\"popup-link\"><a href=\"" + popup.url + "\">Read More</a></div>";
    }
    popup += "<div class=\"popup-img\"><img src=\"" + country.img + "\" width=\"220px\" height=\"150px\"></div>";
    popup += "</div>"
    
    return popup;
}
