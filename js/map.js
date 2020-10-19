
var map;

map =L.map('map', {
        center: [ 24.926455,121.526396], // 中心點座標
        zoom: 12, // 0 - 18
        attributionControl: true, // 是否秀出「leaflet」的貢獻標記
        zoomControl: true , // 是否秀出 - + 按鈕
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//建立地標
var marker = L.marker([ 24.926455,121.526396]);
marker.addTo(map);
marker.bindPopup("<a href=''><img src='./pic/camping/北1-1.jpg'></a><br> <a href='camping2.html'>確幸莊園</a><br>目前開團:2組");


//讀取 GeoJSON，加入行政區邊界
// $.getJSON('https://1999.noob.tw/data/kaohsiung.json', function(r){
//     L.geoJSON(r, {color: '#333', weight: 0.7}).addTo(map);
// })
function onlick(){
    $(marker).openPopup();
}
