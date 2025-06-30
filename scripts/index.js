/* const swiper = new Swiper('.banner',{
    navigation:{
        prevEl:'.btnWrap .swiperButton_prev',
        nextEl:'.btnWrap .swiperButton_next',
    },
},); */


const bnr1 = new Swiper('.banner', {
    slidesPerView:2.5,
    loop:true,
    centeredSlides:true,
    spaceBetween:30,
    navigation: {
        prevEl: '.banner_wrap .swiper-button-prev',
        nextEl: '.banner_wrap .swiper-button-next',
    },
    scrollbar:{
        el:'.banner_wrap .swiper-scrollbar',
    }
});

