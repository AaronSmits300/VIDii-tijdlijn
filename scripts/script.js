// JavaScript Document
console.log("Howdy!");
//albums
var gorillazButton = document.querySelector("#album1");
var demonButton = document.querySelector("#album2");
var plasticButton = document.querySelector("#album3");
var fallButton = document.querySelector("#album4");
var humanzButton = document.querySelector("#album5");
var nowButton = document.querySelector("#album6");
var songButton = document.querySelector("#album7");

//navigatie
var terugButtons = document.querySelectorAll(".sluitknop");
var setTimeout;

//videos
var videoG = document.querySelector("#gorillazvideo");
var videoD = document.querySelector("#demonvideo"); 
var videoP = document.querySelector("#plasticvideo"); 
var videoF = document.querySelector("#fallvideo");
var videoH = document.querySelector("#humanzvideo"); 
var videoN = document.querySelector("#nowvideo"); 
var videoS = document.querySelector("#songvideo"); 


//functies
function naargorillaz() {
    document.body.classList.add("gorillazovergang");
    setTimeout(() => {
        videoG.play()
        }, 5000);
}

function naardemon() {
    document.body.classList.add("demonovergang");
    setTimeout(() => {
        videoD.play()
        }, 5000);
}

function naarplastic() {
    document.body.classList.add("plasticovergang");
    setTimeout(() => {
        videoP.play()
        }, 5000);
}

function naarfall() {
    document.body.classList.add("fallovergang");
    setTimeout(() => {
        videoF.play()
        }, 5000);
}

function naarhumanz() {
    document.body.classList.add("humanzovergang");
    setTimeout(() => {
        videoH.play()
        }, 5000);
}

function naarnow() {
    document.body.classList.add("nowovergang");
    setTimeout(() => {
        videoN.play()
        }, 5000);
}

function naarsong() {
    document.body.classList.add("songovergang");
    setTimeout(() => {
        videoS.play()
        }, 5000);
}

function gaterug() {
    console.log("ga terug");
    document.body.classList.remove("gorillazovergang", "demonovergang", "plasticovergang","fallovergang","humanzovergang","nowovergang","songovergang");
    videoG.pause();videoG.currentTime = 0;
    videoD.pause();videoD.currentTime = 0;
    videoP.pause();videoP.currentTime = 0;
    videoF.pause();videoF.currentTime = 0;
    videoH.pause();videoH.currentTime = 0;
    videoN.pause();videoN.currentTime = 0;
    videoS.pause();videoS.currentTime = 0;

}

//eventlisteners
gorillazButton.addEventListener('click', naargorillaz);
demonButton.addEventListener('click', naardemon);
plasticButton.addEventListener('click', naarplastic);
fallButton.addEventListener('click', naarfall);
humanzButton.addEventListener('click', naarhumanz);
nowButton.addEventListener('click', naarnow);
songButton.addEventListener('click', naarsong);


terugButtons.forEach(terugButton => {
    terugButton.addEventListener('click', gaterug);
});




