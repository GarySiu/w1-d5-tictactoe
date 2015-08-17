// Initialization
var clickTarget = document.getElementsByClassName('result');
var step = 0;
var playGame = true;
// Each number denotes the index of clickTarget. Each array is a possible winning combo.
var possibleWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function togglePlayer(){
  step % 2 === 0 ? document.getElementById('turn').innerText = "O's turn" :
  document.getElementById('turn').innerText = "X's turn";
  step++;
}
function resetGame() {
  for (var i = 0; i < clickTarget.length; i++) {
    clickTarget[i].innerText = '';
    clickTarget[i].style.color = "black";
  }
  playGame = true;
  document.getElementById('turn').innerText = "X's turn";
  document.getElementById('splash').style.visibility = "hidden";
  document.getElementById('splash').innerText = "TIE GAME :(";
  step = 0;
}
function checkWinner(p) {
  var check = p+p+p;
  for(var w = 0; w < 8; w++) {
    if (clickTarget[possibleWins[w][0]].innerText + clickTarget[possibleWins[w][1]].innerText + clickTarget[possibleWins[w][2]].innerText === check) {
      //Highlight the winning array
      for (var i = 0; i < 3; i++) {
         clickTarget[possibleWins[w][i]].style.color = "red";
       }
    document.getElementById('turn').innerText = p.toUpperCase() + " WINS!";
    playGame = false;
    return true;
    }
  }
  togglePlayer();
  if(step === 9) {
    document.getElementById('splash').style.visibility = "visible";
    document.getElementById('turn').innerText = '';
  }
  return false;
};
//     document.getElementById('xWins').innerText = parseInt(document.getElementById('xWins').innerText) + 1;
//     document.getElementById('oWins').innerText = parseInt(document.getElementById('oWins').innerText) + 1;
// Event listener for reset button
document.getElementById('reset').addEventListener('click',resetGame);
// Event listener for the board
for (var i = 0; i < clickTarget.length; i++) {
  clickTarget[i].addEventListener('click', function(){
//This is the main game loop
    if (playGame === false) {
      console.log("Someone already won");
      return;
    } else if (this.innerText !== "") {
      console.log("This square is occupied");
      return;
    } else {
      switch (step % 2) {
        case 0 : this.innerText = "x";
        checkWinner('x'); 
        break;
        default: this.innerText = "o";
        checkWinner('o');
        break;
      }
    }
  });
}