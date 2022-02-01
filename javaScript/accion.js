const acc = document.querySelectorAll(".siguiente");
const acc2 = document.querySelectorAll(".accordion");
console.log(acc);
//console.log(acc2);
var i;
acc.forEach(function(i, index) {
    i.addEventListener("click", function() {
        var acordion = document.querySelectorAll("#acordion");
        console.log(acordion);
        var acor = document.getElementById("acordion");
        var panel = acordion[index].nextElementSibling;
        var avanza = document.getElementById("botonA");
        var vuelve = document.getElementById("botonB");
        panel.style.display = "none";

        console.log("index: " + index);
        console.log(acordion)
            //console.log(panel);
            //var panel = document.getElementsByClassName("acordion");
        if (panel.style.display === "none") {
            panel.style.display = "block";
            avanza.style.display = "none";
            vuelve.style.display = "none";
        }

    });

});