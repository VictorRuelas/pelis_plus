$(document).ready(function () {
    const sliders = [...document.querySelectorAll('.banner')];

    $('.next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });

    $('.next').mouseover(function () {
        $(this).css('transform', 'scale(1.3,1.3)');
    });
    $('.next').mouseout(function () {
        $(this).css('transform', 'scale(1,1)');
    });
    $('.prev').mouseover(function () {
        $(this).css('transform', 'scale(1.3,1.3)');
    });
    $('.prev').mouseout(function () {
        $(this).css('transform', 'scale(1,1)');
    });



    $('.card').mouseover(function () {
        $(this).css('background-color', '#820000');
        $(this).find('.active2').css("display", "none");
        $(this).find('.play').css('display', 'flex');
        $(this).find('.description').css("display", "none");
        $(this).find('.trailer').css("display", "flex");
        $(this).find('.trailer').css('align-items', 'center');
    });

    $('.card').mouseout(function () {
        $(this).css('background-color', 'beige');
        $(this).find('.active2').css("display", "flex");
        $(this).find('.play').css('display', 'none');
        $(this).find('.description').css("display", "flex");
        $(this).find('.trailer').css("display", "none");
        $(this).find('.trailer').css('align-items', 'flex-start');
        $(this).find('.trailer').css('transform', 'scale(1.3,1.3)');
    });

    document.getElementById("nombre").addEventListener("keyup", able);
    document.getElementById("correo").addEventListener("keyup", able);
    document.getElementById("mensaje").addEventListener("keyup", able);

    
});

// JavaScript para formulario de Contacto
function able() {
    $(document).ready(function () {
        let n = document.getElementById("nombre").value;
        let c = document.getElementById("correo").value;
        let m = document.getElementById("mensaje").value;

        if (n == "" || c == "" || m == ""){
            document.getElementById("enviar").disabled = true;

        } else {
            document.getElementById("enviar").disabled = false;
            console.log(n);
            console.log(c);
            console.log(m);
        }
    });

}