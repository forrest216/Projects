## Welcome to the Minesweeper abstract

1) Define required constants:
   1.1) Define a TILES object with keys assigned to null, X(BOOM), and numbers 0-8. These will be paired with images representing the value uncovered in the game board by the player, to be inserted into the 'play' array during render.
      1.1.1) There will be three images in addition to the nonzero value images - null is a covered(unplayed) square, 0 is an empty square representing a board tile with no surrounding mines, and X is a mine triggered square(classic red w/mine).

2) Define required variables used to track the state of the game:
   2.1) Use a 'mines' array to represent the placement of the mines and how many mines are in each surrounding square.	
   2.2) Use a 'play' array to represent the state of play, i.e. which squares have been played already and what their value is.
   2.3) Use a 'win' variable to represent three different possibilities - player won(1), BOOM(a loss), or game in play(null).
   2.4) Use a 'click' variable to count the number of moves so far.

<!--Step 3 will likely actually happen in step 4.2-->
3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
   3.1) Store the 64(256)(480) elements that represent the unplayed squares on the HTML page. Alternately, an empty <div> with id 'board'. See 4.2).
   
   3.2) Keep that HTML organized because this could get messy
   <!-- Is it a better idea to render the board onto the page 100% during runtime from the js file? I don't want a messy index.html but which is considered best practice in this type of situation? -->

<!--INIT FUNCTION-->
4) Upon loading the app should:
   4.1) Initialize the state variables:

      <!--THIS HAPPENS ACTUALLY ON CLICK SO THAT THE PLAYER CANNOT CLICK A MINE ON THE FIRST TRY. HOW?-->   
      4.1.1) Initialize the 'mines' array<!--Object?--> dynamically to 81(256)(480) 'null' values to represent potential mine locations. 
         4.1.1.1) Using randomization, assign 10(40)(99) mines to the 'mines' array. These will be entered as an 'X'.
         
      4.1.2) Initialize win to null to represent that there is no win or BOOM yet. Win will hold the value 1 if there's a win. Win will hold a BOOM if there's a loss. 
      
      4.1.3) Initialize a play array<!--Object?--> to represent the squares that have been played already. This array will have the same length as the 'mines' array. This is the array that the board will be rendered from. Each of these array elements will be mapped into dynamically created HTML elements(divs) in the next step. Index 0 will correspond to the top left square and the last index will be on the bottom right, mapping left to right, top to bottom. The initial value of every index will be null.

      4.1.4) Create a game board in the HTML in the size chosen by the player: 
         4.1.4.1) Create a game board in the HTML by iterating over the 'play' array and for each index[i], adding a <div id="index"> into the <div id="board"> with "index" === play[i].
         4.1.4.2) Each <div> will have an initial innerHTML equal to the 'null' image from the TILES object, rendering it as an unplayed square.

      4.1.5) Call the render function:
   
   <!--RENDER FUNCTION-->
   4.2) Render state variables to the page:
      4.2.1) Render the board's play area:
         4.2.1.1) Loop over each of the elements in the 'play' array, and for each iteration:
            4.2.1.1.2) Use the index of the iteration to access the mapped value from the 'play' array.
            4.3.1.1.3) Set the image of the corresponding HTML element by using the value as a key on the TILES object.
      
      4.2.2) Render an image to a separate 'game state' tile above the board:
         4.2.2.1) If there is a mousedown event within the board area, render an image of a wincing smiley as in the original windows game.
         4.2.2.2) If win is equal to BOOM (loss), render a dead smiley image.
         4.2.2.3) Otherwise, render a congratulatory message to the player - an animation perhaps? Definitely a sunglasses emoji in the 'game state' tile, though.
  
   4.3) Wait for the user to click a square

<!--CLICK HANDLER-->
5) Handle a player clicking a square:
   5.1) If win is not null, immediately return because the game is over.
   5.2) The first click should initialize the counter above the game board, which will continue until win !== null.
      5.2.1) The first click, using randomization, assigns 10(40)(99) mines to the 'mines' array. These will be entered as an 'X'.
   5.3) Obtain the index of the square that was clicked by "Extracting" the index from an id assigned to the element during board initialization.  
   5.4) If play[index] has a value other than null(0-8), that square has already been played. RETURN
   5.5) If the value of play[index] is null:
      5.5.1) win = winFunction, defined below.
      
      5.5.2) If mines[index] has a value of 'X', the game is lost.
         5.5.2.1) Game state button displays dead emoji.
         5.5.2.2) Game board is rendered with position of all mines including the one that was just clicked(red).
         5.5.2.3) Timer stops.
         5.5.2.4) Game is over. You are super dead. Play again?<!--LOSS-->
         

      5.5.2) If mines[index] has a number value 0-8:
         5.5.2.1) Mines[index] value is entered into 'play' array.
         5.5.2.2) If the value is 0, all unplayed squares surrounding that one are exposed, propagating across the board until no more 0 values are encountered by the game logic in the 'win' function.
         
         5.5.2.4) You WON! Timer value and move counter are displayed in congratulatory message.<!--Sounds? Animation? Leaderboard? Name entry?-->
   
   5.6) Update the 'play' array at the index with the values of all newly exposed squares.
   5.7) Render().

   <!--WINFUNCTION-->
   5.) Check for a win and update the win variable:
      
      5.6.1) Loop through the each of the winning combination arrays defined.
      
      5.6.2) Total up the three board positions using the three indexes in the current combo.
      
      5.6.3) Convert the total to an absolute value (convert any negative total to positive).
      
      5.6.4) If the total equals 3, we have a win! Set win to the board's value at the index specified by the first index in the combo array. Exit the loop.
   
   5.7) If there's no win, check if there's a tie:
      
      5.7.1) Set win to BOOM if there are no more nulls in the board array.
   
   5.8) All state has been updated, so render the state to the page (step 4.2).
      

6) Handle a player clicking the replay button:
   6.1) Do steps 4.1 (initialize the state variables and board into HTML) and 4.2 (render).

	Height	Width	Mines
 Beginner	9	9	10
 Intermed	16	16	40
 Expert	  16	30	99

