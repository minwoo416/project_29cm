const wishlistBtns = document.querySelectorAll('.wishlist_plus');
const longBanner = document.querySelector('header .long_banner');
const longBannerClose = document.querySelector('header .long_banner .close');
const lnbWrap = document.querySelector('header .lnb');
const cateMoreImg = document.querySelector('.lnb .category .category_more img');
const cateHidden = document.querySelector('header .lnb .cate_menu_hidden');
const cateClose = document.querySelector('header .lnb .cate_menu_hidden > a')
console.log(wishlistBtns, longBanner, longBannerClose, cateMoreImg)
/* lnb */
cateMoreImg.addEventListener('mouseenter',()=>{
    cateHidden.style.display = 'flex'
})
cateHidden.addEventListener('mouseleave',()=>{
    cateHidden.style.display = 'none'
})

longBannerClose.addEventListener('click',()=>{
    longBanner.style.display ='none'
    lnbWrap.style.marginBottom = '10px'
})
wishlistBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img'); // 버튼 안의 이미지 태그

        if (img.src.includes('favorite_off_icon.png')) {
            img.src = './images/favorite_on_icon.png';
            img.alt = '위시리스트 제거';
        } else {
            img.src = './images/favorite_off_icon.png';
            img.alt = '위시리스트 추가';
        }
    });
});
//-------------스와이퍼 모음-----------
//배너 스와이퍼
const bnr1 = new Swiper('.banner', {
    slidesPerView:2.5,
    autoplay:{delay:2000},
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
        prevEl:".best .best_btn .swiper-button-prev",
        nextEl:".best .best_btn .swiper-button-next",
    },
    pagination: {
        el: ".best .best_btn .swiper-pagination",
        type: "fraction",
    },
    slidesPerView:1,
})
/* 베스트 버튼클릭스 카테고리 이동 */
/* li잡기 */
const bestCategory = document.querySelectorAll('.best .best_category ul li');
console.log(bestCategory);
/* 현재 인덱스에 클래스 추가하기 */
function updateBestCategory(index) {
    bestCategory.forEach((li, i) => {
        li.classList.toggle('active1', i === index);
    });
}
// 슬라이드 변경될 때 카테고리도 바뀌게
bestBtn.on('slideChange', () => {
    updateBestCategory(bestBtn.activeIndex);
});
// 카테고리 누르면 해당 슬라이드로 이동
bestCategory.forEach((li, i) => {
    li.addEventListener('click', () => {
        bestBtn.slideTo(i);
        updateBestCategory(i);
    });
});
updateBestCategory(bestBtn.activeIndex);
//브랜드
const brandAuto = new Swiper('.brand .swiper',{
    autoplay:{delay:2000},
    slidesPerView:3.5,
    loop:true,
})
//뉴 스와이퍼
const newBtn = new Swiper('.new .swiper',{
    navigation:{
        prevEl:".new .new_product_container .new_btn .swiper-button-prev",
        nextEl:".new .new_product_container .new_btn .swiper-button-next",
    },
    pagination: {
        el: ".new .new_product_container .new_btn .swiper-pagination",
        type: "fraction",
    },
    slidesPerView:1,
})
/* 뉴 버튼클릭스 카테고리 이동 */
/* li잡기 */
const newCategory = document.querySelectorAll('.new .new_category ul li');
console.log(newCategory);
/* 현재 인덱스에 클래스 추가하기 */
function updateNewCategory(index) {
    newCategory.forEach((li, i) => {
        li.classList.toggle('active2', i === index);
    });
}
// 슬라이드 변경될 때 카테고리도 바뀌게
newBtn.on('slideChange', () => {
    updateNewCategory(newBtn.activeIndex);
});
// 카테고리 누르면 해당 슬라이드로 이동
newCategory.forEach((li, i) => {
    li.addEventListener('click', () => {
        newBtn.slideTo(i);
        updateNewCategory(i);
    });
});
updateNewCategory(newBtn.activeIndex);


/* 무한스크롤 */
;
const template = document.querySelector('.show_container .show_product_wrap');
const hiddenMoreBtn = document.querySelector('.show_container .hidden_more_btn');
const hiddenContainer = document.querySelector('.show_container .hidden_container');
console.log(template, hiddenMoreBtn, hiddenContainer);

let count = 0;
const max = 3; // 몇 개까지 보여줄지

hiddenMoreBtn.addEventListener('click', () => {
    if (count >= max) {
    hiddenMoreBtn.style.display = 'none';
    return;
    }
// 복제
const clone = template.cloneNode(true); // true면 안쪽 내용까지 복제
hiddenContainer.appendChild(clone);
count++;
});