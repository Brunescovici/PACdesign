//BING MAPS API FOR THE FOOTER MAP
function getMap() {
    let bingMapAPIKey = "Al6SoHSRTUV0XDI6ud8eUhV16dRf1ypDm00yEvh8lFvdEB9cq8y1KtrbdSE8XQcG";

    let storeLocation = new Microsoft.Maps.Location(55.6862509, 12.5353525);

    bingMap = new Microsoft.Maps.Map('#map', {
        credentials: bingMapAPIKey,
        center: storeLocation,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 14
    });

    let pin = new Microsoft.Maps.Pushpin(storeLocation, {
        title: 'Tjubang Sko',
        text: 'O',
        color: '#FFA69E',
    });

    bingMap.entities.push(pin);
}

function toggleMap() {
    if (show == 1) {
        document.getElementById("map").style.display = "none";
        show = 0;
    } else {
        document.getElementById("map").style.display = "block";
        show = 1;
    }
}

//CAROUSEL FLICKITY
var carousel = document.querySelector('.carousel');

//object from the flickity api
var flkty = new Flickity(carousel, {
    imagesLoaded: true,
    percentPosition: false,
});

//makes it start from the second image
flkty.select(1);

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
//all this is for the parallax effect =
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

//parallax effect 
flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var img = imgs[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        img.style[transformProp] = 'translateX(' + x + 'px)';
    });
});
