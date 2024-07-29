
var Timmer = 10;
var Score = 0;
var Hitrn = 0;


function increaseScore(){
    Score += 10;
    document.querySelector("#scoreval").textContent=Score 
}

function getHit() {
    Hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = Hitrn
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
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
            

        }
    }, 1000)
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
var Clickednum = Number(dets.target.textContent);
if(Clickednum===Hitrn){
    increaseScore()
    Bubble()
    getHit()
}
})


runTimmer()

Bubble()

getHit()


