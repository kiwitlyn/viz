const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   const clickedElement = e.target;

//   if (clickedElement.classList.contains('next')) {
//       slider.append(items[0]);
//   } else if (clickedElement.classList.contains('prev')) {
//       slider.prepend(items[items.length - 1]);
//   }
// }






// const slider = document.querySelector('.slider');
// const nextButton = document.querySelector('.next');
// const prevButton = document.querySelector('.prev');

// function activateNext() {
//   const items = document.querySelectorAll('.item');
//   slider.append(items[0]);
// }

// function activatePrev() {
//   const items = document.querySelectorAll('.item');
//   slider.prepend(items[items.length - 1]);
// }

// nextButton.addEventListener('click', activateNext);
// prevButton.addEventListener('click', activatePrev);

