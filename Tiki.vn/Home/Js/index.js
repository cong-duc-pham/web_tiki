
const slidesItem = document.querySelector('.slide-items');
const buttonLeft = document.querySelector('.button-left-slide');
const buttonRight = document.querySelector('.button-right-slide');

const imgs = document.getElementsByClassName('block-slide-items'); // Corrected class name
let current = 0; // Use let instead of const since you will modify it
const length = imgs.length; // Corrected typo from 'lenght' to 'length'

const handleChangeSlide = () =>{
    if (imgs.length > 0) {  // Check if imgs array is not empty
        width = imgs[0].offsetWidth;
        console.log(width);
    } else {
        console.error("No elements found with the class 'block-slide-items'.");
    }

    if (current === length - 1) {
        current = 0;
        slidesItem.style.transform = `translateX(0px)`;
        document.querySelector('.active').classList.remove('active') 
        document.querySelector('.dots-slide-' + current).classList.add('active');

    } else {
        current++;
        slidesItem.style.transform = `translateX(${width * -1 * current}px)`;  // Add 'px' for proper CSS transformation
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dots-slide-' + current).classList.add('active');
    }
}

if (!slidesItem) {
    console.error("No element found with the class 'slide-items'.");
} else {
    setInterval(handleChangeSlide, 5000);
}

if (!buttonRight) {
    console.error("No element found with the class 'button-right-slide'.");
} else {
    buttonRight.addEventListener('click', () => {
        handleChangeSlide();
    });
}

buttonLeft.addEventListener('click', () =>{
    if (current == 0 ) {
        current = length - 1;
        let width = imgs[0].offsetWidth;
        slidesItem.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dots-slide-' + current).classList.add('active');
    } else {
        current --;
        let width = imgs[0].offsetWidth;
        slidesItem.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dots-slide-' + current).classList.add('active');  // Add 'px' for proper CSS transformation
    }
})
//js nut xem them san pham
function  tab_errol(){
    alert("Hiện tại các sản phẩm của mục này chưa được cập nhật. Vui lòng thông cảm và quay lại sau!");
}

function button_see_more(){
    alert("Hiện tại website chưa cập nhật nhiều sản phẩm để bạn xem thêm. Vui lòng quay lại sau!");
} 

