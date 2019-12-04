window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let topNav = document.querySelector('.header__top');

    topNav.addEventListener('mouseover', function (event) {
        let target = event.target;
        if (target.tagName === 'A') {
            target.classList.add('hovers');
        }
    });
    topNav.addEventListener('mouseout', function (event) {
        let target = event.target;
        if (target.tagName === 'A') {
            target.classList.remove('hovers');
        }
    });



    // slider --------------------------------------------------------------
    let sliderItem = document.querySelectorAll('.testimonials__slider-content');
    let sliderPaddingItem = document.querySelectorAll('.slider_paddings-item');
    let sliderPaddings = document.querySelector('.slider_paddings');
    let slideIndex = 0;

    showSlides(slideIndex);

    function showSlides(slideIndex) {

        sliderItem.forEach((item) => item.style.display = 'none');
        sliderPaddingItem.forEach(item => item.classList.remove('active_slide'));

        sliderItem[slideIndex].style.display = 'block';
        sliderPaddingItem[slideIndex].classList.add('active_slide');
    };

    function currentSlide(n) {
        showSlides(slideIndex = n);
    };

    sliderPaddings.addEventListener('click', event => {
        let target = event.target;

        for (let i = 0; i < sliderPaddingItem.length; i++) {

            if (target.classList.contains('slider_paddings-item') && event.target === sliderPaddingItem[i]) {
                currentSlide(i)
            }
        }

    });

    sliderPaddings.addEventListener('mouseover', event => {
        let target = event.target;
        if (target.classList.contains('slider_paddings-item')) {
            target.classList.add('slider_paddings-item-active');
        }
    });

    sliderPaddings.addEventListener('mouseout', event => {
        let target = event.target;
        if (target.classList.contains('slider_paddings-item-active')) {
            target.classList.remove('slider_paddings-item-active');
        }
    });

    // anchors -----------------------------------------------------------

    let nav = document.querySelector('.header__top-nav');
    let navItem = nav.querySelectorAll('a');

    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener('click', event => {
            event.preventDefault();
            if (event.target === navItem[i]) {
                let anch = document.querySelector(navItem[i].getAttribute('href'));
                anch.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }

        })
    };

    // forms ------------------------
    let forms = document.querySelector('.feedback__form');
    let formsItem = forms.querySelectorAll('.feedback__form-input');

    forms.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('feedback__form-input')) {
            event.target.value = '';
        };

        target.addEventListener('blur', () => {
            if (target.value === '') {
                target.style.color = 'red';
                target.style.background = 'black';
                target.style.fontSize = '16px';
                target.value = 'ТЫ КУДА?'
            } else {
                target.style.background = '';
                target.style.fontSize = '';
                target.style.color = '';
            }
        });
    });

    // Our Team ------------------------------------------------------------

    let teamAbout = document.querySelectorAll('.team__about');
    let team = document.querySelector('.team__inner-items');
    let teamItem = team.querySelectorAll('.team__inner-item');

    let showIndex = 0;

    const color = {
        0: 'red',
        1: 'black',
        '2': 'green',
        '3': 'yellow'
    };

    showAbout(showIndex, color);


    function showAbout(showIndex) {

        teamItem.forEach(value => value.classList.remove('team__active-item'));
        teamAbout.forEach(value => value.style.display = 'none');

        teamItem[showIndex].classList.add('team__active-item');
        teamAbout[showIndex].style.display = '';
    };

    function currentAbout(n) {
        showAbout(showIndex = n);
    }

    team.addEventListener('mouseover', event => {
        let target = event.target.closest('.team__inner-item');

        for (let i = 0; i < teamItem.length; i++) {
            if (target && target === teamItem[i]){
                currentAbout(i);
                
            }
        }
        
    })





});