/*----- constants -----*/
const MARKERS = {
   '1': `<img src="images/X-lightcyan.png">`,
   '-1': `<img src="images/O-lightcyan.png">`,
   'null': `<img src="images/blank.png">`
};

const PLAYERS = {
   '1': 'PROFESSOR FALKEN',
   '-1': 'WOPR'
};

/*----- app's state (variables) -----*/
var board, trans, winner, turn;

/*----- cached references -----*/
const msgEl = document.getElementById('msg');
const butEl = document.querySelector('button');
/*----- event listeners -----*/
document.querySelector('section').addEventListener('click', tictac);
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();
const setTrans = () => trans = (board[0].map((col, i) => board.map(row => row[i])));
function tictac(evt) {
   const div = evt.target.parentElement.id.match(/\d+/g).map(Number);   // Outputs [row, col] of square clicked
   if (board[div[0]][div[1]] || winner) return;                         // Disables marker change in prev. clicked square and turn switch
   board[div[0]][div[1]] = turn;                                        // Array is updated with player value (1, -1) of clicked square
   setTrans();
   winner = getWinner();                                                 // Sets winner var to value returned by getWinner()
   turn *= -1;                                                            // Turn switches
   render();
}

function getWinner() {
   for (i = 0; i < board.length; i++) {                                          // Iterate, damn you!
      if (Math.abs(board[i].reduce((x, y) => x + y)) === 3) {                // Horizontal check
         return board[i][i];
      } else if (Math.abs(trans[i].reduce((x, y) => x + y)) === 3) {       // Vertical check
         return board[i][i];
      }
   };
   // (Math.abs(board[0][0] + board[1][1] + board[2][2]) === 3)
   //    ? return board[0][0]
   //    : (Math.abs(board[2][0] + board[1][1] + board[0][2]) === 3)    // Clean this up/ Ternary
   //       ? board[2][0]
   //       : (board.flat().includes(null))
   //          ? null : 'T';
   if (Math.abs(board[0][0] + board[1][1] + board[2][2]) === 3) {
      return board[0][0];
   } else if (Math.abs(board[2][0] + board[1][1] + board[0][2]) === 3) {      // Clean this up/ Ternary
      return board[2][0];
   } else if (board.flat().includes(null)) {
      return null;
   } else {
      return 'T';
   }
}

function render() {
   board.forEach((rowArr, rIdx) => {
      rowArr.forEach((colIdx, cIdx) => {
         const div = document.getElementById(`r${rIdx}c${cIdx}`);
         div.innerHTML = MARKERS[colIdx];
      });
   });
   if (winner == 'T') {
      msgEl.innerHTML = 'HELLO<br><br>A STRANGE GAME.<br>THE ONLY WINNING MOVE IS<br>NOT TO PLAY.<br><br>HOW ABOUT A NICE GAME OF CHESS?';
      document.querySelector('button').innerHTML = `THERE IS NO WINNER<BR>PLAY AGAIN?`;
   } else if (winner) {
      msgEl.innerHTML = 'HELLO<br><br>A STRANGE GAME.<br>THE ONLY WINNING MOVE IS<br>NOT TO PLAY.<br><br>HOW ABOUT A NICE GAME OF CHESS?';
      document.querySelector('button').innerHTML = `${PLAYERS[turn * -1]} HAS CHEATED<BR>PLAY AGAIN?`;
   } else {
      msgEl.innerHTML = `${PLAYERS[turn]}'s TURN`;
      document.querySelector('button').innerHTML = `PLAY AGAIN`;
   };
}

function init() {
   board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
   ];
   winner = null;
   turn = -1;
   render();
};
/*
// Want:
// Mouseover border styling(or?)
// Line through winning combo
// LOGON: Joshua (case insensitive)
// .wavs

if (Math.abs(board.flat().reduce((tot, sq) => tot + sq)) === 9)
*/