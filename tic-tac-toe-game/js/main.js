/*----- constants -----*/ 
const MARKERS = {
   '1': `<img src="images/X-lightcyan.png">`,
   '-1': `<img src="images/O-lightcyan.png">`,
   'null': ''
};

const PLAYERS = {
   '1': 'PROFESSOR FALKEN',
   '-1': 'WOPR'
};

/*----- app's state (variables) -----*/ 
var board, winner, turn;

/*----- cached references -----*/ 
const msgEl = document.getElementById('msg');
// msgEl.innerHTML = 'HELLO<br><br>A STRANGE GAME.<br>THE ONLY WINNING MOVE IS<br>NOT TO PLAY.<br><br>HOW ABOUT A NICE GAME OF CHESS?';
/*----- event listeners -----*/ 
document.querySelector('section').addEventListener('click', tictac);
document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function tictac(evt) {
   const div = evt.target.id.match(/\d+/g).map(Number); // Outputs [row, col] of square clicked
   const row = div[0]; // Row index
   const col = div[1]; // Column index
   const  move = board[row][col];
   if (move || winner) return; // Disables marker change in prev. clicked square
   console.log(div);
   // winner = getWinner();
   board[row][col] = turn;
   turn *= -1;
   render();
}

// GETWINNER
// Winner will be 'T', null, or player, which can be retrieved from any idx of winning combo
function getWinner() {
   const transpose = board[0].map((col, i) => board.map(row => row[i]));
   for (i = 0; i < board.length; i++) {
      if (Math.abs(board[i].reduce((tot, sq) => tot + sq)) === 3);
      // const sum = array.reduce((total, amount) => total + amount);
   };
}

function render() {
   board.forEach((rowArr, rIdx) => {
      rowArr.forEach((colIdx, cIdx) => {
         const div = document.getElementById(`r${rIdx}c${cIdx}`);
         div.innerHTML = MARKERS[colIdx];
      });
   });
   // if (winner === 'T') {
      //   msgEl.innerHTML = 'HELLO<br><br>A STRANGE GAME.<br>THE ONLY WINNING MOVE IS<br>NOT TO PLAY.<br><br>HOW ABOUT A NICE GAME OF CHESS?';
      //   document.querySelector('button').innerHTML = `THERE IS NO WINNER<BR>PLAY AGAIN?`;
      // } else if (winner) {
         //    msgEl.innerHTML = 
         //    document.querySelector('button').innerHTML = `${PLAYERS[turn]} HAS CHEATED<BR>PLAY AGAIN?`;
         // } else {
            //    msgEl.textContent = 'HELLO<br><br>A STRANGE GAME.<br>THE ONLY WINNING MOVE IS<br>NOT TO PLAY.<br><br>HOW ABOUT A NICE GAME OF CHESS?';
            //    //   msgEl.innerHTML = `${PLAYERS[turn]}'s TURN`;
            // }
         }
         
         function init() {
            board = [
               [null, null, null],
               [null, null, null],
               [null, null, null],
            ];
            winner = null;
            turn = 1;
            render();
         }
         
         /*
         left  -  center  -  right
         [0][0]   [0][1]     [0][2]
         left  -  center  -  right
         [1][0]   [1][1]     [1][2]
         left  -  center  -  right
         [2][0]   [2][1]     [2][2]
         
         Want: 
         Mouseover border styling(or?)
         Line through winning combo
         LOGON: Joshua (case insensitive)
WOPR , PROFESSOR FALKEN
SHALL WE PLAY A GAME
.wavs

images/O-lightcyan.png
images/X-lightcyan.png

LIGHT CYAN: #a8ffff
✖ The HTML code is &#10006;.

Also, google search: 'shall we play a game' ;^)
document.getElementById("myImg").src = "http://www.google.com/image.png"; 
var numbers = string.match(/\d+/g).map(Number);
*/