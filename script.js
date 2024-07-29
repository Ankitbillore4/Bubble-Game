

var clutter = ""
for(var i = 1 ; i<=160 ; i++ ){

var rn= Math.floor(Math.random()*10 )
    clutter +=` <div id="bubble">${rn}</div>`
}
document.querySelector("#pcenter").innerHTML=clutter