const form = document.querySelector('#formMaze');
const complete = document.querySelector('.complete');
const mazeCanvas = document.querySelector('.maze');

const size = document.querySelector('#size');
const rowCol = document.querySelector('#rowCol');
const restart = document.querySelector('#restart');

mazeCanvas.style.display = 'none';

restart.style.display = 'none';

form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.style.display = 'none';
  restart.style.display = 'block';

  if (rowCol.value == '' || size.value == '') {
    return alert('Please enter all fields');
  }
  mazeCanvas.style.display = 'block';
  const mazeSize = Number(size.value);
  const ROW = Number(rowCol.value);
  const COL = Number(rowCol.value);

  const newMaze = new Maze(mazeSize, ROW, COL);
  newMaze.setup();
  newMaze.draw();
});

restart.addEventListener('click', function (e) {
  window.location.reload();
});
