window.addEventListener('load', function () {
    'use strict'

    setTimeout(function () {
        const preloader = document.querySelector('.preloader');

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 500)

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
    const logoTop = document.querySelector('.top-logo');
    const logoBottom = document.querySelector('.bottom-logo');

    const headerButton = document.querySelector('.header__content-inner-button');

    headerButton.addEventListener('click', event => {
        event.preventDefault();

        scrollTo({
            top: 3200,
            behavior: 'smooth'
        });

    });



    logoTop.onclick = function () {
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    logoBottom.onclick = function () {
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };



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

        });
    };

    // forms ------------------------
    let forms = document.querySelector('.feedback__form');
    let textarea = document.querySelector('.feedback__form-textarea');

    forms.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('feedback__form-input')) {
            target.style.border = '1px solid #fc5f45';
            console.log(target.placeholder.style)
        }
    });



    // target.style.border = '1px solid #fc5f45';

    // Our Team ------------------------------------------------------------

    let teamAbout = document.querySelectorAll('.team__about');
    let team = document.querySelector('.team__inner-items');
    let teamItem = team.querySelectorAll('.team__inner-item');
    let showIndex = 0;

    showAbout(showIndex);

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
            if (target && target === teamItem[i]) {
                currentAbout(i);

            }
        }

    });


    // video -----------------------------------------------------------------------------
    const video = document.querySelector('.video');
    const videoButton = document.querySelector('.video__inner-button');
    let videoPlayer = document.querySelector('.video__player');


    videoButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (video.style.height === '1000px') {
            video.style.height = '500px';
            videoPlayer.style.display = 'none';
            videoButton.classList.remove('video__inner-button-close');
            videoButton.classList.add('video__inner-button-open');
        } else {
            video.style.height = '1000px';
            videoPlayer.style.display = 'block';
            videoButton.classList.toggle('video__inner-button-open');
            videoButton.classList.toggle('video__inner-button-close');
        }
    });

    // Modal -----------------------------------------------------------
    const modal = document.querySelector('.overlay');
    const modalClose = document.querySelector('.close');
    let modalButton = document.querySelector('.modal__button')
    modalButton.addEventListener('click',  () => {
        modal.style.display = 'block';
        document.body.prepend(modal);
        document.body.style.overflow = 'hidden';
    });
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    })
 



    // Animate On Scroll Library (https://michalsnik.github.io/aos/)--------------------------

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });



});