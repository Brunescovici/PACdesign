

fetch("actors.json")
    .then(response => response.json())
    .then(data => workData(data))

function workData(data) {
    data.forEach(element => {
        const Template = document.querySelector("#template").content;
        const Clone = Template.cloneNode(true);
        Clone.querySelector("h1").innerHTML = element.fullname;
        if(element.movie == "Pulp Fiction")
            Clone.querySelector("h1").style.color = "red";
        else if(element.movie == "Fight Club")
            Clone.querySelector("h1").style.color = "blue";
        else if(element.movie == "Goodfellas")
            Clone.querySelector("h1").style.color = "green";
        else if(element.movie == "Inception")
            Clone.querySelector("h1").style.color = "black";
        Clone.querySelector("h2").innerHTML = element.movie;
        const parentCont = document.querySelector("#name_cont");
        parentCont.appendChild(Clone);
    });
    setEvents();
}


function setEvents() {
    document.querySelectorAll("article").forEach(actorName => {
        actorName.addEventListener('click', function(){
            document.querySelector("#overlay_bg").style.display = "block";
            document.querySelector("#overlay h1").textContent = "Name: " + actorName.querySelector("h1").textContent;
            document.querySelector("#overlay h2").textContent = "Movie: " + actorName.querySelector("h2").textContent;
        });
    })
    document.querySelector("#overlay_bg").addEventListener('click', closeOverlay);
    document.querySelectorAll("nav ul li").forEach(movieName => {
        movieName.addEventListener('click', function(){
            document.querySelectorAll("article").forEach(actors => {
                if(movieName.textContent == "All")
                    actors.style.display = "block";
                else if(movieName.textContent != actors.querySelector("h2").textContent)
                    actors.style.display = "none";
                else
                    actors.style.display = "block";
            })
        })
    })
}

function closeOverlay() {
    document.querySelector("#overlay_bg").style.display = "none";
}
