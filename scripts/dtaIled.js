const bigThum = document.querySelector('.big_thum img');
const smallThum = document.querySelectorAll('.small_thum img');
smallThum[0].addEventListener('mouseover',()=>{bigThumSrc(1)})
smallThum[1].addEventListener('mouseover',()=>{bigThumSrc(2)})
smallThum[2].addEventListener('mouseover',()=>{bigThumSrc(3)})
function bigThumSrc(num){
    return bigThum.src = `./images/big_tum0${num}.jpg`
}


const productContent = document.querySelectorAll('.product_content_btn_wrap button')
const productWrap = document.querySelectorAll('.product_content_wrap > *')
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