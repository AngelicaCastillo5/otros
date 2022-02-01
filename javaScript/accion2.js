const botonAvanzar = document.querySelectorAll(".siguiente");
const botonVolver = document.querySelectorAll(".volver");

botonAvanzar.forEach(function(i, index) {
    i.addEventListener("click", function() {
        const claseAccordion = document.querySelectorAll(".accordion");
        console.log("index: " + index);
        var panel = claseAccordion[index + 1].nextElementSibling;
        var avanza = document.getElementsByClassName("siguiente")[index];
        console.log("cuando avanzo");
        console.log(avanza);
        var vuelve = document.getElementsByClassName("volver")[index];
        console.log("boton volver, cuando avanzo");
        console.log(vuelve);
        panel.style.display = "none";

        if (panel.style.display === "none") {
            panel.style.display = "block";
            avanza.style.display = "none";
            vuelve.style.display = "none";
        }
    });
});

botonVolver.forEach(function(i, index) {
    i.addEventListener("click", function() {
        const claseAccordion = document.querySelectorAll(".accordion");
        console.log("index: " + index);
        if (index >= 1) {
            var panel = claseAccordion[index].nextElementSibling;
            var avanza = document.getElementsByClassName("siguiente")[index - 1];
            var vuelve = document.getElementsByClassName("volver")[index - 1];
            if (panel.style.display === "block") {
                panel.style.display = "none";
                avanza.style.display = "block";
                vuelve.style.display = "block";
            }

        }

    });
});