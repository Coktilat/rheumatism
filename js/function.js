$(window).on('load', function(){
  $(".se-pre-con").fadeOut("slow");;
});
// Cache selectors
var lastId,
    topMenu = $(".top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var headers = document.getElementById("index");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    headers.classList.add("stickys");
  } else {
    header.classList.remove("sticky");
    headers.classList.remove("stickys");
  }
}

$(document).ready(function() {
  var nav = $('#share');
  if (nav.length) {
    $("#share").jsSocials({
      showLabel: false,
      showCount: false,
        shares: ["twitter", "facebook", "googleplus"]
    });
  }

    $('.owl-header').owlCarousel({
        rtl:true,
        rewindNav : true, 
        pagination : true,
        autoplay:true,
        nav:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        loop:true,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
});
$(document).ready(function() {
    var owl = $('.owl-supports').owlCarousel({
        rtl:true,
        rewindNav : true, 
        pagination : true,
        autoplay:true,
        dots : false,
        nav:true,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        loop:true,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeInDown',
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    owl.on('changed.owl.carousel', function(e) {
      var mapx = $('.owl-supports').find('.owl-item.active').find('.main_item_owl_supports').data('x');
      var mapy = $('.owl-supports').find('.owl-item.active').find('.main_item_owl_supports').data('y');
      console.log(mapx +' _ '+ mapy);
      // console.log();
      initMap(mapx , mapy);
    });
});

    var map;
      function initMap(mapx , mapy) {
        // console.log(mapx);
        if(mapx == null){
          mapx = '1';
          mapy = '1';
        }
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: new google.maps.LatLng(mapx, mapy),
          mapTypeId: 'roadmap',
          styles : [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
        });
        
 
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          info: {
            icon: 'https://novo2.rhp.pt/map.png'
          }
        };
 
        var features = [
          {
            position: new google.maps.LatLng(mapx, mapy),
            type: 'info'
          }
        ];
 
        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            // icon: icons[feature.type].icon,
            map: map
          });
        });
      }
$(document).ready(function() {
  $('.list_aboutus li a').click( function() {
    var id = $(this).data('id');
    if(id == '1' || id == '2' || id == '3'){
      $('.list_aboutus').find('.active').removeClass('active');
      $(this).addClass('active');
      $('.content_list_aboutus').find('.item_cla').removeClass('active').hide();
      $('.content_list_aboutus').find('#item_cla_'+id).show();
    }
  });
});
$(document).ready(function() {
  $('.list_albumes li a').click( function() {
    var id = $(this).data('id');
    $('.list_albumes').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.content_albumes').find('.item_content_albumes').removeClass('active').hide();
    $('.content_albumes').find('#list_albumes_'+id).show();
  });
});
$(document).ready(function() {
  $('.list_projects li a').click( function() {
    var id = $(this).data('id');
    $('.list_projects').find('.active').removeClass('active');
    $(this).addClass('active');
    $('.projects').find('.contswmes').removeClass('active').hide();
    $('.projects').find('#contswmes_'+id).show();
  });
});

var a = 0;
$(window).scroll(function() {
  var nav = $('#abut');
  if (nav.length) {
      var oTop = $('#abut').offset().top - window.innerHeight;
  }
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.Count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});

$(document).ready(function() {
    $('.owls_news').owlCarousel({
    rtl:true,
    loop:true,
    margin:30,
    nav:true,
    rewindNav : true, 
    dots : false,
    pagination : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        }
    },
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });

    $('.owl-safer').owlCarousel({
    rtl:true,
    loop:true,
    margin:30,
    nav:true,
    rewindNav : false, 
    pagination : false,
    dots : false,
    responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          }
      },
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ]
    })
  });


  $(".btn-menu").click(function() {
    $(".menu-side").css({'left':'0'});
    $(".btn-menu-close").css({'left':'10px'});
    $(".btn-menu").css({'display':'none'});
    $(".back-menu").css({'display':'block'});
});
function closeMenu() {
  $(".menu-side").css({'left':'-350px'});
  $(".btn-menu-close").css({'left':'-10px'});
  $(".btn-menu").css({'display':'block'});
  $(".back-menu").css({'display':'none'});
}
$(".btn-menu-close").click(function() {
  closeMenu();
}); 
$(".back-menu").click(function() {
  closeMenu();
}); 

$( ".menu-sidebar li:not(.nohide)" ).click(function() {
  $( this ).children('.submen').toggle( "fast", function() {});
  closeMenu();
});
$( ".menu-sidebar li.nohide" ).click(function() {
  $( this ).children('.submen').toggle( "fast", function() {});
});