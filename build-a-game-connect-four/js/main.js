/*----- constants -----*/
const COLORS = {
    '1': 'red',
    '-1': 'blue',
    '0': '#333',
};


/*----- app's state (variables) -----*/
var board, winner, turn;


/*----- cached element references -----*/
const msgEl = document.getElementById('msg');


/*----- event listeners -----*/
document.getElementById('col-markers').addEventListener('click', handleClick);


/*----- functions -----*/
init();

function handleClick(evt) {
    const marker = evt.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
    if (isNaN(colIdx)) return;
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    // TODO: winner = getWinner();
    turn *= -1;
    render();

    console.log(colIdx);
};

function render() {
     // Display Board
    board.forEach(function(colArr, colIdx) {
        // Update col markers
        const marker = document.getElementById(`col${colIdx}`);
        marker.style.borderTopColor = colArr.includes(0) ? 'deepskyblue' : '#333';
        colArr.forEach(function(cell, rowIdx) {
        // Access the correct div in the section
        const div = document.getElementById(`c${colIdx}r${rowIdx}`);
        div.style.backgroundColor = COLORS[cell];
        })
    }) 
    

     // Display message
    if (winner) {
        if (winner = 'T') {
            msgEl.textContent = "It's a tie!";
        }
    } else {
        msgEl.textContent = `${COLORS[turn].toUpperCase()}'s turn`;
    };    
}

function init() {
    board = [
// Row   0  1  2  3  4  5  6    (Top)
        [0, 0, 0, 0, 0, 0], // column 1
        [0, 0, 0, 0, 0, 0], // column 2
        [0, 0, 0, 0, 0, 0], // column 3
        [0, 0, 0, 0, 0, 0], // column 4
        [0, 0, 0, 0, 0, 0], // column 5
        [0, 0, 0, 0, 0, 0], // column 6
        [0, 0, 0, 0, 0, 0], // column 7 (Right)
    ];
    winner = null;
    turn = 1;
    render();
}

