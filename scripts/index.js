const bnr1 = new Swiper('.banner', {
    slidesPerView:2.5,
    loop:true,
    navigation: {
        prevEl: ".banner_btn_wrap .pagination_arrow_group .swiper-arrow_wrap .swiper-button-prev",
        nextEl: ".banner_btn_wrap .pagination_arrow_group .swiper-arrow_wrap .swiper-button-next",
    },
    pagination: {
        el: ".banner_btn_wrap .pagination_arrow_group .swiper-pagination",
        type: "fraction",
    },
    scrollbar:{
        el:'.banner_btn_wrap .swiper-scrollbar',
    },
});

const specialBnr = new Swiper('.special_order .swiper',{
    slidesPerView:3,
    navigation:{
        prevEl:''.
    },
})