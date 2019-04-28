/*----- constants -----*/ 
const MARKERS = {
   '1': 'X',
   '-1': 'O',
   'null': '#111'
};

/*----- app's state (variables) -----*/ 
var board, winner, turn;

/*----- cached references -----*/ 
const msgEl = document.getElementById('msg');
const divImg = evt.target.innerHTML
const imgSrc = `<img src="images/${MARKERS[turn]}-lightcyan.png">`;
/*----- event listeners -----*/ 
document.querySelector('section').addEventListener('click', tictac);
document.querySelector('button').addEventListener('click', tictac);

// /*----- functions -----*/
init();

function tictac(evt) {
   const div = evt.target.id.match(/\d+/g).map(Number); // Outputs [row, col] of square clicked
   const row = div[0]; // Row index
   const col = div[1]; // Column index
   if (board[row][col] || winner) return; // Disables marker change in prev. clicked square
   // winner = getWinner();
   board[row][col] = turn;
   turn * -1;
   //render();
}

// GETWINNER
// function getWinner() {
//     if (Math.abs(board))
//    // Winner will be 'T', null, or player, which can be retrieved from any idx of winning combo
// }

// RENDER
 
         // msgEl.textContent = 'HELLO<br><br>A STRANGE GAME.<br>THE ONLY WINNING MOVE IS<br>NOT TO PLAY.<br><br>HOW ABOUT A NICE GAME OF CHESS?';
  

function init() {
   board = [
       [null, null, null],
       [null, null, null],
       [null, null, null],
   ];
   winner = null;
   turn = 1;
   // render();
}

// left  -  center  -  right
// [0][0]   [0][1]     [0][2]
// left  -  center  -  right
// [1][0]   [1][1]     [1][2]
// left  -  center  -  right
// [2][0]   [2][1]     [2][2]

//    Want: 
// Mouseover border styling(or?)
// Line through winning combo
// LOGON: Joshua (case insensitive)
// WOPR , PROFESSOR FALKEN
// SHALL WE PLAY A GAME

//images/O-lightcyan.png
//images/X-lightcyan.png

// LIGHT CYAN: #a8ffff
// ✖ The HTML code is &#10006;.

// Also, google search: 'shall we play a game' ;^)
document.getElementById("myImg").src = "http://www.google.com/image.png"; 
// var numbers = string.match(/\d+/g).map(Number);
