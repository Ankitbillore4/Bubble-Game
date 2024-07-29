

function Bubble() {
    var clutter = ""
    for (var i = 1; i <= 160; i++) {

        var rn = Math.floor(Math.random() * 10)
        clutter += ` <div id="bubble">${rn}</div>`
    }
    document.querySelector("#pcenter").innerHTML = clutter
}

var Timmer = 60;
function runTimmer(){
setInterval(function(){
 Timmer--
 document.querySelector("#timmer").textContent=Timmer
},1000)
}
runTimmer()


Bubble()