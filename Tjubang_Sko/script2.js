let show = 1;

document.querySelector(".checkbtn").addEventListener("click", toggleMap);
document.querySelector(".checkbtn2").addEventListener("click", toggleMap);
document.querySelector(".button").addEventListener("click", openOverlay);
document.querySelector(".closeOverlay").addEventListener("click", closeOverlay);

function openOverlay() {
    document.querySelector(".overlay").style.display = "block";
}

function closeOverlay() {
    document.querySelector(".overlay").style.display = "none";
}

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