/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: map.js
   =========================== */

var gmarkers1 = [];
//mapPointsData Object
var mapPointsData = [{
    'num': '1',
    'name': 'American Airlines Arena (AAA)',
    'lat': '25.7814014',
    'lng': '-80.1891577',
    'color': '#fcdf5d',
    'category': 'attractions',
    'categoryHeader': 'Attractions'
  },
  {
    'num': '2',
    'name': 'MiamiDade College',
    'lat': '25.7780525',
    'lng': '-80.1927195',
    'color': '#fcdf5d',
    'category': 'attractions',
    'categoryHeader': 'Attractions'
  },
  {
    'num': '3',
    'name': 'Bayfront Park',
    'lat': '25.7753345',
    'lng': '-80.1881919',
    'color': '#fcdf5d',
    'category': 'attractions',
    'categoryHeader': 'Attractions'
  },
  {
    'num': '4',
    'name': 'Perez Art Museum (PAMM)',
    'lat': '25.7753342',
    'lng': '-80.194758',
    'color': '#fcdf5d',
    'category': 'attractions',
    'categoryHeader': 'Attractions'
  },
  {
    'num': '12',
    'name': 'DoubleTree by Hilton Grand Hotel Biscayne Bay',
    'lat': '25.7915646',
    'lng': '-80.1888243',
    'color': '#fcdf5d',
    'category': 'hotels',
    'categoryHeader': 'Hotels'
  },
  {
    'num': '13',
    'name': 'Miami Marriott Biscayne Bay',
    'lat': '25.79095',
    'lng': '-80.1884297',
    'color': '#fcdf5d',
    'category': 'hotels',
    'categoryHeader': 'Hotels'
  },
  {
    'num': '64',
    'name': ' Quinto La Huella',
    'lat': '25.766639',
    'lng': '-80.1947387',
    'color': '#fcdf5d',
    'category': 'restaurants',
    'categoryHeader': 'Restaurants'
  },
  {
    'num': '65',
    'name': ' Pawn Broker',
    'lat': '25.773637',
    'lng': '-80.1935976',
    'color': '#fcdf5d',
    'category': 'restaurants',
    'categoryHeader': 'Restaurants'
  },

  {
    'num': '68',
    'name': 'Brickell City Center',
    'lat': '25.7671674',
    'lng': '-80.195276',
    'color': '#2f8aed',
    'category': 'retail',
    'categoryHeader': 'Retail'
  },
  {
    'num': '69',
    'name': 'West Elm',
    'lat': '25.8077738',
    'lng': '-80.1969336',
    'color': '#2f8aed',
    'category': 'retail',
    'categoryHeader': 'Retail'
  },

  {
    'num': '87',
    'name': 'Brickell City Centre',
    'lat': '25.766888',
    'lng': '-80.1943097',
    'color': '#14b791',
    'category': 'transportation',
    'categoryHeader': 'Transportation'
  },

  {
    'num': '90',
    'name': 'Financial District Metromover Station',
    'lat': '25.760381',
    'lng': '-80.1950697',
    'color': '#14b794',
    'category': 'transportation',
    'categoryHeader': 'Transportation'
  }
];

// List Map Items

ListMapPoints('attractions');
ListMapPoints('hotels');
ListMapPoints('restaurants');
ListMapPoints('retail');
ListMapPoints('transportation');
// ListMapPoints('allList');

/**
 * Function to init map
 */

function initialize() {
  var center = new google.maps.LatLng(25.7814014, -80.1891577);

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: center,
     mapTypeId: 'roadmap',
     disableDefaultUI: true
  });


  var mainMarkerImg = new google.maps.MarkerImage(
    'http://realestatearts.org/bg/100Biscayne-Web/assets/images/map-marker-biscayne.svg',
    null, null, null,
    new google.maps.Size(40, 40)
  );
  var mainMarker = new google.maps.Marker({
    position: {
      lat: 25.7758125,
      lng: -80.1904363
    },
    map: map,
    icon: mainMarkerImg,
    zIndex: 1
  });

  for (i = 0; i < mapPointsData.length; i++) {
    addMarker(i, mapPointsData[i]);
  }
  //filterMarkers("attractions");

}

/**
 * Function to add marker to map
 */

