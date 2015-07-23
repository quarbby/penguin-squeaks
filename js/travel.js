window.onload = function() {
    var map = L.map('map').setView([1.300, 103.8], 2);
    
    var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    	subdomains: 'abcd',
    	minZoom: 0,
    	maxZoom: 20,
    	ext: 'png'
    }).addTo(map);    
    
    var col = '#ff1493';
    var pos = [1.300, 103.8];
    var circle = L.circle(pos, 250000, {
        color: col,
        weight: 2,
        opacity: 1,
        fillColor: col,
        fillOpacity: 0.85
  }).addTo(map);
    
}

