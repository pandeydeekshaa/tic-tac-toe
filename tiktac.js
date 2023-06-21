// Variables
var currentPlayer = 'X';
var gameActive = true;
var board = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
var winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to place a symbol on the board
function placeSymbol(cell) {
  if (gameActive && board[cell] === '') {
    board[cell] = currentPlayer;
    document.getElementsByClassName('cell')[cell].innerHTML = currentPlayer;
    document.getElementsByClassName('cell')[cell].style.pointerEvents = 'none';

    if (checkWinner()) {
      document.getElementById('result').innerHTML = 'Player ' + currentPlayer + ' wins!';
      gameActive = false;
    } else if (!board.includes('')) {
      document.getElementById('result').innerHTML = 'It\'s a tie!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check for a winner
function checkWinner() {
  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to reset the game
function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  board = ['', '', '', '', '', '', '', '', ''];
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
    cells[i].style.pointerEvents = 'auto';
  }
  document.getElementById('result').innerHTML = '';
}