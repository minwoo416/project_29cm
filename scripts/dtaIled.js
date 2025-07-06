const longBanner = document.querySelector('header .long_banner');
const longBannerClose = document.querySelector('header .long_banner .close');
longBannerClose.addEventListener('click',()=>{
    longBanner.style.display ='none'
    lnbWrap.style.marginBottom = '10px'
})

const bigThum = document.querySelector('.big_thum img');
const smallThum = document.querySelectorAll('.small_thum img');
const productContent = document.querySelectorAll('.product_content_btn_wrap button');
const productWrap = document.querySelectorAll('.product_content_wrap > *');
/* 입력시 등록 */
const selectSize = document.querySelector('select[name=size]');
const selectColor = document.querySelector('select[name=color]');
const orderColor = document.querySelector('.order_select .list .color');
const orderSize = document.querySelector('.order_select .list .size'); 
const orderSelect = document.querySelector('.order_select');
const minusBtn = document.querySelector('.order_num #minus');
const plusBtn = document.querySelector('.order_num #plus');
const userNum = document.querySelector('.order_num input[name=user_num]');
const totalPrice = document.querySelector('.order_select .total .price em');
console.log(minusBtn, plusBtn, userNum)
/* 초기값들 */
let num = 0;
let price = 134400 ;
let total = 0;
userNum.value = num;
minusBtn.addEventListener('click',()=>{
    num--;
    if(num < 0){window.alert('최소 수량은 1개 입니다.')}
    if(num > 0){
        total = num * price;
        userNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
plusBtn.addEventListener('click',()=>{
    num++;
    if(num > 99){window.alert('최대 수량은 99개 입니다.')}
    if(num >=0 && num <= 99){
        total = num * price;
        userNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
orderSelect.style.display = 'none';
//1. 컬러 비활성화 
selectColor.disabled = true;

//2. 색상 클릭시 사이즈 활성화
selectSize.addEventListener('change',orderFunc)
selectColor.addEventListener('change',orderFunc)
function orderFunc(){
    selectColor.disabled = false;

    if(selectSize.value && selectColor.value){
        orderSelect.style.display = 'block';
        orderColor.textContent = selectColor.value;
        orderSize.textContent = selectSize.value;
        
    }

}
//3. 두개 활성화 되었을 때 orderselect 보이게하고 값도 이동 
smallThum[0].addEventListener('mouseover',()=>{bigThumSrc(1)})
smallThum[1].addEventListener('mouseover',()=>{bigThumSrc(2)})
smallThum[2].addEventListener('mouseover',()=>{bigThumSrc(3)})
function bigThumSrc(num){
    return bigThum.src = `./images/big_tum0${num}.jpg`
}
/* 모든 내용 없애기 */
productWrap.forEach((wrap)=>{
    wrap.style.display = 'none';
})
productWrap[0].style.display = 'block';
productContent.forEach((btn, idx)=>{
    btn.style.background ='#fff';
    btn.style.color ='#000';
})
/* 초기 버튼 활성화 */
productContent[0].style.background = '#000';
productContent[0].style.color = '#fff';
/* 버튼 초기화 */
function btnOff(){
    productContent.forEach((obj)=>{
        obj.style.background = '#fff';
        obj.style.color = '#000';
    })
}
productContent.forEach((btn, idx)=>{
    btn.addEventListener('click',()=>{
        productWrap.forEach((wrap)=>{
            wrap.style.display = 'none';
        })
        btnOff()
        productWrap[idx].style.display = 'block'
        productContent[idx].style.background = '#000';
        productContent[idx].style.color = '#fff';
    })
})