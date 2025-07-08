const wishlistBtns = document.querySelectorAll('.wishlist_plus');
const longBanner = document.querySelector('header .long_banner');
const longBannerClose = document.querySelector('header .long_banner .close');
const category = document.querySelectorAll('.category_wrap .category li');


category.forEach((obj, idx)=>{
    obj.addEventListener('click',()=>{
        category.forEach((li)=>{li.classList.remove('active')})
        obj.classList.add('active')
    })
})
console.log(category)
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

const snb = document.querySelectorAll('.snb > li');
const snbDepth = document.querySelectorAll('.snb .snb_depth');
console.log(snb, snbDepth)
snb.forEach((obj, idx)=>{
    obj.addEventListener('mouseenter',()=>{
        snbDepth[idx].style.display = 'flex';
    })
    obj.addEventListener('mouseleave',()=>{
        snbDepth[idx].style.display = 'none';
    })
})