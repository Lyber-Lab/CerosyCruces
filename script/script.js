alert('¡Bienvenido a nuestra página web! Estás a punto de jugar a Ceros y Cruces. Este juego es de jugador contra jugador. ¡Espero que te guste!');

const celda = document.querySelectorAll('.celda');
let turn = 'X';
let jugador1 = prompt('Introduce el nombre del jugador 1 (X)');
let jugador2 = prompt('Introduce el nombre del jugador 2 (0)');
let actual = jugador1;

celda.forEach(celda => {
    celda.addEventListener('click', () => {
        if (celda.textContent === '') {
            celda.textContent = turn;
            setTimeout(() => {
                checkWinner();
            }, 50);
        }
    });
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winnerFound = false;

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (celda[a].textContent && 
            celda[a].textContent === celda[b].textContent && 
            celda[a].textContent === celda[c].textContent) { 
            winnerFound = true;
            setTimeout(() => {
                alert(`${actual} ha ganado!`);
                resetGame();
            }, 100);
        }
    });

    if (!winnerFound) {
        let isBoardFull = true;
        celda.forEach(celda => {
            if (celda.textContent === '') {
                isBoardFull = false;
            }
        });
    
        if (isBoardFull) {
            setTimeout(() => {
                alert('Es un empate!');
                resetGame();
            }, 100);
        }
    }

    if (!winnerFound) {
        if (turn === 'X') {
            turn = '0';
            actual = jugador2;
        } else {
            turn = 'X';
            actual = jugador1;
        }
    }
}

function resetGame() {
    celda.forEach(celda => celda.textContent = '');
    turn = 'X';
    actual = jugador1;
}
