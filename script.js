window.addEventListener('DOMContentLoaded', function(){
    'use strict';
// anchors -----------------------------------------------------------
    let topNav = document.querySelector('.header__top');

    topNav.addEventListener('mouseover', function(event){
        let target = event.target;
        if(target.tagName === 'A'){
            target.classList.add('hovers');
        }
    });
    topNav.addEventListener('mouseout', function(event){
        let target = event.target;
        if(target.tagName === 'A'){
            target.classList.remove('hovers');
        }
    });

// slider --------------------------------------------------------------
let sliderItem = document.querySelectorAll('.testimonials__slider');
let slide1 = document.querySelectorAll('.slider_paddings-item')[0];
let slide2 = document.querySelectorAll('.slider_paddings-item')[1];



sliderItem.forEach((value, index)=>{
    if(index != 0){
        value.style.display = 'none';
    }
});

slide1.addEventListener('click', function(){
    sliderItem[2].style.display = '';
});
slide2.addEventListener('click', function(){
    sliderItem[0].style.display = '';
    sliderItem[2].style.display = 'none';
});




});



