const interna = document.querySelectorAll(".interna");
console.log(interna);
var iteracion = 0;

function mostrar() {
    interna[0].style.display = "block";
    interna = +1;
    interna.forEach(interna => {

        if (interna === 0) {
            console.log("pase por cero");
            interna.style.display = "block";
        } else {
            console.log("pase por distinto a cero");
            interna.style.display = "none";
        }

    })

}