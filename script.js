
var Timmer = 60;
var Score = 0;


function increaseScore(){
    Score += 10;
    document.querySelector("#scoreval").textContent=Score 
}

function getHit() {
    var rn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = rn
}

function Bubble() {
    var clutter = ""
    for (var i = 1; i <= 160; i++) {

        var rn = Math.floor(Math.random() * 10)
        clutter += ` <div id="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

function runTimmer() {
    var timerint = setInterval(function () {
        if (Timmer > 0) {
            Timmer--
            document.querySelector("#timmer").textContent = Timmer
        } else {
            clearInterval(timerint)

        }
    }, 1000)
}

runTimmer()

Bubble()

getHit()


