const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('#turn');

let currentPlayer = 'X';
let gameWon = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
            gameWon = true;
            break;
        }
    }
    if (gameWon) {
        turn.textContent = `Player ${currentPlayer} wins!`;
        cells.forEach(cell => cell.removeEventListener('click', handleClick));
    } else if ([...cells].every(cell => cell.textContent !== '')) {
        turn.textContent = "It's a tie!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turn.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function handleClick() {
    if (!gameWon && this.textContent === '') {
        this.textContent = currentPlayer;
        checkForWinner();
    }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));