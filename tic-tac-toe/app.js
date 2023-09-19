const Players = (mark, turn) => {
  return {
    mark,
    turn,
  };
};

const GameBoard = (function () {
  // Cache dom
  const playerOneEl = document.querySelector('#player-1');
  const playerTwoEl = document.querySelector('#player-2');
  const boxes = document.querySelectorAll('.grid-box');
  const resetBtn = document.querySelector('#reset-btn');

  // Players
  const playerOne = Players('X', true);
  const playerTwo = Players('O', false);

  let gameBoard = ['', '', '', '', '', '', '', '', ''];

  resetBtn.addEventListener('click', _resetGame);

  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      if (_gameIsOngoing() && !box.textContent) {
        if (playerOne.turn) {
          playerOne.turn = false;
          playerTwo.turn = true;
          box.textContent = playerOne.mark;
          _makeMove(playerOne.mark, index);
          resetBtn.style.backgroundColor = 'rgba(54, 49, 48)';
          playerTwoEl.style.backgroundColor = 'rgba(54, 49, 48)';
          playerOneEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
        } else {
          playerOne.turn = true;
          playerTwo.turn = false;
          box.textContent = playerTwo.mark;
          _makeMove(playerTwo.mark, index);
          playerOneEl.style.backgroundColor = 'rgba(54, 49, 48)';
          playerTwoEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
        }
      }

      const result = _CheckWinner();

      if (result === 'X') {
        playerOneEl.style.backgroundColor = 'green';
        playerTwoEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
        resetBtn.style.backgroundColor = 'rgba(54, 49, 48)';
      } else if (result === 'O') {
        playerTwoEl.style.backgroundColor = 'green';
        playerOneEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
        resetBtn.style.backgroundColor = 'rgba(54, 49, 48)';
      } else if (result === 'draw') {
        playerTwoEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
        playerOneEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
        resetBtn.style.backgroundColor = 'rgba(54, 49, 48)';
      }
    });
  });

  function _makeMove(player, postion) {
    if (gameBoard[postion] === '') {
      gameBoard[postion] = player;
    }
  }

  function _CheckWinner() {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const combination of winCombinations) {
      const [a, b, c] = combination;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }

    if (!gameBoard.includes('')) {
      return 'draw'; // It's a draw
    }
  }

  // Function to check if the game is still ongoing
  function _gameIsOngoing() {
    return !_CheckWinner() && gameBoard.includes('');
  }

  function _resetGame() {
    boxes.forEach((box) => {
      playerOne.turn = 'true';
      playerTwo.turn = 'false';
      box.textContent = '';
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      resetBtn.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
      playerOneEl.style.backgroundColor = 'rgba(54, 49, 48)';
      playerTwoEl.style.backgroundColor = 'rgba(54, 49, 48, 0.5)';
    });
  }
})();
