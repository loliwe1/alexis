(function () {
    'use strict'

    // Preloader-----------------------------------------------------
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        const loader = document.querySelector('.loader');

        if (document.documentElement.clientWidth < 1200) {
            preloader.style.display = 'none';
            loader.style.left = '42%';
            loader.style.top = '42%';

        } else if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }



        // Animate On Scroll Library (https://michalsnik.github.io/aos/)--------------------------
        AOS.init({
            // Global settings:
            disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
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
    // Burger menu 

    const burger = document.querySelector('.header__burger');
    const navigation = document.querySelector('.header__top-nav');

    burger.addEventListener('click', () => {
        if (navigation.style.display === 'block') {
            navigation.style.display = 'none';
        } else {
            navigation.style.display = 'block';
        }
    });


    // Top navigation --------------------------------------------

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

    // anchors -----------------------------------------------------------

    let nav = document.querySelector('.header__top-nav');
    let navItem = nav.querySelectorAll('a');
    const logoTop = document.querySelector('.top-logo');
    const logoBottom = document.querySelector('.bottom-logo');
    const headerButton = document.querySelector('.header__content-inner-button');

    nav.addEventListener('click', event => {
        let target = event.target;
        for (let i = 0; i < navItem.length; i++) {
            if (target.tagName === 'A') {
                navItem[i].style.color = '#272727';
            }
            if (target === navItem[i]) {
                navItem[i].style.color = '#fc5f45';
            }
        }
    });

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

    // forms ------------------------
    let form = document.forms.feedback;

    form.addEventListener('focusin', event => {
        let target = event.target;

        for (let i = 0; i < form.elements.length; i++) {
            if (target === form[i]) {
                target.style.border = '1px solid #fc5f45';
            }
        }
    });

    form.addEventListener('focusout', event => {
        let target = event.target;

        for (let i = 0; i < form.elements.length; i++) {
            if (target === form[i]) {
                target.style.border = '1px solid #efefef';
            }
        }
    });

    // Our Team ------------------------------------------------------------

    let teamAbout = document.querySelectorAll('.team__about');
    let team = document.querySelector('.team__inner-items');
    let teamItem = team.querySelectorAll('.team__inner-item');
    let showIndex = 0;

    showAbout(showIndex);

    function showAbout(showIndex) {

        teamAbout.forEach(value => value.style.display = 'none');
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
                teamAbout[i].classList.add(`team__about-triangle${i}`);

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
    let modalSubmitButton = document.querySelector('.submit__button');
    let modalEmail = document.querySelector('.modal_email');
    let modalName = document.querySelector('.modal_name');
    let pricingTable = document.querySelector('.pricing__table');
    let mailReg = /^\w[\w\-._]+[@][a-zA-Z1-9\-_]+[.][a-zA-Z]+$/;
    let nameReg = /^[A-Za-z]+$/;
    const div = document.createElement('div');
    div.style.cssText = `color: #fc5f45;
                         font-size: 20px;
                         padding-left: 35px;
                         font-weight: bold`

    modal.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('overlay')) {
            div.style.display = 'none';
            modalName.value = '';
            modalEmail.value = '';
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            div.style.display = 'none';
            modalName.value = '';
            modalEmail.value = '';
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    })

    modalSubmitButton.addEventListener('click', event => {
        event.preventDefault();
        if (modalName.value && modalName.value.length > 2 && modalName.value.length < 10 && nameReg.test(modalName.value) && modalEmail.value && mailReg.test(modalEmail.value)) {

            div.textContent = `Thanks ${modalName.value}! We will contact you shortly;)`;
            modalClose.after(div);

            setTimeout(() => {
                div.style.display = 'none';
                modalName.value = '';
                modalEmail.value = '';
                modal.style.display = 'none';
                document.body.style.overflow = '';

            }, 1500);
        } else {
            div.style.cssText = `color: red;
                                 font-size: 20px;
                                 padding-left: 35px;`
            div.textContent = `Invalid username or mailing address`;
            modalClose.after(div);
        }
    });

    modalButton.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.prepend(modal);
        document.body.style.overflow = 'hidden';
    });
    modalClose.addEventListener('click', () => {
        div.style.display = 'none';
        modalName.value = '';
        modalEmail.value = '';
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    pricingTable.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('pricing__table-item-button')) {
            modal.style.display = 'block';
            document.body.prepend(modal);
            document.body.style.overflow = 'hidden';
        }
    });

    // Inputs validation-------------------------------------
    let inputButton = document.querySelector('.subs__butn');
    let inputArea = document.querySelector('.subscribe__button-subs');
    let feedbackButton = document.querySelector('.feedback__button');
    let feedbackButtonEmail = document.querySelector('.feedback__email');
    let feedbackForm = document.querySelector('.feedback__form');

    inputArea.addEventListener('focus', () => {
        inputArea.style.border = '2px solid #fc5f45'
    })

    inputArea.addEventListener('blur', () => {
        inputArea.style.border = '2px solid #efefef'
    })

    inputButton.addEventListener('click', event => {
        event.preventDefault();
        if (inputArea.value && mailReg.test(inputArea.value)) {
            div.style.cssText = `color: #fc5f45;
                                 font-size: 20px;
                                 padding-left: 35px;
                                 font-weight: bold`;
            div.textContent = `Thanks! We will contact you shortly;)`;
            inputButton.after(div);
            inputArea.value = '';


            setTimeout(() => {
                div.style.display = 'none';
            }, 3000);

        } else {
            div.style.cssText = `color: red;
                                 font-size: 20px;
                                 padding-left: 35px;`
            div.textContent = `Invalid mailing address`;
            inputButton.after(div);
        }
    });

    feedbackButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (feedbackButtonEmail.value && mailReg.test(feedbackButtonEmail.value)) {
            div.style.cssText = `color: #fc5f45;
                                 font-size: 20px;
                                 padding-left: 35px;
                                 font-weight: bold`;
            div.textContent = `Thanks! We will contact you shortly;)`;
            feedbackForm.before(div);

            for (let i = 0; i < form.elements.length; i++) {
                form[i].value = '';
            }

            setTimeout(() => {
                div.style.display = 'none';
            }, 3000);
        } else {
            div.style.cssText = `color: red;
                                 font-size: 20px;
                                 padding-left: 35px;`
            div.textContent = `Invalid mailing address`;
            feedbackForm.before(div);
        }
    });

    //Portfolio -----------------------------------------
    const portfolioItem = document.querySelectorAll('.portfolio__inner-item');
    const portfolioProject = document.querySelectorAll('.portfolio__project');

    for (let i = 0; i < portfolioItem.length; i++) {
        portfolioItem[i].addEventListener('mouseenter', () => {
            portfolioItem[i].firstElementChild.classList.add('portfolio__inner-item-active');
            portfolioProject[i].style.top = '-80px';
        });
        portfolioItem[i].addEventListener('mouseleave', () => {
            portfolioItem[i].firstElementChild.classList.remove('portfolio__inner-item-active');
            portfolioProject[i].style.top = '-5px';
        })
    }
});

}());