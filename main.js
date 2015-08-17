// Initialization
var clickTarget = document.getElementsByClassName('result');
var step = 0;
function togglePlayer(){
  step % 2 === 0 ? document.getElementById('turn').innerText = "Player 2's turn" :
  document.getElementById('turn').innerText = "Player 1's turn";
  step++;
}
function resetGame() {
  for (var i = 0; i < clickTarget.length; i++) {
    clickTarget[i].innerText = '';
  }
  document.getElementById('turn').innerText = "Player 1's turn";
}
resetGame();
document.getElementById('reset').addEventListener('click',resetGame);
for (var i = 0; i < clickTarget.length; i++) {
  clickTarget[i].addEventListener('click', function(){
    if (this.innerText !== "") {
      // console.log("This square is occupied")
      return;
    } else {
      switch (step % 2) {
        case 0 : this.innerText = "x"; togglePlayer();
        break;
        default: this.innerText = "o"; togglePlayer();
        break;
      }
    }
  });
}