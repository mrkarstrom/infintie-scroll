// const scrollers = document.querySelectorAll('.scroller');

// // If a user hasn't opted in for recuded motion, then we add the animation
// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     // add data-animated="true" to every `.scroller` on the page
//     scroller.setAttribute('data-animated', true);

//     // Make an array from the elements within `.scroller-inner`
//     const scrollerInner = scroller.querySelector('.scroller__inner');
//     const scrollerContent = Array.from(scrollerInner.children);

//     // For each item in the array, clone it
//     // add aria-hidden to it
//     // add it into the `.scroller-inner`
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute('aria-hidden', true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });
// }

// const scrollers = document.querySelectorAll('.scroller');

// // If a user hasn't opted in for reduced motion, then we add the animation
// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     // add data-animated="true" to every `.scroller` on the page
//     scroller.setAttribute('data-animated', true);

//     // Make an array from the elements within `.scroller-inner`
//     const scrollerInner = scroller.querySelector('.scroller__inner');
//     const scrollerContent = Array.from(scrollerInner.children);

//     // For each item in the array, clone it
//     // add aria-hidden to it
//     // add it into the `.scroller-inner`
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute('aria-hidden', true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });

//   // Add event listeners for arrow key presses
//   document.addEventListener('keydown', handleKeyPress);
// }

// function handleKeyPress(event) {
//   scrollers.forEach((scroller) => {
//     const direction = scroller.getAttribute('data-direction');

//     if (event.key === 'ArrowRight' && direction === 'right') {
//       scroller.scrollLeft += 50; // Adjust the value as needed
//     } else if (event.key === 'ArrowLeft' && direction === 'left') {
//       scroller.scrollLeft -= 50; // Adjust the value as needed
//     }
//   });
// }

// const scrollers = document.querySelectorAll('.scroller');

// // Add event listeners for arrow key presses
// document.addEventListener('keydown', handleKeyPress);

// function handleKeyPress(event) {
//   scrollers.forEach((scroller) => {
//     const direction = scroller.getAttribute('data-direction');

//     if (event.key === 'ArrowRight' && direction === 'right') {
//       scroller.scrollLeft += 50; // Adjust the value as needed
//     } else if (event.key === 'ArrowLeft' && direction === 'left') {
//       scroller.scrollLeft -= 50; // Adjust the value as needed
//     }
//   });
// }

  document.addEventListener('DOMContentLoaded', function () {
  const scrollableList = document.querySelector('.scrollable-list');
  scrollableList.focus();
  });

  const scrollers = document.querySelectorAll('.scroller');

  // Add event listeners for arrow key presses
  document.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
  scrollers.forEach((scroller) => {
    const direction = scroller.getAttribute('data-direction');

    if (event.key === 'ArrowRight' && direction === 'right') {
      scroller.scrollLeft += 50; // Adjust the value as needed
    } else if (event.key === 'ArrowLeft' && direction === 'left') {
      scroller.scrollLeft -= 50; // Adjust the value as needed
    }
  });
  }
