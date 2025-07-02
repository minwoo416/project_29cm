//배너 스와이퍼
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
//스페셜오더 스와이퍼
const specialBtn = new Swiper('.special_order .swiper',{
    slidesPerView:3,
    navigation:{
        prevEl:".special_order .special_wrap .swiper-button-prev",
        nextEl:".special_order .special_wrap .swiper-button-next",
    },
    spaceBetween:50,
    slidesPerGroup: 3,
})
//베스트 스와이퍼
const bestBtn = new Swiper('.best .swiper',{
    navigation:{
        prevEl:".best .swiper .best_btn .swiper-button-prev",
        nextEl:".best .swiper .best_btn .swiper-button-next",
    },
    pagination: {
        el: ".best .swiper .best_btn .swiper-pagination",
        type: "fraction",
    },
})

