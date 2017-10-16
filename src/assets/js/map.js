/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: map.js
   =========================== */

var gmarkers1 = [];

//mapPointsData Object
var mapPointsData = [
  {
    'num': '1',
    'name': 'Bondi Beach',
    'lat': '-33.890542',
    'lng': '151.274856'
  }, {
    'num': '2',
    'name': 'Coogee Beach',
    'lat': '-33.923036',
    'lng': '151.259052'
  }, {
    'num': '3',
    'name': 'Cronulla Beach',
    'lat': '-34.028249',
    'lng': '151.157507'
  }, {
    'num': '4',
    'name': 'Manly Beach',
    'lat': '-33.80010128657071',
    'lng': '151.28747820854187'
  }, {
    'num': '5',
    'name': 'Maroubra Beach',
    'lat': '-33.95019',
    'lng': '151.259302'
  }
];

/**
 * Function to init map
 */

function initialize() {
  var center = new google.maps.LatLng(-33.9, 151.2);

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    zoomControl: true
  });


  for (i = 0; i < mapPointsData.length; i++) {
    addMarker(i, mapPointsData[i]);
  }

}

/**
 * Function to add marker to map
 */

function addMarker(i, marker) {
  var title = marker.name;
  var pos = new google.maps.LatLng(marker.lat, marker.lng);
  var content = '<div class="copy"><div class="inner">' + marker.name + '</div></div>';
  var label = (i + 1).toString();

  var mapMarkerImage = new google.maps.MarkerImage('assets/images/map-marker-icon.png', null, null, new google.maps.Point(8, 40), new google.maps.Size(25, 25));
  mapMarkerImage.url += "#" + label;

  var infoClass = category + "Box box" + label;
  var infoClass2 = "box" + label;

  ib = new InfoBox({
    content: "",
    disableAutoPan: false,
    maxWidth: 150,
    pixelOffset: new google.maps.Size(-55, -52),
    boxClass: "bInfoBox " + infoClass,
    // boxStyle: {
    //   background: bgColor
    // },
    closeBoxMargin: "0",
    closeBoxURL: "",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false,
    alignBottom: true
  });

  ib.setContent(content);
  ib.open(map);
  ib.setPosition(pos);

  marker1 = new google.maps.Marker({
    title: title,
    position: pos,
    category: category,
    map: map,
    copy: content,
    icon: mapMarkerImage,
    id: label,
    uniqueSrc: mapMarkerImage.url,
    label: {
      text: ' ',
      color: '#fff',
      fontSize: '10px',
      fontWeight: 'bold',
      padding: '0px'
    },
    zIndex: i + 1,
    title: mapPointsData[i].name,
    className: mapPointsData[i].name
  });

  gmarkers1.push(marker1);

  document.getElementsByClassName('.attractionsinfoBox')[0] += 'marker1 ' + marker1.num;

  google.maps.event.addListener(marker1, "mouseover", function() {
    $("." + infoClass2).css({'opacity': '1', 'z-index': '9', 'pointer-events': 'all'})
  });

  google.maps.event.addListener(marker1, "mouseout", function() {
    $("." + infoClass2).css({'opacity': '0', 'z-index': '0', 'pointer-events': 'none'})
  });
}

//init Map
window.onload = function() {
  if ($('body').hasClass('about')) {
    setTimeout(function() {
      initialize();
    }, 1000);
  }
}
