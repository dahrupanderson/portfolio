window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
    //registerer klik på menu knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    if (erSkjult == true) {
        //menuen er nu skjult  - ændr menuknap til ☰
        document.querySelector("#menuknap").textContent = "☰";

    } else { //menuen er nu vist -ændr menuknap til X
        document.querySelector("#menuknap").textContent = "X";

    }
}
