const containerEl = document.querySelector('.container');
const sizeBtns = document.querySelectorAll('.btn-size');
const gridOptionEl = document.querySelectorAll('.grid-option button');

const createdDivs = [];

showDefaultSizeGrid();

sizeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    sizeBtns.forEach((btn) => {
      btn.classList.remove('hovered-btn');
    });

    btn.classList.add('hovered-btn');

    showGridSize(e);
  });
});

gridOptionEl.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    gridOptionEl.forEach((btn) => {
      btn.classList.remove('hovered-btn');
    });

    btn.classList.add('hovered-btn');

    if (btn.textContent === 'Draw') {
      getDraw();
    } else if (btn.textContent === 'Rainbow') {
      changeColor();
    } else if (btn.textContent === 'Eraser') {
      getEraser();
    } else {
      clearGrid();
    }
  });
});

// Creating divs for each sizes

function showGridSize(e) {
  const clickedButton = e.target;

  // Remove grid-items whenever a new size is click and not add the divs
  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }

  const gridVal =
    clickedButton.textContent === 'S'
      ? 256
      : clickedButton.textContent === 'M'
      ? 1024
      : 4096;
  const gridTemplate =
    clickedButton.textContent === 'S'
      ? 16
      : clickedButton.textContent === 'M'
      ? 32
      : 64;

  containerEl.style.gridTemplateColumns = `repeat(${gridTemplate}, 1fr)`;
  containerEl.style.gridTemplateRows = `repeat(${gridTemplate}, 1fr)`;

  for (let i = 0; i < gridVal; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    containerEl.appendChild(newDiv);
    createdDivs.push(newDiv);

    newDiv.addEventListener('mouseover', () => {
      newDiv.classList.add('hovered');
    });
  }
}

// Default size of the sketch

function showDefaultSizeGrid() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    containerEl.appendChild(newDiv);

    newDiv.addEventListener('mouseover', () => {
      newDiv.classList.add('hovered');
    });
  }
}

const defaultGridItems = document.querySelectorAll('.grid-item');

function getDraw() {
  defaultGridItems.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '';
      div.classList.add('hovered');
      div.classList.remove('hovered-erase');
    });
  });

  createdDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '';
      div.classList.add('hovered');
      div.classList.remove('hovered-erase');
    });
  });
}

// Rainbow colors

function getRainbow() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColor() {
  defaultGridItems.forEach((div) => {
    div.addEventListener('mouseover', () => {
      let randomColor = getRainbow();
      div.style.backgroundColor = randomColor;
      div.classList.remove('hovered');
      div.classList.remove('hovered-erase');
    });
  });

  createdDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      let randomColor = getRainbow();
      div.style.backgroundColor = randomColor;
      div.classList.remove('hovered');
      div.classList.remove('hovered-erase');
    });
  });
}

// Erasing drawing for the default and other sizes

function getEraser() {
  defaultGridItems.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '';
      div.classList.remove('hovered');
      div.classList.add('hovered-erase');
    });
  });

  createdDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '';
      div.classList.remove('hovered');
      div.classList.add('hovered-erase');
    });
  });
}

// function for clearing the default grid and other sizes

function clearGrid() {
  createdDivs.forEach((div) => {
    div.style.backgroundColor = '';
    div.classList.remove('hovered');
  });

  defaultGridItems.forEach((div) => {
    div.style.backgroundColor = '';
    div.classList.remove('hovered');
  });
}
