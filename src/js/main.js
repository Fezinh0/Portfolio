// Dark Light
function clique() {
    var dark = document.body;
    dark.classList.toggle("darkmode");
}

// menu lateral
function moverMenu(distMenu, distBody) {
    $('.menu').animate({
        right: distMenu + "px"
    }, 450);

    $('body').animate({
        right: distBody + "px"
    }, 200);
}

$(document).ready(() => {
    $('.icon-menu').click(() => { moverMenu(0, 350) });
    $('.icon-close').click(() => { moverMenu(-350, 0) });
});

