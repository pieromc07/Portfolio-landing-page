$(document).ready(function () {


    //TODO:  animation scroll
    window.onscroll = function () {

        //* navigation fixed
        let scroll = window.scrollY;
        let nav = $('.navigation').height();

        if (scroll > nav) {

            $('#nav').addClass('fixed-top');
            $('.navigation').removeClass('nav');

        } else if (scroll == 0) {

            $('#nav').removeClass('fixed-top');
            $('.navigation').addClass('nav');
        }


        //* element show animated
        let elementShowRight = document.querySelectorAll('.showRight');
        let elementShowLeft = document.querySelectorAll('.showLeft');
        let elementScroll = document.documentElement.scrollTop;

        for (let i = 0; i < elementShowRight.length; i++) {
            const elementHeight = elementShowRight[i].offsetTop;
            if (elementHeight - 450 < elementScroll) {
                elementShowRight[i].classList.add('showRightAnimated')
            }

        }

        for (let j = 0; j < elementShowLeft.length; j++) {
            const elementHeight = elementShowLeft[j].offsetTop;

            if (elementHeight - 450 < elementScroll) {
                elementShowLeft[j].classList.add('showLeftAnimated')
            }
        }

        //*  skills progress line
        let skillsHight = $('skills__content__technical').height();
        var offset = $('.skills__content__technical').offset();
        var top = offset.top;
        var left = offset.left;

        let progress = document.querySelectorAll('.progressbar-line');

        if (top - 450 < elementScroll) {
            for (let k = 0; k < progress.length; k++) {
                const element = progress[k].firstElementChild;

                element.classList.add('progressLineAnimated');

            }
        }

        var offHome = $('#home').offset();
        var topHome = offHome.top;
        var offSkills = $('#skills').offset();
        var topSkills = offSkills.top;
        var offPortfolio = $('#portfolio').offset();
        var topPortfolio = offPortfolio.top;
        var offContact = $('#contact').offset();
        var topContact = offContact.top;
        var offAbout = $('#aboutme').offset();
        var topAbout = offAbout.top;


        if (scroll >= 0 && scroll < (topSkills - 250)) {

            $('#linkHome').addClass('active');
        } else {
            $('#linkHome').removeClass('active');
        }

        if (scroll > (topSkills - 249) && scroll < (topPortfolio - 250)) {

            $('#linkSkills').addClass('active');

        } else {
            $('#linkSkills').removeClass('active');

        }

        if (scroll > (topPortfolio - 249) && scroll < (topContact - 250)) {

            $('#linkPortfolio').addClass('active');
        } else {
            $('#linkPortfolio').removeClass('active');
        }

        if (scroll > (topContact - 249)) {

            $('#linkContact').addClass('active');
        } else {
            $('#linkContact').removeClass('active');
        }


        if (scroll < topSkills - 200) {
            $('#button-up').removeClass('visibility');
            $('#button-up').addClass('hidden');
        } else {
            $('#button-up').addClass('visibility');
            $('#button-up').removeClass('hidden');
        }

        if (scroll > topAbout - 200) {
            $('#linkPortfolio').addClass('active');
        } else {
            $('#linkContact').removeClass('active');
        }

    };


    //TODO: Up page
    const getTop = () => document.documentElement.scrollTop || document.body.scrollTop

    const up = () => {

        if (getTop() > 0) {
            requestAnimationFrame(up)
            scrollTo(0, getTop() - (getTop() / 30))
        }
    }

    const buttonUp = document.getElementById('button-up')
    buttonUp.addEventListener('click', up)
    let contador = 1
    $('#toggle-bar').click(function (e) {
        e.preventDefault();
        if (contador == 1) {
            $('#collapse').animate({
                left: '0'
            })
            $('#list-menu').attr('style', 'display:none')
            contador = 0 
        } else {
            contador=1
            $('#collapse').animate({
                left: '-100%'
            })
        }
    });

});