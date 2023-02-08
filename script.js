const today = new Date();
const year = today.getFullYear();
document.querySelector('#year').innerHTML = year;

// const container = document.getElementById("grid-container");
// for (let i = 0; i < 24; i++) {
//   let div = document.createElement("div");
//   div.classList.add("grid-item");
//   div.textContent = i + 1;
//   container.appendChild(div);
// }

// if(reset.addEventListener('click', function()
// {
//   for(let i = 0; i < 100; i++)
//   {
    
//   }
// }))
const grid = document.getElementById('grid');
// const reset = document.querySelector('.reset');
const colorPicker = document.getElementById('color-picker');


// for (let i = 0; i < 1000; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   square.addEventListener('mouseover', function(event) {
//     if (event.buttons === 1) {
//       event.target.style.backgroundColor = colorPicker.value;
//     }
//   });
//   square.addEventListener('mousedown', function(event) {
//     event.target.style.backgroundColor = colorPicker.value;
//   });
//   square.addEventListener('mouseup', function(event) {
//     event.target.style.backgroundColor = colorPicker.value;
//   });
//   // square.addEventListener('click', function(event) {
//   //   event.target.style.backgroundColor = 'black';
//   // });
  
//   grid.appendChild(square);
// }


// reset.addEventListener('click', function() {
//   const squares = document.querySelectorAll('.square');
//   squares.forEach(function(square) {
//     square.style.backgroundColor = '';
//   });
// });

const columnsSlider = document.getElementById('columns-slider');
const reset = document.querySelector('.reset');

const createGrid = function() {
  const gridSize = columnsSlider.value;
  const squareSize = 100 / gridSize;

  grid.innerHTML = '';

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareSize + '%';
    square.style.paddingBottom = squareSize + '%';
    square.addEventListener('mouseover', function(event) {
      if (event.buttons === 1) {
        event.target.style.backgroundColor = colorPicker.value;
      }
    });
    square.addEventListener('mousedown', function(event) {
      event.target.style.backgroundColor = colorPicker.value;
    });
    square.addEventListener('mouseup', function(event) {
      event.target.style.backgroundColor = colorPicker.value;
    });
    square.addEventListener('click', function(event) {
      event.target.style.backgroundColor = colorPicker.value;
    });

    grid.appendChild(square);
  }
};

createGrid();

columnsSlider.addEventListener('input', createGrid);

reset.addEventListener('click', function() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(function(square) {
    square.style.backgroundColor = '';
  });
});
