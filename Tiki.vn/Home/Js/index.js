
// const slidesItem = document.querySelector('.slide-items')
// console.log(slidesItem)

// const imgs = document.getElementsByClassName('.block-slide-items')
// setInterval(()=>{
//     let width = imgs[0].offsetWidth;
//     console.log(width)
// },4000)
const slidesItem = document.querySelector('.slide-items');

const imgs = document.getElementsByClassName('block-slide-items'); // Remove the dot from the class name
setInterval(() => {
    if (imgs.length > 0) {  // Check if imgs array is not empty
        let width = imgs[0].offsetWidth;
        console.log(width);
    } else {
        console.error("No elements found with the class 'block-slide-items'.");
    }
}, 4000);