function addMarker(i, marker) {
  var category = marker.category;
  var title = marker.name;
  var pos = new google.maps.LatLng(marker.lat, marker.lng);
  var content = '<div class="copy"><div class="inner">' + marker.name + '</div></div>';
  var bgColor = marker.color;
  var label = (i + 1).toString();

  var mapMarkerImage = new google.maps.MarkerImage(
    'http://realestatearts.org/bg/100Biscayne-Web/assets/images/map-marker-' + category + '.svg',
    null, null, new google.maps.Point(8, 40),
    new google.maps.Size(25, 25)
  );
  mapMarkerImage.url += "#" + label;

  var infoClass = category + "Box box" + label;
  var infoClass2 = "box" + label;

  // var myOptions = {
  //   content: '',
  //   disableAutoPan: false,
  //   maxWidth: 150,
  //   pixelOffset: new google.maps.Size(-55, -52),
  //   zIndex: null,
  //   boxClass: infoClass + " " + label,
  //   boxStyle: {},
  //   closeBoxMargin: "0",
  //   closeBoxURL: "",
  //   infoBoxClearance: new google.maps.Size(1, 1),
  //   isHidden: false,
  //   pane: "floatPane",
  //   enableEventPropagation: false,
  //   alignBottom: true
  // };
  //
  // ib = new InfoBox(myOptions);

  ib = new InfoBox({
    content: "",
    disableAutoPan: false,
    maxWidth: 150,
    pixelOffset: new google.maps.Size(-55, -52),
    boxClass: "bInfoBox " + infoClass,
    boxStyle: {
      background: bgColor
    },
    closeBoxMargin: "0",
    closeBoxURL: "",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false,
    alignBottom: true
  });

  // ib.setContent('<div data-hover="' + p + "-" + (e + 1) + '" class="' + p + " siteDot " + t + '"><span class="counter replica">' + (e + 1) + '</span><span class="name"><span class="inner text-overflow">' + i + "</span></span></div>")
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
      text: label,
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
  //console.log(marker1.uniqueSrc);

  google.maps.event.addListener(marker1, "mouseover", function() {
    // ib.close();
    // ib.setContent(this.copy);
    // ib.open(map, this);
    $("." + infoClass2).css({
      'opacity': '1',
      'z-index': '9',
      'pointer-events': 'all'
    })
  });

  google.maps.event.addListener(marker1, "mouseout", function() {
    //ib.close();
    $("." + infoClass2).css({
      'opacity': '0',
      'z-index': '0',
      'pointer-events': 'none'
    })
  });

  // Marker click listener
  // google.maps.event.addListener(marker1, 'mouseover', (function(marker1, content) {
  //   return function() {
  //     console.log('Gmarker 1 gets pushed ' + marker1.category);
  //     infowindow.setContent(content);
  //     infowindow.open(map, marker1);
  //     //map.panTo(this.getPosition());
  //     //map.setZoom(14);
  //   }
  // })(marker1, content));
}

/**
 * Function to filter markers by category
 */

filterMarkers = function(category) {
  for (i = 0; i < mapPointsData.length; i++) {
    marker = gmarkers1[i];
    // If is same category or category not picked
    if (marker.category == category || category.length === 0) {
      marker.setVisible(true);
      //console.log(marker.category + " cat - " + category);
    }
    // Categories don't match
    else {
      marker.setVisible(false);
    }
  }
}

//init Map
window.onload = function() {
  if ($('body').hasClass('about')) {
    setTimeout(function() {
      initialize();
    }, 1000);
  }
}
// if ($('body').hasClass('home')) {
//   google.maps.event.addDomListener(window, 'load', initialize);
// }


$('.mapLists ol').removeClass('activeList');
// $('.mapLists ol li').stop().slideUp(300);
$('#attractionsList').addClass('activeList');
// $('#attractionsList li').stop().slideDown('slow');

$('.mapLists ol').click(function(e) {
  e.preventDefault();

  if($(this).hasClass('activeList')){
    $('.mapLists ol').removeClass('activeList');
  }else{
    // $('.mapLists ol li').stop().slideUp(500);
    $('.mapLists ol').removeClass('activeList');

    // $(this).find('li').stop().slideDown(500);
    $(this).addClass('activeList');
  }

  var thisCategory = $(this).data('category');
  filterMarkers(thisCategory);

});



$('#neighMap .mapLists ol li').mouseover(function() {
  var thisBoxID = $(this).data('boxid');
  $("." + thisBoxID).css({
    'opacity': '1'
  })
}).mouseout(function() {
  $(".bInfoBox").css({
    'opacity': '0'
  })
});


function ListMapPoints(categoryName) {
  var mapPointID = '',
    mapPointName = '',
    mapPointCategory = '',
    mapPointHeader = '',
    mapPointItems = "",
    mapPointsList = "";

  mapPointsData.map(function(pointData) {
    mapPointID = pointData.num,
      mapPointName = pointData.name,
      mapPointColor = pointData.color,
      mapPointCategory = pointData.category,
      mapPointHeader = pointData.categoryHeader;

    if (mapPointCategory === categoryName) {
      mapPointItems = "";
      mapPointItems += '<li data-boxid="' + 'box' + mapPointID + '">' + mapPointName + '</li> ';

      mapPointsList += mapPointItems;
    }
  });
  mapPointsList = "<h3>" + categoryName + "</h3>" + mapPointsList;
  //$('#' + categoryName + 'List').html(mapPointsList);
  $('*[data-category="'+categoryName+'"]').html(mapPointsList);
}
