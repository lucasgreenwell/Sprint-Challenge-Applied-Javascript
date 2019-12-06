/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



  //create elements
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  //add classes
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  //structure
  const carouselGoesHere = document.querySelector('.carousel-container')
  carouselGoesHere.append(carousel);
  carousel.append(leftBtn, img1, img2, img3, img4, rightBtn);
  
  //add content
  img1.setAttribute('src', './assets/carousel/mountains.jpeg');
  img2.setAttribute('src', './assets/carousel/computer.jpeg');
  img3.setAttribute('src', './assets/carousel/trees.jpeg');
  img4.setAttribute('src', './assets/carousel/turntable.jpeg');
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';
  img1.style.display = 'block'





// let imgNumber = 1;


// rightBtn.addEventListener('click', () => {
//   if (imgNumber == 4){
//     imgNumber = 1;
//   }else {
//     imgNumber += 1
//   }

// })

// leftBtn.addEventListener('click', () => {
//   if (imgNumber == 1){
//     imgNumber = 4;
//   }else {
//     imgNumber -= 1
//   }
// })

let images = [img1, img2, img3, img4]
let display = 0;

rightBtn.addEventListener('click', () => {
  if (display == 3){
    display = 0;
  }else {
    display += 1
  }
  images.forEach(ele => {
    ele.style.display = 'none';
  })
  images[display].style.display = 'block'
  // for(let i = 0; i < images.length; i ++){
  //   let ele = images[i];
  //   if (ele !== images[display]){
  //     ele.style.display = none;
  //   }
  // }
})

leftBtn.addEventListener('click', () => {
  if (display == 0){
    display = 3;
  }else {
    display -= 1
  }
  images.forEach(ele => {
    ele.style.display = 'none';
  })
  images[display].style.display = 'block'
  // for(let i = 0; i < images.length; i ++){
  //   let ele = images[i];
  //   if (ele !== images[display]){
  //     ele.style.display = none;
  //   }
  // }
})