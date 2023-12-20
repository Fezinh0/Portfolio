// Dark Light
function clique() {
    var dark = document.body;
    dark.classList.toggle("darkmode");
}

// girar raio
var giro = document.getElementById('giro');
function Click() {
    giro.style.transform = "rotateX(10deg) rotateY(720deg)"
}

// menu lateral
function moverMenu(distMenu, distBody) {
    $('.menu').animate({
        left: distMenu + "px"
    }, 450);

    $('body').animate({
        left: distBody + "px"
    }, 200);
}

$(document).ready(() => {
    $('.icon-menu').click(() => { moverMenu(0, 350) });
    $('.icon-close').click(() => { moverMenu(-350, 0) });
});

