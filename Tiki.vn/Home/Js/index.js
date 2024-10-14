
// const slidesItem = document.querySelector('.slide-items')
// console.log(slidesItem)

// const imgs = document.getElementsByClassName('.block-slide-items')
// setInterval(()=>{
//     let width = imgs[0].offsetWidth;
//     console.log(width)
// },4000)
// const slidesItem = document.querySelector('.slide-items');
// console.log(slidesItem)
// const imgs = document.getElementsByClassName('block-slide-items'); // Remove the dot from the class name
// setInterval(() => {
//     if (imgs.length > 0) {  // Check if imgs array is not empty
//         let width = imgs[0].offsetWidth;
//         console.log(width);
//     } else {
//         console.error("No elements found with the class 'block-slide-items'.");
//     }
//     slidesItem.style.transform = `translateX(${width * -1})`
// }, 4000)
const slidesItem = document.querySelector('.slide-items');

if (!slidesItem) {
    console.error("No element found with the class 'slide-items'.");
} else {
    const imgs = document.getElementsByClassName('block-slide-items'); // Corrected class name
    let current = 0; // Use let instead of const since you will modify it
    const length = imgs.length; // Corrected typo from 'lenght' to 'length'

    setInterval(() => {
        let width = 0; // Define width at the start
        if (imgs.length > 0) {  // Check if imgs array is not empty
            width = imgs[0].offsetWidth;
            console.log(width);
        } else {
            console.error("No elements found with the class 'block-slide-items'.");
        }

        if (current === length - 1) {
            current = 0;
            slidesItem.style.transform = `translateX(0px)`;
        } else {
            current++;
            slidesItem.style.transform = `translateX(${width * -1 * current}px)`;  // Add 'px' for proper CSS transformation
        }
    }, 5000);
}

